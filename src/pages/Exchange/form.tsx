import { Form, Formik } from "formik"
import Input from "../../components/atoms/Input"
import { Button } from "../../components/organisms/Button"

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
      <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)} >
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
                onClick={() => alert("ordem enviada")}
                buttonStyle={{
                  active: true,
                  color: "#0d9e00",
                  isLoading: false,
                  secondary: false,
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