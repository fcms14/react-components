import ViewPort from "../../templates/ViewPort"
import Subtitle from "../../components/atoms/Subtitle"
import List from "./list"
import { Button } from "../../components/organisms/Button"
import { Header } from "../../components/organisms/Header"
import { useNavigate } from "react-router-dom"

const Index = () => {
  const navigate = useNavigate()

  return (
    <ViewPort>
      <Header.Default text="Index" />
      <main>
        <Button.Default  loading={false} active={true} secondary={false} text="Negociar" onClick={() => navigate('/exchange')} />
        <List />
      </main>
      <footer>
        <Subtitle size="big">Menu</Subtitle>
      </footer>
    </ViewPort>
  )
}

export default Index