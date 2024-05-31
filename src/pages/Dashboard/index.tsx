import AuthTemplate from "../../templates/AuthTemplate"
import { Header } from "../../components/organisms/Header"
import { useNavigate } from "react-router-dom"
import { Row } from "../../components/organisms/Row"
import { MdCurrencyExchange, MdPix, MdRemoveRedEye } from "react-icons/md"
import { Mask } from "../../helpers/Mask"
import { MdCardGiftcard } from "react-icons/md"
import List from "./list"
import { MenuRowInterface } from "../../interfaces"
import { useState } from "react"
import UnderPanel from "../../components/atoms/UnderPanel"
import { dispatchVisibility } from "../../features/sensibleData/sensibleDataDispatcher"
import { RootState } from "../../store"
import { useSelector } from "react-redux"

const Dashboard = () => {
  const { show: showBalance} = useSelector((state: RootState) => state.sensibleData);
  const navigate = useNavigate()
  const balance = showBalance ? Mask.currency(953480.12) : "*******"
  const [showPanel, setShowPanel] = useState<boolean>(false)

  const items: MenuRowInterface[] = [
    { title: "Pagar", text: "Com cartão", icon: MdCardGiftcard, },
    { title: "Pagar", text: "Em dinheiro", icon: MdCardGiftcard, },
  ];

  return (
    <AuthTemplate>
      <Header.Dashboard
        avatar={{ text: "Olá, Felipe!", onClick: () => setShowPanel(!showPanel) }}
        text={"Nome da conta + Dados da conta"}
        card={{ icon: MdRemoveRedEye, text: "Saldo disponível", title: balance, onClick: dispatchVisibility }}
        menu={{
          items: [
            { icon: MdCurrencyExchange, text: "Negociar", onClick: () => navigate('/exchange') },
            { icon: MdPix, text: "Teste", onClick: () => console.log(1) },
            { icon: MdPix, text: "Teste", onClick: () => console.log(1) }
          ]
        }}
      />
      <main>
        {showPanel &&
          <UnderPanel onClick={() => setShowPanel(false)}>
            <Header.Guest>Teste</Header.Guest>
            <main>Teste</main>
          </UnderPanel>
        }
        <Row.Menu items={items} />
        <List />
      </main>
    </AuthTemplate>
  )
}

export default Dashboard