import { useFormikContext } from "formik"
import { Row } from "../../components/molecules/Row"
import { RowProps } from "../../interfaces"
import { theme } from "../../providers/theme"

interface FormIntercace {
    isLimitOrder: boolean
    limit: string
    quantity: string
    volume: string
}

const ExchangeBalances = () => {
    const { setFieldValue, values } = useFormikContext()
    const rowStyle: RowProps = { borderBottom: `1px solid ${theme.colors.main.stroke}` }
    const _values = values as FormIntercace
    const quote = Number(((_values?.limit ?? "").replace(/\D+/g, ''))) / 100

    return (
        <>
            <Row.Root rowStyle={rowStyle}>
                <Row.Section>
                    <Row.Text>Moeda</Row.Text>
                    <Row.Title size="smaller">Reais</Row.Title>
                </Row.Section>
                <Row.Section sectionStyle={{ alignItems: "flex-end" }}>
                    <Row.Text>Saldo</Row.Text>
                    <Row.Title size="smaller" cursor="pointer" onClick={() => {
                        setFieldValue("volume", quote ? `$ ${(500 / quote).toFixed(2)}` : '')
                        setFieldValue("quantity", "R$ 500,00")
                    }}>R$ 500,00</Row.Title>
                </Row.Section>
            </Row.Root>
            <Row.Root rowStyle={rowStyle}>
                <Row.Section>
                    <Row.Text>Moeda</Row.Text>
                    <Row.Title size="smaller">Tether</Row.Title>
                </Row.Section>
                <Row.Section sectionStyle={{ alignItems: "flex-end" }}>
                    <Row.Text>Saldo</Row.Text>
                    <Row.Title size="smaller" cursor="pointer" onClick={() => {
                        setFieldValue("quantity", quote ? `R$ ${(500 * quote).toFixed(2)}` : '')
                        setFieldValue("volume", "$ 500,00")
                    }}>$ 500,00</Row.Title>
                </Row.Section>
            </Row.Root>
        </>
    )
}

export default ExchangeBalances