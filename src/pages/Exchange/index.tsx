import ViewPort from "../../templates/ViewPort"
import { Header } from "../../components/organisms/Header"
import ExchangeBalances from "./balances"
import OrderSelectorType from "./orderSelectorType"
import { useNavigate } from "react-router-dom"
import ExchangeForm from "./form"
import { MdArrowBack, MdClose } from "react-icons/md"

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
    </ViewPort>
  )
}

export default Exchange