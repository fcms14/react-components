import ViewPort from "../../templates/ViewPort"
import Subtitle from "../../components/atoms/Subtitle"
import  Balance  from "../../components/atoms/Balance"
import List from "./list"
import { Button } from "../../components/organisms/Button"
import { Header } from "../../components/organisms/Header"
import { useNavigate } from "react-router-dom"

const Index = () => {
  const navigate = useNavigate()
  return (
    <ViewPort>
      <Header.Default text="Index" />
      <Balance text='Saldo Disponível' subtitle='R$0,00'  color="black"  balanceStyle={{type:'balanceOne'}}></Balance>
      <Balance text='Saldo Disponível' subtitle='R$0,00'  color="white"  balanceStyle={{type:'balanceTwo'}}></Balance>
      <main>
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