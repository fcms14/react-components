import AuthTemplate from "../../templates/AuthTemplate"
import { Header } from "../../components/organisms/Header"
import ExchangeBalances from "./balances"
import { useNavigate } from "react-router-dom"
import ExchangeForm from "./form"
import { MdArrowBack, MdClose } from "react-icons/md"

const Exchange = () => {
  const navigate = useNavigate()

  return (
    <AuthTemplate showFooterMenu={false}>
      <Header.WithIcon
        iconBefore
        text="Negociar - Tether"
        icon={MdArrowBack}
        iconSize={24}
        onClick={() => navigate('/dashboard')}
      />
      <main>
        <ExchangeForm ticker="USDTBRL">
          <ExchangeBalances ticker="USDTBRL" />
        </ExchangeForm>
      </main>
    </AuthTemplate>
  )
}

export default Exchange