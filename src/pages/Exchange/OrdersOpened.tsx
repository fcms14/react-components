import { useQuery } from "react-query"
import Table from "../../components/atoms/Table"
import { Decimal, Mask, Parser } from "../../helpers/Mask"
import { newOrder } from "../../entities/Order"

const OrdersOpened = () => {
  const { data, refetch } = useQuery("ordersOpened", () => newOrder.list("c97904b1-ec1c-4816-87ff-3a7f5fcbf19d", "OPEN"), { staleTime: Infinity, cacheTime: Infinity })

  async function handleCancel(uuid: string) {
    try {
      await newOrder.cancel(uuid)
      refetch()
    } catch (error) {
      console.log(error)
    }
  }

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
              { text: Mask.currency(Parser.intToFloat(order.price), Decimal.USDT, "BRL"), },
              { text: Mask.currency(Parser.intToFloat(order.amount), Decimal.USD, "USD"), },
              { text: Mask.currency(Parser.intToFloat(order.amount * order.price / 100)), },
              { text: "X", onClick: () => handleCancel(order.uuid), },
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