import { useFormikContext } from "formik"
import { Row } from "../../components/molecules/Row"
import { RowProps } from "../../interfaces"
import { theme } from "../../providers/theme"
import { ExchangeFormIntercace } from "./form"
import { Decimal, Mask, Parser } from "../../helpers/Mask"

const ExchangeBalances = () => {
    const { setFieldValue, values } = useFormikContext()
    const rowStyle: RowProps = { borderBottom: `1px solid ${theme.colors.main.stroke}` }
    const _values = values as ExchangeFormIntercace
    const quote = Parser.unmasker(_values.limit)
    const brl = Parser.intToFloat(50000)
    const tether = Parser.intToFloat(50000)

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