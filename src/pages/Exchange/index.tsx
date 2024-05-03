import ViewPort from "../../templates/ViewPort"
import Subtitle from "../../components/atoms/Subtitle"
import { Header } from "../../components/organisms/Header"
import ExchangeBalances from "./balances"
import OrderSelectorType from "./orderSelectorType"
import { useNavigate } from "react-router-dom"
import ExchangeForm from "./form"

const Exchange = () => {
  const navigate = useNavigate()

  return (
    <ViewPort>
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
        <ExchangeForm />
      </main>
      <footer>
        <Subtitle size="big">Menu</Subtitle>
      </footer>
    </ViewPort>
  )
}

export default Exchange