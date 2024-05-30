import { Form, Formik } from "formik"
import ViewPort from "../../templates/ViewPort"
import Input from "../../components/atoms/Input"
import { Button } from "../../components/organisms/Button"
import Auth from "../../entities/Auth"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"
import { Header } from "../../components/organisms/Header"
import { dispatchSetRoutes } from "../../features/routes/routeDispatcher"
import { SignUpValidator } from "../../validators"
import { MdRemoveRedEye } from "react-icons/md"
import { FaEyeSlash } from "react-icons/fa"
import { useState } from "react"
import { IconComponentInterface } from "../../interfaces"
import { Row } from "../../components/molecules/Row"
import Link from "../../components/atoms/Link"

const SignUp = () => {
  const newAuth = new Auth
  const navigate = useNavigate()
  const [showInputValue, setShowInputValue] = useState(false)

  const initialValues = {
    name: "",
    cpf: "",
    email: "",
    ddi: "",
    phone: "",
    birthday: "",
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
      <Header.Guest> <img src="https://app.reset-bank.com/iconx/logo.png" /> </Header.Guest>
      <Row.Root>
        <Row.Section>
          <Row.Title>Cadastre-se</Row.Title>
          <Row.Text>Preencha os campos abaixo para criar seu usuário</Row.Text>
        </Row.Section>
      </Row.Root>
      <main>
        <Formik
          validationSchema={SignUpValidator}
          initialValues={initialValues}
          onSubmit={(values) => mutation.mutate(values)}
        >
          {({ errors, isValid, touched }) => (
            <Form>
              <main>
                <section>
                  <Input mask={"name"} name="name" label="Nome" type="text" error={touched.name && errors.name} />
                  <Input mask={"document"} name="cpf" label="CPF" type="text" inputMode="numeric" error={touched.cpf && errors.cpf} />
                  <Input mask={"name"} name="email" label="E-mail" type="text" error={touched.email && errors.email} />
                  <div>
                    <span style={{ width: "20%" }}>
                      <Input mask={"ddi"} name="ddi" label="DDI" type="text" inputMode="numeric" error={touched.ddi && errors.ddi} />
                    </span>
                    <Input mask={"phone"} name="phone" label="Celular" type="text" inputMode="numeric" error={touched.phone && errors.phone} />
                  </div>
                  <Input mask={"name"} name="birthday" label="Data de nascimento" inputMode="numeric" type="date" error={touched.birthday && errors.birthday} />
                  <Input name="login" label="Usuário" type="text" error={touched.login && errors.login} />
                  <Input name="password" label="Senha" type={inputType} error={touched.password && errors.password} icon={icon} />
                </section>
              </main>
              <footer>
                <Button.Default
                  text="Cadastrar"
                  buttonStyle={{
                    active: (!mutation.isLoading && isValid),
                    isLoading: mutation.isLoading,
                    type: "submit"
                  }}
                />
                <Row.Section sectionStyle={{ alignItems: "center" }}>
                  <Row.Text>
                    Já tem uma conta?
                    <Link onClick={() => navigate("/")}> Entrar </Link>
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

export default SignUp