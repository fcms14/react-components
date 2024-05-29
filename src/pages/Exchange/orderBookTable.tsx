import { useQuery } from "react-query"
import { useFormikContext } from "formik"
import Table from "../../components/atoms/Table"
import { CellProps } from "../../interfaces"
import { ExchangeFormIntercace } from "./form"
import { Decimal, Fractions, Mask, Parser } from "../../helpers/Mask"
import OrderBook from "../../entities/OrderBook"

interface Interface {
  ticker: keyof typeof Fractions
}

const OrderBookTable = ({ ticker }: Interface) => {
  const newOrderBook = new OrderBook

  const buyStyle: CellProps = { color: "#0D9E00", textAlign: "right" }
  const sellStyle: CellProps = { color: "#FF2F21", textAlign: "left" }

  const { setFieldValue, values } = useFormikContext()
  const _values = values as ExchangeFormIntercace

  const { data } = useQuery("orderBook", () => newOrderBook.list({ symbol: ticker, limit: 10 }), { refetchInterval: 5000 })

  function handleQuantity(quantity: string, limit: string) {
    const total = Number(quantity) * Number(limit)

    setFieldValue("limit", Mask.currency(Number(limit), Decimal.USDT))
    setFieldValue("quantity", Number(quantity))
    setFieldValue("total", Mask.currency(Number(total)))
  }

  function handleLimit(limit: string) {
    setFieldValue("limit", Mask.currency(Number(limit), Decimal.USDT))

    if (_values.quantity) {
      setFieldValue("total", Mask.currency(Number(_values.quantity) * Number(limit)))
      return
    }

    if (_values.total) {
      setFieldValue("quantity", (Parser.unmasker(_values.total) / Number(limit)).toFixed(Fractions[ticker]))
      return
    }
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

export default OrderBookTable