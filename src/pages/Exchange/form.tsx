import { Form, Formik } from "formik"
import Input from "../../components/atoms/Input"
import { Button } from "../../components/organisms/Button"
import { dispatchAddNotification } from "../../features/toaster/toasterDispatcher"
import { Mask } from "../../helpers/Mask"
import OrderBook from "./orderBook"

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
  const initialValues: ExchangeFormIntercace = {
    isLimitOrder: true,
    isBuyOrder: true,
    limit: "",
    quantity: "",
    volume: "",
  }

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
                  onChange={() => setFieldValue("volume", handleBase(values))}
                  mask={"currencyBrl"}
                  label="Quantidade: Reais"
                  name={"quantity"}
                  type={"text"}
                  inputMode={"numeric"}
                />
                <Input
                  onChange={() => setFieldValue("quantity", handleTotal(values))}
                  mask={"currencyTether"}
                  label="Quantidade: Tether"
                  name={"volume"}
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
              <Button.Panel
                buttons={[
                  { text: "Livro de Ofertas", buttonStyle: { active: true }, onClick: () => { console.log(1) } },
                  { text: "Ordens Abertas", buttonStyle: { active: true }, onClick: () => { console.log(1) } },
                  { text: "Ordens Executadas", buttonStyle: { active: true }, onClick: () => { console.log(1) } },
                  { text: "Teste Teste asd AS", buttonStyle: { active: true }, onClick: () => { console.log(1) } },
                ]}
              />
              <OrderBook />
            </main>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ExchangeForm