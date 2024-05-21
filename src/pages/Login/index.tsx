import { Form, Formik } from "formik"
import { Header } from "../../components/organisms/Header"
import ViewPort from "../../templates/ViewPort"
import Input from "../../components/atoms/Input"
import { Button } from "../../components/organisms/Button"
import { useState } from "react"
import Auth from "../../entities/Auth"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const newAuth = new Auth
  
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const initialValues = {
    login: "",
    password: "",
  }

  const mutation = useMutation(newAuth.login, {
    onSuccess: ({ access_token }) => {
      localStorage.setItem("token", access_token)
      setIsLoading(false)

      return navigate('/exchange')
    },
    onError: () => {
      setIsLoading(false)
    },
  })

  return (
    <ViewPort>
      <Header.Default text="Acessar sua conta" />
      <main>
        <Formik initialValues={initialValues} onSubmit={(values) => {
          setIsLoading(true)
          mutation.mutate(values)
        }}>
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