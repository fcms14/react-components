import { Form, Formik } from "formik"
import { Header } from "../../components/organisms/Header"
import ViewPort from "../../templates/ViewPort"
import Input from "../../components/atoms/Input"
import { Button } from "../../components/organisms/Button"
import { useState } from "react"
import { AuthInterface, newAuth } from "../../entities/Auth"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const initialValues = {
    login: "",
    password: "",
  }

  const mutation = useMutation(newAuth.login, {
    onSuccess: ({ }) => { },
    onError: () => { },
  })

  const submitForm = async (values: AuthInterface) => {
    setIsLoading(true)
    try {
      const { access_token } = await mutation.mutateAsync(values)

      localStorage.setItem("token", access_token)
      setIsLoading(false)

      return navigate('/exchange')
    } catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <ViewPort>
      <Header.Default text="Acessar sua conta" />
      <main>
        <Formik initialValues={initialValues} onSubmit={(values) => submitForm(values)}>
          {({ values }) => (
            <Form>
              <main>
                <section>
                  <Input name="login" label="Usuário" type="text" />
                  <Input name="password" label="Senha" type="password" />
                </section>
                <Button.Default
                  text="Acessar"
                  buttonStyle={{
                    active: (!isLoading && !!values.login && !!values.password),
                    isLoading: isLoading,
                    type: "submit"
                  }}
                />
              </main>
            </Form>
          )}
        </Formik>
      </main>
    </ViewPort>
  )
}

export default Login