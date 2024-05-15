import { useFormikContext } from "formik"
import { Row } from "../../components/molecules/Row"
import { RowProps } from "../../interfaces"
import { theme } from "../../providers/theme"
import { ExchangeFormIntercace } from "./form"
import { Mask } from "../../helpers/Mask"
import { calc } from "../../helpers/Converter"

const ExchangeBalances = () => {
    const { setFieldValue, values } = useFormikContext()
    const rowStyle: RowProps = { borderBottom: `1px solid ${theme.colors.main.stroke}` }
    const _values = values as ExchangeFormIntercace
    const quote = Mask.unmaskAmount(_values.limit) / 100
    const brl = 50000
    const tether = 50000

    function handle(quantity: number, volume: number) {
        setFieldValue("quantity", Mask.currencyBrl(quantity.toString()))
        setFieldValue("volume", Mask.currencyTether(volume.toFixed(0)))
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
                    <Row.Title size="smaller" cursor="pointer" onClick={() => handle(brl, calc("multiply", brl, Number(quote.toFixed())))}>
                        {Mask.currencyBrl(brl.toString())}
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
                    <Row.Title size="smaller" cursor="pointer" onClick={() => handle(calc("divide", tether, Number(quote.toFixed())), tether)}>
                        {Mask.currencyTether(tether.toString())}
                    </Row.Title>
                </Row.Section>
            </Row.Root>
        </>
    )
}

export default ExchangeBalances