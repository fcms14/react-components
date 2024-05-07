import ViewPort from "../../templates/ViewPort"
import Subtitle from "../../components/atoms/Subtitle"
import Balance from "../../components/atoms/Balance"
import List from "./list"
import { Button } from "../../components/organisms/Button"
import { Header } from "../../components/organisms/Header"
import { useNavigate } from "react-router-dom"
import { Mask } from "../../helpers/Mask"
import { MdRemoveRedEye } from "react-icons/md"

const Index = () => {
  const navigate = useNavigate()
  const balance = Mask.currencyBrl("0")
  return (
    <ViewPort>
      <Header.Default text="Index" />
      <main>
        <Balance text='Saldo Disponível' subtitle={balance} icon={MdRemoveRedEye} />
        <Button.Default text="Negociar" onClick={() => navigate('/exchange')} buttonStyle={{ active: true }} />
        <List />
      </main>
      <footer>
        <Subtitle size="big">Menu</Subtitle>
      </footer>
    </ViewPort>
  )
}

export default Index