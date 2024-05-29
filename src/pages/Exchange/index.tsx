import ViewPort from "../../templates/ViewPort"
import Subtitle from "../../components/atoms/Subtitle"
import { Header } from "../../components/organisms/Header"
import ExchangeBalances from "./balances"
import OrderSelectorType from "./orderSelectorType"
import { useNavigate } from "react-router-dom"
import ExchangeForm from "./form"
import { MdArrowBack, MdClose, MdCurrencyBitcoin, MdCurrencyExchange, MdDashboard, MdMenu, MdMoney, MdOutlineAttachMoney, MdOutlineCurrencyExchange, MdOutlineRefresh, MdPix, MdRefresh, MdWallet } from "react-icons/md"
import Menu from "../../components/atoms/Menu"
import { RiExchangeFundsLine } from "react-icons/ri";


const Exchange = () => {
  const navigate = useNavigate()

  return (
    <ViewPort>
      <Header.WithTwoIcons
        text="Negociar - Tether"
        leftIcon={MdArrowBack}
        rightIcon={MdClose}
        iconSize={24}
        leftClick={() => navigate('/')}
        rightClick={() => navigate('/')}
      />
      <main>
        <ExchangeForm ticker="USDTBRL">
          <ExchangeBalances ticker="USDTBRL" />
          <OrderSelectorType />
        </ExchangeForm>
      </main>
      <footer>
        <Menu menuStyle={{ justifyContent: "space-between" }} items={[
          { icon: MdDashboard, text: "Início", onClick: () => console.log(1) },
          { icon: MdWallet, text: "Extrato", onClick: () => console.log(1) },
          { icon: MdPix, text: "Pix", onClick: () => console.log(1) },
          { icon: RiExchangeFundsLine, text: "Exchange", onClick: () => console.log(1) },
          { icon: MdOutlineAttachMoney, text: "Contas", onClick: () => console.log(1) },
          { icon: MdMenu, text: "Menu", onClick: () => console.log(1) },
        ]} />
      </footer>
    </ViewPort>
  )
}

export default Exchange