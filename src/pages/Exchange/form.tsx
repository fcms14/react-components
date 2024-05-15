import { Form, Formik } from "formik"
import Input from "../../components/atoms/Input"
import { Button } from "../../components/organisms/Button"
import { dispatchAddNotification } from "../../features/toaster/toasterDispatcher"
import { Mask } from "../../helpers/Mask"
import OrderBook from "./orderBook"
import { ButtonDefaultInterface } from "../../interfaces"
import { useState } from "react"

interface Interface {
  children?: JSX.Element | JSX.Element[]
}

export interface ExchangeFormIntercace {
  isLimitOrder: boolean
  isBuyOrder: boolean
  limit: string
  quantity: string
  volume: string
}

const ExchangeForm = ({ children }: Interface) => {
  const [showPanel, setShowPanel] = useState<"OrderBook" | "OrderOpen" | "OrderHistory">("OrderBook")

  const initialValues: ExchangeFormIntercace = {
    isLimitOrder: true,
    isBuyOrder: true,
    limit: "",
    quantity: "",
    volume: "",
  }

  const buttons: ButtonDefaultInterface[] = [
    { text: "Livro de Ofertas", buttonStyle: { active: true, secondary: !(showPanel === "OrderBook") }, onClick: () => { setShowPanel("OrderBook") } },
    { text: "Ordens Abertas", buttonStyle: { active: true, secondary: !(showPanel === "OrderOpen") }, onClick: () => { setShowPanel("OrderOpen") } },
    { text: "Ordens Executadas", buttonStyle: { active: true, secondary: !(showPanel === "OrderHistory") }, onClick: () => { setShowPanel("OrderHistory") } },
  ]

  function handleBase(values: ExchangeFormIntercace) {
    return Mask.currencyTether((
      (Mask.unmaskAmount(values.quantity) / Mask.unmaskAmount(values.limit)) * 100
    ).toFixed(0))
  }

  function handleTotal(values: ExchangeFormIntercace) {
    return Mask.currencyBrl((
      (Mask.unmaskAmountTether(values.volume) * Mask.unmaskAmount(values.limit)) / 100
    ).toFixed(0))
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={(values) => { }} >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            {children}
            <main>
              <section>
                {values.isLimitOrder &&
                  <Input
                    onChange={() => setFieldValue("volume", handleBase(values))}
                    mask={"currencyBrl"}
                    label="Preço Limite"
                    name={"limit"}
                    type={"text"}
                    inputMode={"numeric"}
                  />
                }
                <Input
                  onChange={() => setFieldValue("quantity", handleTotal(values))}
                  mask={"currencyTether"}
                  label="Quantidade: Tether"
                  name={"volume"}
                  type={"text"}
                  inputMode={"numeric"}
                />
                <Input
                  onChange={() => setFieldValue("volume", handleBase(values))}
                  mask={"currencyBrl"}
                  label="Quantidade: Reais"
                  name={"quantity"}
                  type={"text"}
                  inputMode={"numeric"}
                />
              </section>
              <Button.Default
                text={values.isBuyOrder ? "Comprar" : "Vender"}
                onClick={() => dispatchAddNotification(
                  {
                    subtitle: `Ordem enviada ${Math.random().toFixed(2)}`,
                    text: "Aguarde o processamento de sua ordem",
                    subtext: "Acompanhe em sua lista de ordens abertas",
                    toasterStyle: { type: "success" },
                    active: true,
                  }
                )}
                buttonStyle={{
                  active: true,
                  color: values.isBuyOrder ? "#0D9E00" : "#FF2F21",
                  isLoading: false,
                  secondary: false,
                  type: "submit",
                }}
              />
            </main>
            <aside>
              <Button.Panel buttons={buttons} />
              {showPanel === "OrderBook" && <OrderBook />}
            </aside>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ExchangeForm