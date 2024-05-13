import Template from "../../templates/Template"
import Subtitle from "../../components/atoms/Subtitle"
import { Button } from "../../components/organisms/Button"
import { Header } from "../../components/organisms/Header"
import { useNavigate } from "react-router-dom"
import Breadcrumb from "../../components/atoms/Breadcrumb"
import Menurows from "../../components/organisms/Menurows"

const Index = () => {
  const navigate = useNavigate()
  const items = [
    {
      title: "Pagar",
      icon: "CreditCard",
      text: "Com cartão"
    },
    {
      title: "Pagar",
      icon: "Currency",
      text: "Em dinheiro"
    },
  ];
  return (
    <Template>
      <Header.Default text="Index" />
      <main>
        <Breadcrumb paths={["Um", "dois", "tres", "quatro", "Um", "dois", "tres", "quatro"]} />
        <Button.Default loading={false} active={true} secondary={true} text="Teste" onClick={() => navigate('/exchange')} />
        <Button.WithIcon loading={false} active={true} secondary={true} text="Teste" iconBefore onClick={() => navigate('/exchange')} icon="MdClose" />
        <Button.OnlyIcon loading={false} active={true} secondary={true} onClick={() => navigate('/exchange')} icon="MdClose" />
        <Menurows items={items} />
      </main>
      <footer>
        <Subtitle size="big">Menu</Subtitle>
      </footer>
    </Template>
  )
}

export default Index