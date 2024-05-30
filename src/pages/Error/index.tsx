import ViewPort from "../../templates/ViewPort"
import { MdError } from "react-icons/md"
import { Header } from "../../components/organisms/Header"
import { Row } from "../../components/molecules/Row"

const Error = () => {
  return (
    <ViewPort>
      <Header.Guest> <img src="https://app.reset-bank.com/iconx/logo.png" /> </Header.Guest>
      <main>
        <Row.Root>
          <Row.Text> ... </Row.Text>
        </Row.Root>
        <Row.Root>
          <Row.Icon icon={MdError} width={26} />
          <Row.Text> Ocorreu um erro durante o carregamento desta página. Por favor tente mais tarde. </Row.Text>
        </Row.Root>
      </main>
    </ViewPort>
  )
}

export default Error