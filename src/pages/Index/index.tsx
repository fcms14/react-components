import ViewPort from "../../templates/ViewPort"
import Subtitle from "../../components/atoms/Subtitle"
import { Button } from "../../components/organisms/Button"
import { Header } from "../../components/organisms/Header"
import { useNavigate } from "react-router-dom"
import Breadcrumb from "../../components/atoms/Breadcrumb"
import Menurows from "../../components/organisms/Menurows"
import { Row } from "../../components/organisms/Row"
import { MdRemoveRedEye } from "react-icons/md"
import { Mask } from "../../helpers/Mask"
import { MdCardGiftcard } from "react-icons/md"

const Index = () => {
  const navigate = useNavigate()
  const balance = Mask.currencyBrl("9534278012")

  const items = [
    {
      title: "Pagar",
      text: "Com cartão",
      icon: MdCardGiftcard,
    },
    {
      title: "Pagar",
      text: "Em dinheiro",
      icon: MdCardGiftcard,
    },
  ];

  return (
    <ViewPort>
      <Header.Default text="Index" />
      <main>
        <Breadcrumb paths={["Um", "Dois", "Tres", "Quatro", "Um", "Dois", "Tres", "Quatro"]} />
        <Menurows items={items} />
        {/* <Button.Default loading={false} active={true} secondary={true} text="Teste" onClick={() => navigate('/exchange')} /> */}
        {/* <Button.WithIcon loading={false} active={true} secondary={true} text="Teste" iconBefore onClick={() => navigate('/exchange')} icon="MdClose" />
        <Button.OnlyIcon loading={false} active={true} secondary={true} onClick={() => navigate('/exchange')} icon="MdClose" /> */}
        <Row.Card icon={MdRemoveRedEye} onClick={() => console.log(1)} text="Saldo Disponível" title={balance} />
        <Button.Default text="Negociar" onClick={() => navigate('/exchange')} buttonStyle={{ active: true }} />
        {/* <List /> */}
      </main>
      <footer>
        <Subtitle size="big">Menu</Subtitle>
      </footer>
    </ViewPort>
  )
}

export default Index