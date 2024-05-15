import { useQuery } from "react-query"
import { newOrderBook } from "../../entities/OrderBook"
import { Mask, Parser } from "../../helpers/Mask"
import Icon from "../../components/atoms/Icon"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { useFormikContext } from "formik"
import Table from "../../components/atoms/Table"

const OrderBook = () => {
  const { setFieldValue } = useFormikContext()
  const ticker = "USDTBRL"
  const { data, isLoading, isRefetching } = useQuery("orderBook", () => newOrderBook.getBook({ symbol: ticker, limit: 10 }), { refetchInterval: 1000 })

  function handle(quantity: number, volume: number) {
    setFieldValue("quantity", Mask.currencyBrl(quantity.toString()))
    setFieldValue("volume", Mask.currencyTether(volume.toFixed(0)))
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
                { text: Parser[ticker].quantity(data?.bids[i][1] ?? ""), cellStyle: { color: "#0D9E00", textAlign: "right" }, },
                { text: Parser[ticker].currency(data?.bids[i][0] ?? ""), cellStyle: { color: "#0D9E00", textAlign: "right" }, },
                { text: Parser[ticker].currency(ask[0]), cellStyle: { color: "#FF2F21", textAlign: "left" }, },
                { text: Parser[ticker].quantity(ask[1]), cellStyle: { color: "#FF2F21", textAlign: "left" }, },
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