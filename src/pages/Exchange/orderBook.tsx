import { useQuery } from "react-query"
import { newOrderBook } from "../../entities/OrderBook"
import { Row } from "../../components/organisms/Row"
import { Mask } from "../../helpers/Mask"
import Icon from "../../components/atoms/Icon"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { useFormikContext } from "formik"

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
            {(isLoading || isRefetching) && <Icon icon={AiOutlineLoading3Quarters} loading width={30} />}

            <Row.FourColumnRow borderBotom text={["Total", "Preço", "Preço", "Total"]} color={["", "", "", ""]} />
            <div style={{ overflowY: "auto", height: "300px" }}>
                {data?.asks.map((ask, i) =>
                    <Row.FourColumnRow
                        key={i}
                        borderBotom
                        onClick={() => handle(Number(ask[1]), Number(ask[0]))}
                        text={[
                            Mask.parser[ticker].quantity(ask[1]),
                            Mask.parser[ticker].currency(ask[0]),
                            Mask.parser[ticker].currency(data?.bids[i][0]),
                            Mask.parser[ticker].quantity(data?.bids[i][1])
                        ]}
                        color={["red", "red", "green", "green"]}
                    />
                )}
            </div>
        </>
    )
}

export default OrderBook