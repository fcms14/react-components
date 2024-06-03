import { Form, Formik } from "formik"
import GuestTemplate from "../../templates/GuestTemplate"
import Input from "../../components/atoms/Input"
import { Button } from "../../components/organisms/Button"
import Auth from "../../entities/Auth"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"
import { Header } from "../../components/organisms/Header"
import { dispatchSetRoutes } from "../../features/routes/routeDispatcher"
import { SignInValidator } from "../../validators"
import { Row } from "../../components/molecules/Row"
import Link from "../../components/atoms/Link"
import { useTranslation } from "react-i18next"

const SignIn = () => {
  const { t, i18n } = useTranslation()
  const newAuth = new Auth
  const navigate = useNavigate()

  const initialValues = {
    login: "",
    password: "",
  }

  const mutation = useMutation(newAuth.login, {
    onSuccess: ({ access_token, routes }) => {
      localStorage.setItem("token", access_token)
      dispatchSetRoutes(routes)
      return navigate('/dashboard')
    },
  })

  return (
    <GuestTemplate>
      <Header.Guest />
      <main>
        <Row.Root>
          <Row.Section>
            <Row.Title>Bem vindo de volta</Row.Title>
            <Row.Text>Preencha com o CPF e a senha para acessar sua conta</Row.Text>
            <Button.Default text="Português" onClick={() => i18n.changeLanguage('ptbr')} buttonStyle={{ active: true, isLoading: false, type: "button" }} />
            <Button.Default text="English" onClick={() => i18n.changeLanguage('en')} buttonStyle={{ active: true, isLoading: false, type: "button" }} />
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
                  <Input name="password" label="Senha" type="password" error={touched.password && errors.password} />
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
    </GuestTemplate>
  )
}

export default SignIn