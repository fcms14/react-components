import { useMutation, useQuery, useQueryClient } from "react-query"
import Table from "../../components/atoms/Table"
import { Decimal, Mask } from "../../helpers/Mask"
import Order, { OrderStatus } from "../../entities/Order"
import { dispatchAddNotification } from "../../features/toaster/toasterDispatcher"
import { sse } from "./eventListener"
import { useEffect, useState } from "react"

interface Interface {
  status: keyof OrderStatus
}

const OrdersList = ({ status }: Interface) => {
  const queryClient = useQueryClient();
  const newOrder = new Order
  const [cancellingOrderUuid, setCancellingOrderUuid] = useState<string | null>(null);
  const { data, refetch } = useQuery(["ordersOpened", status], () => newOrder.list({ status: status }), { staleTime: Infinity, cacheTime: Infinity })

  useEffect(() => {
    if (status === "OPEN") {
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
      setCancellingOrderUuid(null);
    },
    onError: () => {
      setCancellingOrderUuid(null); // Reset the state on error
      refetch();
    }
    
  })
 
  return (
    <Table
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
        data && Array.isArray(data) && data.length > 0 ?
          data?.map((order, i) => {
            return {
              cell: [
                { text:  Mask.dateTime(order.created_at) },
                { text: order.type, },
                { text: order.side, },
                { text: Mask.currency(order.price, Decimal.USDT, "BRL"), },
                { text: Mask.currency(order.amount, Decimal.USD, "USD"), },
                { text: Mask.currency(order.volume), },
                {
                  text:
                  order.status === "OPEN"
                  ? cancellingOrderUuid === order.uuid
                    ? "Cancelando..."
                    : "X"
                  : "X",
                  onClick: () => {
                    if (order.status === "OPEN" && !mutation.isLoading) {
                      setCancellingOrderUuid(order.uuid);
                      mutation.mutate(order.uuid);
                  }
                  } 
                },
              ]
            }
        }) ?? [{ cell: [{ text: "Carregando" }] }] : [{ cell: [{ text: "Nenhuma ordem encontrada" }] }]
      }
    />
  )
}

export default OrdersList