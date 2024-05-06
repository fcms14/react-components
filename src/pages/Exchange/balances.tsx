import { useFormikContext } from "formik"
import { Row } from "../../components/molecules/Row"
import { RowProps } from "../../interfaces"
import { theme } from "../../providers/theme"
import { ExchangeFormIntercace } from "./form"
import { Mask } from "../../helpers/Mask"

const ExchangeBalances = () => {
    const { setFieldValue, values } = useFormikContext()
    const rowStyle: RowProps = { borderBottom: `1px solid ${theme.colors.main.stroke}` }
    const _values = values as ExchangeFormIntercace
    const quote = Mask.unmaskAmount(_values.limit)
    const brl = 50000
    const tether = 50000

    return (
        <>
            <Row.Root rowStyle={rowStyle}>
                <Row.Section>
                    <Row.Text>Moeda</Row.Text>
                    <Row.Title size="smaller">Reais</Row.Title>
                </Row.Section>
                <Row.Section sectionStyle={{ alignItems: "flex-end" }}>
                    <Row.Text>Saldo</Row.Text>
                    <Row.Title size="smaller" cursor="pointer"
                        onClick={() => {
                            setFieldValue("quantity", Mask.currencyBrl(brl.toString()))
                            setFieldValue("volume", quote ? Mask.currencyTether(((brl / quote) * 100).toFixed(0)) : '')
                        }}
                    >
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
                    <Row.Title size="smaller" cursor="pointer"
                        onClick={() => {
                            setFieldValue("quantity", quote ? Mask.currencyBrl(((tether * quote) / 100).toString()) : '')
                            setFieldValue("volume", Mask.currencyTether(tether.toString()))
                        }}
                    >
                        {Mask.currencyTether(tether.toString())}
                    </Row.Title>
                </Row.Section>
            </Row.Root>
        </>
    )
}

export default ExchangeBalances