import { useQuery } from "react-query"
import { newOrderBook } from "../../entities/OrderBook"
import { Mask, Parser, ParserType } from "../../helpers/Mask"
import Icon from "../../components/atoms/Icon"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { useFormikContext } from "formik"
import Table from "../../components/atoms/Table"
import { CellProps } from "../../interfaces"
import { ExchangeFormIntercace } from "./form"

const OrderBook = () => {
  const ticker = "USDTBRL"
  const buyStyle: CellProps = { color: "#0D9E00", textAlign: "right" }
  const sellStyle: CellProps = { color: "#FF2F21", textAlign: "left" }
  const { setFieldValue, values } = useFormikContext()
  const _values = values as ExchangeFormIntercace
  const { data, isLoading, isRefetching } = useQuery("orderBook", () => newOrderBook.getBook({ symbol: ticker, limit: 10 }), { refetchInterval: 1000 })

  function handleQuantity(volume: string, limit: string) {
    const quantity = Number(volume) * Number(limit)

    setFieldValue("limit", Parser[ticker].currency(limit))
    setFieldValue("volume", Parser[ticker].quantity(volume))
    setFieldValue("quantity", Parser[ticker].currency(quantity.toString()))
  }

  function handleLimit(limit: string) {
    const quantity = Mask.unmaskAmountTether(_values.volume) / 100 * Number(limit)  
    
    setFieldValue("limit", Parser[ticker].currency(limit))
    setFieldValue("quantity", Parser[ticker].currency(quantity.toString()))
  }

  return (
    <>
      {/* {(isLoading || isRefetching) && <Icon icon={AiOutlineLoading3Quarters} loading width={30} />} */}
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
            return {
              cell: [
                {
                  text: Parser[ticker].quantity(data?.bids[i][1] ?? ""),
                  onClick: () => handleQuantity(data?.bids[i][1], data?.bids[i][0]),
                  cellStyle: buyStyle,
                },
                {
                  text: Parser[ticker].currency(data?.bids[i][0] ?? ""),
                  onClick: () => handleLimit(data?.bids[i][0]),
                  cellStyle: buyStyle,
                },
                {
                  text: Parser[ticker].currency(ask[0]),
                  onClick: () => handleLimit(ask[0]),
                  cellStyle: sellStyle,
                },
                {
                  text: Parser[ticker].quantity(ask[1]),
                  onClick: () => handleQuantity(ask[1], ask[0]),
                  cellStyle: sellStyle,
                },
              ]
            }
          })
          ?? [{ cell: [{ text: "Carregando" }] }]
        }
      />
    </>
  )
}

export default OrderBook