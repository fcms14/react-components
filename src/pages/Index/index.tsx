import ViewPort from "../../templates/ViewPort"
import Subtitle from "../../components/atoms/Subtitle"
import List from "./list"
import { Button } from "../../components/organisms/Button"
import { Header } from "../../components/organisms/Header"
import { Toaster } from "../../components/organisms/Toaster"
import { useNavigate } from "react-router-dom"
import { MdClose } from "react-icons/md"

const Index = () => {
  const navigate = useNavigate()

  return (
    <ViewPort>
      <Header.Default text="Index" />
      <main>
        <Toaster.Default subtitle="Ordem enviada" text="Aguarde o processamento de sua ordem" caption="Acompanhe em sua lista de ordens abertas" icon={MdClose} toasterStyle={{ type: 'success' }} />
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