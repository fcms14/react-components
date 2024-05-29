import { Form, Formik } from "formik"
import ViewPort from "../../templates/ViewPort"
import Input from "../../components/atoms/Input"
import { Button } from "../../components/organisms/Button"
import Auth from "../../entities/Auth"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"
import { MdPix } from "react-icons/md"
import Shortcut from "../../components/atoms/Shortcut"
import Menu from "../../components/atoms/Menu"
import { MdSearch, MdDelete, MdAdd } from "react-icons/md"
import { Header } from "../../components/organisms/Header"
import DropDown from "../../components/atoms/DropDown"

const Login = () => {
  const newAuth = new Auth
  const navigate = useNavigate()

  const items = [
    { text: "Pesquisar", icon: MdSearch, onClick: () => console.log(1) },
    { text: "Adicionar", icon: MdAdd, },
    { text: "Excluir", icon: MdDelete, color: "red" }
  ];

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
      {/* <Header.Default text="Acessar sua conta" /> */}
      <Header.Guest> <img src="https://app.reset-bank.com/iconx/logo.png" /> </Header.Guest>
      <main>
        <Shortcut icon={MdPix} text="Teste" onClick={() => console.log(1)} />
        <Menu shortcutStyle={{flexDirection: "row"}} items={[
          { icon: MdPix, text: "Teste", onClick: () => console.log(1) },
          { icon: MdPix, text: "Teste" }
        ]} />
        <DropDown item={items} />
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