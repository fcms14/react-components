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

const Dashboard = () => {
  const navigate = useNavigate()
  const balance = Mask.currency(953480.12)
  const [show, setShow] = useState<boolean>(false)

  const items: MenuRowInterface[] = [
    { title: "Pagar", text: "Com cartão", icon: MdCardGiftcard, },
    { title: "Pagar", text: "Em dinheiro", icon: MdCardGiftcard, },
  ];

  return (
    <AuthTemplate>
      <Header.Dashboard
        avatar={{ text: "Olá, Felipe!", onClick: () => setShow(!show) }}
        text={"Nome da conta + Dados da conta"}
        card={{ icon: MdRemoveRedEye, text: "Saldo disponível", title: balance, onClick: () => console.log(1) }}
        menu={{
          items: [
            { icon: MdCurrencyExchange, text: "Negociar", onClick: () => navigate('/exchange') },
            { icon: MdPix, text: "Teste", onClick: () => console.log(1) },
            { icon: MdPix, text: "Teste", onClick: () => console.log(1) }
          ]
        }}
      />
      <main>
        {show &&
          <UnderPanel onClick={() => setShow(false)}>
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