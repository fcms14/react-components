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
import { InputMask } from "../../helpers/Mask"

const SignIn = () => {
  const { t } = useTranslation()
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
            <Row.Title>{t('Welcome back')}</Row.Title>
            <Row.Text>{t('Fill in with the CPF and the password to access your account')}</Row.Text>
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
                  <Input name="login" label={InputMask.capitalize(t('user'))} type="text" error={touched.login && errors.login} />
                  <Input name="password" label={InputMask.capitalize(t('password'))} type="password" error={touched.password && errors.password} />
                </section>
              </main>
              <footer>
                <Button.Default
                  text={InputMask.capitalize(t('sign in'))}
                  buttonStyle={{
                    active: (!mutation.isLoading && isValid),
                    isLoading: mutation.isLoading,
                    type: "submit"
                  }}
                />
                <Row.Section sectionStyle={{ alignItems: "center" }}>
                  <Row.Text>
                    {t("Don't have an account yet?")}
                    <Link onClick={() => navigate("/signup")}> {InputMask.capitalize(t("sign up"))} </Link>
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