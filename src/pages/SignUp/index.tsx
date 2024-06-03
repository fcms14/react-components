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
import { isMobile } from "react-device-detect"
import { useTranslation } from "react-i18next"
import { InputMask } from "../../helpers/Mask"

const SignUp = () => {
  const { t } = useTranslation()

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
      return navigate("/exchange")
    },
  })

  return (
    <GuestTemplate>
      <Header.Guest />
      <main>
        <Row.Root>
          <Row.Section>
            <Row.Title>{InputMask.capitalize(t("sign up"))}</Row.Title>
            <Row.Text>{t("Fill in the fields below to create your user")}</Row.Text>
          </Row.Section>
        </Row.Root>
        <Formik
          validationSchema={SignUpValidator}
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
        >
          {({ errors, isValid, touched, values }) => (
            <Form>
              <main>
                <section>
                  <Input mask={"name"} name="name" label={InputMask.capitalize(t("name"))} type="text" error={touched.name && errors.name} />
                  <Input mask={"cpf"} name="cpf" label={"CPF"} type="text" inputMode="numeric" error={touched.cpf && errors.cpf} />
                  <Input name="email" label={"E-mail"} type="text" error={touched.email && errors.email} />
                  <div>
                    <span style={{ width: isMobile ? "30%" : "20%" }}>
                      <Input mask={"ddi"} name="ddi" label={"DDI"} type="text" inputMode="numeric" error={touched.ddi && errors.ddi} />
                    </span>
                    <Input mask={"phone"} name="phone" label={InputMask.capitalize(t("phone number"))} type="text" inputMode="numeric" error={touched.phone && errors.phone} />
                  </div>
                  <Input name="password" label={InputMask.capitalize(t("password"))} type="password" error={touched.password && errors.password} />
                </section>
              </main>
              <footer>
                <Button.Default
                  text={InputMask.capitalize(t('sign up'))}
                  buttonStyle={{
                    active: (!mutation.isLoading && isValid),
                    isLoading: mutation.isLoading,
                    type: "submit"
                  }}
                />
                <Row.Section sectionStyle={{ alignItems: "center" }}>
                  <Row.Text>
                    {t("Already have an account?")}
                    <Link onClick={() => navigate("/")}> {InputMask.capitalize(t("sign in"))} </Link>
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