import { useState } from "react";
import Toggle from "../../components/atoms/Toggle"
import { Row } from "../../components/molecules/Row"

const OrderSelectorType = () => {
    const [isBuyOrder, setBuyOrder] = useState(true);
    const [isLimitOrder, setLimitOrder] = useState(true);

    return (
        <Row.Root>
            <Row.Section>
                <Toggle
                    text={isLimitOrder ? "Ordem Limite" : "Ordem a Mercado"}
                    onToggleChange={(checked: boolean) => setLimitOrder(checked)}
                    toggleStyle={{ flexDirection: "row-reverse", justifyContent: "flex-end" }}
                />
            </Row.Section>
            <Row.Section sectionStyle={{ alignItems: "flex-end" }}>
                <Toggle
                    text={isBuyOrder ? "Comprar" : "Vender"}
                    onToggleChange={(checked: boolean) => setBuyOrder(checked)}
                    color={isBuyOrder ? "#0D9E00" : "#FF2F21"}
                />
            </Row.Section>
        </Row.Root>
    )
}

export default OrderSelectorType