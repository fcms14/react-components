import { useFormikContext } from "formik"
import { Row } from "../../components/molecules/Row"
import { RowProps } from "../../interfaces"
import { theme } from "../../providers/theme"
import { ExchangeFormIntercace } from "./form"
import { Decimal, Mask, Parser } from "../../helpers/Mask"
import UserAccount from "../../entities/UserAccount"
import { useQuery } from "react-query"

const ExchangeBalances = () => {
    const newUserAccount = new UserAccount
    const { data } = useQuery("userAccount", () => newUserAccount.list(), { staleTime: Infinity, cacheTime: Infinity })

    const brl = data?.find((value) => value.name === "BRL")?.balance ?? 0
    const tether = data?.find((value) => value.name === "USDT")?.balance ?? 0

    const { setFieldValue, values } = useFormikContext()
    const _values = values as ExchangeFormIntercace

    const quote = Parser.unmasker(_values.limit)

    const rowStyle: RowProps = { borderBottom: `1px solid ${theme.colors.main.stroke}` }

    function handle(total: number, quantity: number) {
        setFieldValue("quantity", Mask.currency(quantity, Decimal.USD, "USD"))
        setFieldValue("total", Mask.currency(total))
    }

    return (
        <>
            <Row.Root rowStyle={rowStyle}>
                <Row.Section>
                    <Row.Text>Moeda</Row.Text>
                    <Row.Title size="smaller">Reais</Row.Title>
                </Row.Section>
                <Row.Section sectionStyle={{ alignItems: "flex-end" }}>
                    <Row.Text>Saldo</Row.Text>
                    <Row.Title size="smaller" cursor="pointer" onClick={() => handle(brl, (brl / quote))}>
                        {Mask.currency(brl)}
                    </Row.Title>
                </Row.Section>
            </Row.Root>
            <Row.Root rowStyle={rowStyle}>
                <Row.Section>
                    <Row.Text>Moeda</Row.Text>
                    <Row.Title size="smaller">Tether</Row.Title>
                </Row.Section>
                <Row.Section sectionStyle={{ alignItems: "flex-end" }}>
                    <Row.Text>Saldo</Row.Text>
                    <Row.Title size="smaller" cursor="pointer" onClick={() => handle((tether * quote), tether)}>
                        {Mask.currency(tether, Decimal.USD, "USD")}
                    </Row.Title>
                </Row.Section>
            </Row.Root>
        </>
    )
}

export default ExchangeBalances