import AuthTemplate from "../../templates/AuthTemplate"
import { MdError } from "react-icons/md"
import { Header } from "../../components/organisms/Header"
import { Row } from "../../components/molecules/Row"

const Error = () => {
  return (
    <AuthTemplate>
      <Header.Guest />
      <main>
        <Row.Root rowStyle={{justifyContent: "center"}}>
          <Row.Text> ... </Row.Text>
        </Row.Root>
        <Row.Root rowStyle={{justifyContent: "center"}}>
          <Row.Icon icon={MdError} width={26} />
          <Row.Text> Ocorreu um erro durante o carregamento desta página. Por favor tente mais tarde. </Row.Text>
        </Row.Root>
      </main>
    </AuthTemplate>
  )
}

export default Error