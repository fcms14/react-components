import Template from "../../templates/Template"
import Subtitle from "../../components/atoms/Subtitle"
import { Header } from "../../components/organisms/Header"
import ExchangeBalances from "./balances"
import OrderSelectorType from "./orderSelectorType"
import { useNavigate } from "react-router-dom"

const Exchange = () => {
  const navigate = useNavigate()

  return (
    <Template>
      <Header.WithTwoIcons
        text="Negociar - Tether"
        leftIcon="MdArrowBack"
        rightIcon="MdClose"
        iconSize={22}
        leftClick={() => navigate('/')}
        rightClick={() => navigate('/')}
      />
      <main>
        <ExchangeBalances />
        <OrderSelectorType />
      </main>
      <footer>
        <Subtitle size="big">Menu</Subtitle>
      </footer>
    </Template>
  )
}

export default Exchange