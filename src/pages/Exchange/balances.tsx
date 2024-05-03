import { Row } from "../../components/molecules/Row"
import { RowProps } from "../../interfaces"
import { theme } from "../../providers/theme"

const ExchangeBalances = () => {
    const rowStyle: RowProps = { borderBottom: `1px solid ${theme.colors.main.stroke}` }

    return (
        <>
            <Row.Root rowStyle={rowStyle}>
                <Row.Section>
                    <Row.Text size="big">Moeda</Row.Text>
                    <Row.Title size="smaller">Reais</Row.Title>
                </Row.Section>
                <Row.Section sectionStyle={{ alignItems: "flex-end" }}>
                    <Row.Text size="big">Saldo</Row.Text>
                    <Row.Title size="smaller">R$ 100,00</Row.Title>
                </Row.Section>
            </Row.Root>
            <Row.Root rowStyle={rowStyle}>
                <Row.Section>
                    <Row.Text size="big">Moeda</Row.Text>
                    <Row.Title size="smaller">Tether</Row.Title>
                </Row.Section>
                <Row.Section sectionStyle={{ alignItems: "flex-end" }}>
                    <Row.Text size="big">Saldo</Row.Text>
                    <Row.Title size="smaller">$ 100,00</Row.Title>
                </Row.Section>
            </Row.Root>
        </>
    )
}

export default ExchangeBalances