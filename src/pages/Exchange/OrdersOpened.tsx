import { useMutation, useQuery } from "react-query"
import Table from "../../components/atoms/Table"
import { Decimal, Mask } from "../../helpers/Mask"
import Order from "../../entities/Order"
import { dispatchAddNotification } from "../../features/toaster/toasterDispatcher"

const OrdersOpened = () => {
  const newOrder = new Order
  const { data, refetch } = useQuery("ordersOpened", () => newOrder.list({ status: "OPEN" }), { staleTime: Infinity, cacheTime: Infinity })

  const mutation = useMutation(newOrder.cancel, {
    onSuccess: ({ status, uuid }) => {
      refetch()
      dispatchAddNotification({
        subtitle: `Ordem ${uuid} cancelada`,
        text: `Status: ${status}`,
        subtext: "",
        toasterStyle: { type: "success" },
        active: true,
      })
    },
    onError: () => refetch(),
  })

  return (
    <Table
      tableStyle={{ height: "300px" }}
      headers={[
        { text: "Data", cellStyle: { textAlign: "left" } },
        { text: "Tipo", cellStyle: { textAlign: "left" } },
        { text: "Preço", cellStyle: { textAlign: "left" } },
        { text: "Quantidade", cellStyle: { textAlign: "left" } },
        { text: "Total", cellStyle: { textAlign: "left" } },
        { text: "", cellStyle: { textAlign: "left" } },
      ]}
      rows={
        data?.map((order, i) => {
          return {
            cell: [
              { text: order.created_at.toLocaleString(), },
              { text: order.type, },
              { text: Mask.currency(order.price, Decimal.USDT, "BRL"), },
              { text: Mask.currency(order.amount, Decimal.USD, "USD"), },
              { text: Mask.currency(order.amount * order.price), },
              { text: mutation.isLoading ? "Cancelando..." : "X", onClick: () => mutation.isLoading ? {} : mutation.mutate(order.uuid), },
            ]
          }
        })
        ??
        [{ cell: [{ text: "Carregando" }] }]
      }
    />
  )
}

export default OrdersOpened