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
import MultiSelect from "../../components/atoms/MultiSelect"

const SignIn = () => {
  const newAuth = new Auth
  const navigate = useNavigate()
  const [showInputValue, setShowInputValue] = useState(false)

  const initialValues = {
    login: "",
    password: "",
    teste: undefined
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
      <Header.Guest> <img src="https://app.reset-bank.com/iconx/logo.png" /> </Header.Guest>
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
          {({ errors, isValid, touched, values }) => (
            <Form>
              <main>
                <section>
                  <MultiSelect
                    name="teste"
                    label="Teste"
                    values={values.teste}
                    options={[
                      { label: "Teste 1", value: "teste1" },
                      { label: "Teste 2", value: "teste2" },
                      { label: "Teste 3", value: "teste3" },
                      { label: "Teste 4", value: "teste4" },
                      { label: "Teste 5", value: "teste5" },
                      { label: "Teste 6", value: "teste6" },
                      { label: "Teste 7", value: "teste7" },
                      { label: "Teste 8", value: "teste8" },
                      { label: "Teste 9", value: "teste9" },
                      { label: "Teste 10", value: "teste10" },
                      { label: "Teste 11", value: "teste11" },
                      { label: "Teste 12", value: "teste12" },
                      { label: "Teste 13", value: "teste13" },
                      { label: "Teste 14", value: "teste14" },
                      { label: "Teste 15", value: "teste15" },
                      { label: "Teste 16", value: "teste16" },
                      { label: "Teste 17", value: "teste17" },
                      { label: "Teste 18", value: "teste18" },
                      { label: "Teste 19", value: "teste19" },
                    ]}
                  />
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
          )
          }
        </Formik>
      </main>
    </ViewPort>
  )
}

export default SignIn