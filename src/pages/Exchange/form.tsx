import { Form, Formik } from "formik"
import Input from "../../components/atoms/Input"
import { Button } from "../../components/organisms/Button"
import { dispatchAddNotification } from "../../features/toaster/toasterDispatcher"

interface Interface {
  children?: JSX.Element | JSX.Element[]
}

interface FormIntercace {
  isLimitOrder: boolean
  limit: string
  quantity: string
  volume: string
}

const ExchangeForm = ({ children }: Interface) => {
  const initialValues: FormIntercace = {
    isLimitOrder: true,
    limit: "",
    quantity: "",
    volume: "",
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={(values) => {}} >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            {children}
            <main>
              <section>
                {values.isLimitOrder && <Input label="Valor Limite" name={"limit"} type={"text"} inputStyle={{}} />}
                <Input label="Valor Total" name={"quantity"} type={"text"} inputStyle={{}} />
                <Input label="Volume" name={"volume"} type={"text"} inputStyle={{}} />
              </section>
              <Button.Default

                text="Comprar"
                onClick={() => dispatchAddNotification(
                  {
                    subtitle: `Ordem enviada ${Math.random().toFixed(2)}`,
                    text: "Aguarde o processamento de sua ordem",
                    caption: "Acompanhe em sua lista de ordens abertas",
                    toasterStyle: { type: "success" },
                    active: true
                  }
                )}
                buttonStyle={{
                  active: true,
                  color: "#0d9e00",
                  isLoading: false,
                  secondary: false,
                  type: "submit",
                }}
              />
            </main>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ExchangeForm