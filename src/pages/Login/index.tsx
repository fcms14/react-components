import { Form, Formik } from "formik"
import { Header } from "../../components/organisms/Header"
import ViewPort from "../../templates/ViewPort"
import Input from "../../components/atoms/Input"
import { Button } from "../../components/organisms/Button"
import Auth from "../../entities/Auth"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const newAuth = new Auth

  const navigate = useNavigate()

  const initialValues = {
    login: "",
    password: "",
  }

  const mutation = useMutation(newAuth.login, {
    onSuccess: ({ access_token }) => {
      localStorage.setItem("token", access_token)
      return navigate('/exchange')
    },
  })

  return (
    <ViewPort>
      <Header.Default text="Acessar sua conta" />
      <main>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => mutation.mutate(values)}
        >
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
                    active: (!mutation.isLoading && !!values.login && !!values.password),
                    isLoading: mutation.isLoading,
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