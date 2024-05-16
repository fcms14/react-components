import { Form, Formik } from "formik"
import Input from "../../components/atoms/Input"
import { Button } from "../../components/organisms/Button"
import { dispatchAddNotification } from "../../features/toaster/toasterDispatcher"
import OrderBook from "./orderBook"
import { ButtonDefaultInterface } from "../../interfaces"
import { useState } from "react"
import { Decimal, Mask, Parser } from "../../helpers/Mask"

interface Interface {
  children?: JSX.Element | JSX.Element[]
}

export interface ExchangeFormIntercace {
  isLimitOrder: boolean
  isBuyOrder: boolean
  limit: string
  total: string
  quantity: string
}

const ExchangeForm = ({ children }: Interface) => {
  const [showPanel, setShowPanel] = useState<"OrderBook" | "OrderOpen" | "OrderHistory">("OrderBook")

  const initialValues: ExchangeFormIntercace = {
    isLimitOrder: true,
    isBuyOrder: true,
    limit: "",
    total: "",
    quantity: "",
  }

  const buttons: ButtonDefaultInterface[] = [
    { text: "Livro de Ofertas", buttonStyle: { active: true, secondary: !(showPanel === "OrderBook") }, onClick: () => { setShowPanel("OrderBook") } },
    { text: "Ordens Abertas", buttonStyle: { active: true, secondary: !(showPanel === "OrderOpen") }, onClick: () => { setShowPanel("OrderOpen") } },
    { text: "Ordens Executadas", buttonStyle: { active: true, secondary: !(showPanel === "OrderHistory") }, onClick: () => { setShowPanel("OrderHistory") } },
  ]

  function handleQuantity(total: string, limit: string) {
    return Mask.currency(Parser.unmasker(total) / Parser.unmasker(limit), Decimal.BRL, "USD")
  }

  function handleTotal(quantity: string, limit: string) {
    return Mask.currency(Parser.unmasker(quantity, "US$") * Parser.unmasker(limit))
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
                    onChange={(value: string) => setFieldValue("total", handleTotal(values.quantity, value))}
                    mask={"currency"}
                    maskConfig="usdQuote"
                    label="Preço Limite"
                    name={"limit"}
                    type={"text"}
                    inputMode={"numeric"}
                  />
                }
                <Input
                  onChange={(value: string) => setFieldValue("total", handleTotal(value, values.limit))}
                  mask={"currency"}
                  maskConfig="usdCurrency"
                  label="Quantidade: Tether"
                  name={"quantity"}
                  type={"text"}
                  inputMode={"numeric"}
                />
                <Input
                  onChange={(value: string) => setFieldValue("quantity", handleQuantity(value, values.limit))}
                  mask={"currency"}
                  label="Quantidade: Reais"
                  name={"total"}
                  type={"text"}
                  inputMode={"numeric"}
                />
              </section>
              <Button.Default
                text={values.isBuyOrder ? "Comprar" : "Vender"}
                onClick={() => dispatchAddNotification(
                  {
                    subtitle: `Ordem de ${values.isBuyOrder ? "compra" : "venda"} enviada`,
                    text: `Ordem no valor de ${values.total}`,
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