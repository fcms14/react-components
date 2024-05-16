import { useQuery } from "react-query"
import { newOrderBook } from "../../entities/OrderBook"
import { useFormikContext } from "formik"
import Table from "../../components/atoms/Table"
import { CellProps } from "../../interfaces"
import { ExchangeFormIntercace } from "./form"
import { Decimal, Mask, Parser } from "../../helpers/Mask"

const OrderBook = () => {
  const ticker = "USDTBRL"
  const buyStyle: CellProps = { color: "#0D9E00", textAlign: "right" }
  const sellStyle: CellProps = { color: "#FF2F21", textAlign: "left" }
  const { setFieldValue, values } = useFormikContext()
  const _values = values as ExchangeFormIntercace
  const { data } = useQuery("orderBook", () => newOrderBook.getBook({ symbol: ticker, limit: 10 }), { refetchInterval: 5000 })

  function handleQuantity(quantity: string, limit: string) {
    const total = Number(quantity) * Number(limit)

    setFieldValue("limit", Mask.currency(Number(limit), Decimal.USDT))
    setFieldValue("quantity", Mask.currency(Number(quantity), Decimal.USD, "USD"))
    setFieldValue("total", Mask.currency(Number(total)))
  }

  function handleLimit(limit: string) {
    const total = Parser.unmasker(_values.quantity, "US$") * Number(limit)

    setFieldValue("limit", Mask.currency(Number(limit), Decimal.USDT))
    setFieldValue("total", Mask.currency(Number(total)))
  }

  let accBid = 0
  let accAsk = 0
  const bids: number[] = []
  const asks: number[] = []

  return (
    <Table
      tableStyle={{ height: "300px" }}
      headers={[
        { text: "Total", cellStyle: { textAlign: "right" } },
        { text: "Preço", cellStyle: { textAlign: "right" } },
        { text: "Preço", cellStyle: { textAlign: "left" } },
        { text: "Total", cellStyle: { textAlign: "left" } }
      ]}
      rows={
        data?.asks.map((ask, i) => {
          accBid += Number(data?.bids[i][1])
          accAsk += Number(ask[1])
          bids.push(accBid)
          asks.push(accAsk)

          return {
            cell: [
              {
                text: Mask.currency(bids[i], Decimal.USD, "USD"),
                onClick: () => handleQuantity(bids[i].toString(), data?.bids[i][0]),
                cellStyle: buyStyle,
              },
              {
                text: Mask.currency(Number(data?.bids[i][0]), Decimal.USDT),
                onClick: () => handleLimit(data?.bids[i][0]),
                cellStyle: buyStyle,
              },
              {
                text: Mask.currency(Number(ask[0]), Decimal.USDT),
                onClick: () => handleLimit(ask[0]),
                cellStyle: sellStyle,
              },
              {
                text: Mask.currency(asks[i], Decimal.USD, "USD"),
                onClick: () => handleQuantity(asks[i].toString(), ask[0]),
                cellStyle: sellStyle,
              },
            ]
          }
        })
        ?? [{ cell: [{ text: "Carregando" }] }]
      }
    />
  )
}

export default OrderBook