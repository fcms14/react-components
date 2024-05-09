import Template from "../../templates/Template"
import Subtitle from "../../components/atoms/Subtitle"
import List from "./list"
import { Button } from "../../components/organisms/Button"
import { Header } from "../../components/organisms/Header"
import { useNavigate } from "react-router-dom"
import BreadcrumbRoot from "../../components/atoms/Breadcrumb/BreadcrumbRoot"

const Index = () => {
  const navigate = useNavigate()

  return (
    <Template>
      <Header.Default text="Index" />
      <main>
        <BreadcrumbRoot paths={["Um", "Dois", "Tres", "Quatro"]} />
        <Button.Default loading={false} active={true} secondary={true} text="Teste" onClick={() => navigate('/exchange')} />
        <Button.WithIcon loading={false} active={true} secondary={true} text="Teste" iconBefore onClick={() => navigate('/exchange')} icon="MdClose" />
        <Button.OnlyIcon loading={false} active={true} secondary={true} onClick={() => navigate('/exchange')} icon="MdClose" />
        <List />
      </main>
      <footer>
        <Subtitle size="big">Menu</Subtitle>
      </footer>
    </Template>
  )
}

export default Index