import ViewPort from "../../templates/ViewPort"
import Subtitle from "../../components/atoms/Subtitle"
import List from "./list"
import { Button } from "../../components/organisms/Button"
import { Header } from "../../components/organisms/Header"
import { useNavigate } from "react-router-dom"
import { Row } from "../../components/organisms/Row"
import { MdRemoveRedEye } from "react-icons/md"
import { Mask } from "../../helpers/Mask"



const Index = () => {
  const navigate = useNavigate()
  const balance = Mask.currencyBrl("9534278012")

  return (
    
    <ViewPort>
      <Header.Default text="Index" />
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