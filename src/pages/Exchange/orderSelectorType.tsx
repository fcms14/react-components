import Toggle from "../../components/atoms/Toggle"
import { Row } from "../../components/molecules/Row"
import { useFormikContext } from "formik";
import { ExchangeFormIntercace } from "./form";

const OrderSelectorType = () => {
    const { setFieldValue, values } = useFormikContext()
    const _values = values as ExchangeFormIntercace

    return (
        <Row.Root>
            <Row.Section>
                <Toggle
                    text={_values.isLimitOrder ? "Ordem Limite" : "Ordem a Mercado"}
                    onToggleChange={(checked: boolean) => setFieldValue("isLimitOrder", checked)}
                    toggleStyle={{ flexDirection: "row-reverse" }}
                />
            </Row.Section>
            <Row.Section sectionStyle={{ alignItems: "flex-end" }}>
                <Toggle
                    text={_values.isBuyOrder ? "Comprar" : "Vender"}
                    onToggleChange={(checked: boolean) => setFieldValue("isBuyOrder", checked)}
                    color={_values.isBuyOrder ? "#0D9E00" : "#FF2F21"}
                />
            </Row.Section>
        </Row.Root>
    )
}

export default OrderSelectorType