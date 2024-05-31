import { Form, Formik } from "formik"
import ViewPort from "../../templates/ViewPort"
import Input from "../../components/atoms/Input"
import { Button } from "../../components/organisms/Button"
import Auth from "../../entities/Auth"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"
import { Header } from "../../components/organisms/Header"
import { dispatchSetRoutes } from "../../features/routes/routeDispatcher"
import { SignInValidator } from "../../validators"
import { MdRemoveRedEye } from "react-icons/md"
import { FaEyeSlash } from "react-icons/fa"
import { useState } from "react"
import { IconComponentInterface } from "../../interfaces"
import { Row } from "../../components/molecules/Row"
import Link from "../../components/atoms/Link"

const SignIn = () => {
  const newAuth = new Auth
  const navigate = useNavigate()
  const [showInputValue, setShowInputValue] = useState(false)

  const initialValues = {
    login: "",
    password: "",
  }

  const mutation = useMutation(newAuth.login, {
    onSuccess: ({ access_token, routes }) => {
      localStorage.setItem("token", access_token)
      dispatchSetRoutes(routes)
      return navigate('/exchange')
    },
  })

  const icon: IconComponentInterface = { icon: showInputValue ? MdRemoveRedEye : FaEyeSlash, onClick: () => setShowInputValue(!showInputValue) }
  const inputType = showInputValue ? "text" : "password"

  return (
    <ViewPort>
      <Header.Guest />
      <main>
        <Row.Root>
          <Row.Section>
            <Row.Title>Bem vindo de volta</Row.Title>
            <Row.Text>Preencha com o CPF e a senha para acessar sua conta</Row.Text>
          </Row.Section>
        </Row.Root>
        <Formik
          validationSchema={SignInValidator}
          initialValues={initialValues}
          onSubmit={(values) => mutation.mutate(values)}
        >
          {({ errors, isValid, touched }) => (
            <Form>
              <main>
                <section>
                  <Input name="login" label="Usuário" type="text" error={touched.login && errors.login} />
                  <Input name="password" label="Senha" type={inputType} error={touched.password && errors.password} icon={icon} />
                </section>
              </main>
              <footer>
                <Button.Default
                  text="Acessar"
                  buttonStyle={{
                    active: (!mutation.isLoading && isValid),
                    isLoading: mutation.isLoading,
                    type: "submit"
                  }}
                />
                <Row.Section sectionStyle={{ alignItems: "center" }}>
                  <Row.Text>
                    Ainda não tem uma conta?
                    <Link onClick={() => navigate("/signup")}> Cadastre-se </Link>
                  </Row.Text>
                </Row.Section>
              </footer>
            </Form>
          )}
        </Formik>
      </main>
    </ViewPort>
  )
}

export default SignIn