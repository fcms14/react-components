import { useMutation, useQuery, useQueryClient } from "react-query"
import Table from "../../components/atoms/Table"
import { Decimal, Mask } from "../../helpers/Mask"
import Order, { ListInterface } from "../../entities/Order"
import { dispatchAddNotification } from "../../features/toaster/toasterDispatcher"
import { sse } from "./eventListener"
import { useEffect, useState } from "react"
import { theme } from "../../providers/theme"

interface Interface {
  listOptions: ListInterface
}

const OrdersList = ({ listOptions }: Interface) => {
  const queryClient = useQueryClient()
  const newOrder = new Order
  const [cancellingOrderUuid, setCancellingOrderUuid] = useState<string[]>([])
  const { data, refetch, isLoading } = useQuery(["ordersOpened", listOptions.status], () => newOrder.list(listOptions), { staleTime: Infinity, cacheTime: Infinity })

  useEffect(() => {
    if (listOptions.status === "OPEN") {
      data?.map((order) => sse(order.uuid, queryClient))
    }
  }, [data])

  const mutation = useMutation(newOrder.cancel, {
    onSuccess: ({ status, uuid }) => {
      queryClient.refetchQueries({ queryKey: ['userAccount'] })
      refetch()
      dispatchAddNotification({
        subtitle: `Ordem ${uuid} cancelada`,
        text: `Status: ${status}`,
        subtext: "",
        toasterStyle: { type: "success" },
        active: true,
      })
      setCancellingOrderUuid(cancellingOrderUuid.filter(value => value !== uuid))
    },
    onError: ({ uuid }) => {
      refetch()
      setCancellingOrderUuid(cancellingOrderUuid.filter(value => value !== uuid))
    }

  })

  return (<>
    {(isLoading || !data?.length) &&
      <div style={{ height: "300px", padding: theme.padding.main }}>
        {isLoading ? "Carregando..." : "Nenhuma ordem encontrada"}
      </div>
    }
    {data && data?.length > 0 && <Table
      tableStyle={{ height: "300px" }}
      headers={[
        { text: "Data", cellStyle: { textAlign: "left" } },
        { text: "Tipo", cellStyle: { textAlign: "left" } },
        { text: "Operacão", cellStyle: { textAlign: "left" } },
        { text: "Preço", cellStyle: { textAlign: "left" } },
        { text: "Quantidade", cellStyle: { textAlign: "left" } },
        { text: "Total", cellStyle: { textAlign: "left" } },
        { text: "", cellStyle: { textAlign: "left" } },
      ]}
      rows={
        data.map((order, i) => {
          return {
            cell: [
              { text: Mask.dateTime(order.created_at) },
              { text: order.type, },
              { text: order.side, },
              { text: Mask.currency(order.price, Decimal.USDT, "BRL"), },
              { text: Mask.currency(order.amount, Decimal.USD, "USD"), },
              { text: Mask.currency(order.volume), },
              {
                text:
                  order.status === "OPEN"
                    ? cancellingOrderUuid.find(value => value === order.uuid)
                      ? "Cancelando..."
                      : "X"
                    : "",
                onClick: () => {
                  if (order.status === "OPEN" && !cancellingOrderUuid.find(value => value === order.uuid)) {
                    setCancellingOrderUuid([...cancellingOrderUuid, order.uuid])
                    mutation.mutate(order.uuid)
                  }
                }
              },
            ]
          }
        })
      }
    />}
  </>
  )
}

export default OrdersList