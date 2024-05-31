import { Form, Formik } from "formik"
import GuestTemplate from "../../templates/GuestTemplate"
import Input from "../../components/atoms/Input"
import { Button } from "../../components/organisms/Button"
import Auth from "../../entities/Auth"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"
import { Header } from "../../components/organisms/Header"
import { dispatchSetRoutes } from "../../features/routes/routeDispatcher"
import { SignUpValidator } from "../../validators"
import { Row } from "../../components/molecules/Row"
import Link from "../../components/atoms/Link"
import Checkbox from "../../components/atoms/Checkbox"
import Radio from "../../components/atoms/Radio"
import Toggle from "../../components/atoms/Toggle"

const SignUp = () => {
  const newAuth = new Auth
  const navigate = useNavigate()

  const initialValues = {
    name: "",
    cpf: "",
    email: "",
    ddi: "",
    phone: "",
    birthday: "",
    login: "",
    password: "",
    teste1: true,
    teste2: false,
    teste3: "",
    teste4: false,
  }

  const mutation = useMutation(newAuth.login, {
    onSuccess: ({ access_token, routes }) => {
      localStorage.setItem("token", access_token)
      dispatchSetRoutes(routes)
      return navigate('/exchange')
    },
  })

  return (
    <GuestTemplate>
      <Header.Guest />
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
          onSubmit={(values) => console.log(values)}
        >
          {({ errors, isValid, touched, values }) => (
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
                  <Input name="password" label="Senha" type="password" error={touched.password && errors.password} />
                  <Toggle checked={values.teste4} name="teste4" label="Teste 4" />
                  <Checkbox checked={values.teste1} name="teste1" label="Depositar" />
                  <Checkbox checked={values.teste2} name="teste2" label="Sacar" />
                  <Radio id="teste31" value="VALUE31" name="teste3" label="Teste 31" />
                  <Radio id="teste32" value="VALUE32" name="teste3" label="Teste 32" />
                  <Radio id="teste33" value="VALUE33" name="teste3" label="Teste 33" />
                  <Radio id="teste34" value="VALUE34" name="teste3" label="Teste 34" />
                  <Radio id="teste35" value="VALUE35" name="teste3" label="Teste 35" />
                  <Radio id="teste36" value="VALUE36" name="teste3" label="Teste 36" />
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
    </GuestTemplate>
  )
}

export default SignUp