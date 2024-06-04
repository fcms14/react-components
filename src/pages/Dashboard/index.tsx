import AuthTemplate from "../../templates/AuthTemplate"
import { Header } from "../../components/organisms/Header"
import { useNavigate } from "react-router-dom"
import { Row } from "../../components/organisms/Row"
import { MdCurrencyBitcoin, MdCurrencyExchange, MdPix, MdRemoveRedEye } from "react-icons/md"
import { FaEyeSlash } from "react-icons/fa"
import { Mask } from "../../helpers/Mask"
import List from "./list"
import { ButtonDefaultInterface, MenuRowInterface } from "../../interfaces"
import { useEffect, useState } from "react"
import UnderPanel from "../../components/atoms/UnderPanel"
import { dispatchVisibility } from "../../features/sensibleData/sensibleDataDispatcher"
import { RootState } from "../../store"
import { useSelector } from "react-redux"
import { useQuery } from "react-query"
import UserAccount, { UserAccountResponse } from "../../entities/UserAccount"
import { theme } from "../../providers/theme"
import { Button } from "../../components/organisms/Button"

const Dashboard = () => {
  const newUserAccount = new UserAccount
  const { show: showBalance } = useSelector((state: RootState) => state.sensibleData);
  const { data } = useQuery("userAccount", () => newUserAccount.list(), { staleTime: Infinity, cacheTime: Infinity })

  const [showPanel, setShowPanel] = useState<boolean>(false)
  const [account, setAccount] = useState<UserAccountResponse>()

  useEffect(() => {
    setAccount(data?.find((value) => value.is_default))
  }, [data])

  const navigate = useNavigate()
  const balance = showBalance ? Mask.currency(account?.balance ?? 0) : "*******"

  const items: MenuRowInterface[] | undefined = data && data.map((account) => {
    return {
      title: account.name,
      text: account.pix_key,
      icon: MdCurrencyBitcoin,
      iconSize: Number(theme.fontsizes.title.bigger.match(/\d+/)),
      onClick: () => { setShowPanel(false); setAccount(account) }
    }
  })

  const logout = () => {
    localStorage.clear()
    window.location.replace('/');
    return ('/')
  }

  const buttons: ButtonDefaultInterface[] = [
    { text: "Sair", buttonStyle: { type: "button", active: true, secondary: false }, onClick: () => { logout() } },
    { text: "Fechar", buttonStyle: { type: "button", active: true, secondary: false }, onClick: () => { setShowPanel(false) } },
  ]

  return (
    <AuthTemplate>
      <Header.Dashboard
        avatar={{ text: `Olá, ${account?.User.name ?? ""}!`, onClick: () => setShowPanel(!showPanel) }}
        text={`Chave Pix: ${account?.pix_key}` ?? ""}
        card={{ icon: !showBalance ? FaEyeSlash : MdRemoveRedEye, text: "Saldo disponível", title: balance, onClick: dispatchVisibility }}
        menu={{
          items: [
            { icon: MdCurrencyExchange, text: "Negociar", onClick: () => navigate('/exchange') },
            { icon: MdPix, text: "Teste", onClick: () => console.log(1) },
            { icon: MdPix, text: "Teste", onClick: () => console.log(1) }
          ]
        }}
      />
      <main>
        {showPanel && items &&
          <UnderPanel onClick={() => setShowPanel(false)}>
            <Row.Menu items={items} />
            <Button.Panel buttons={buttons} />
          </UnderPanel>
        }
        <List />
      </main>
    </AuthTemplate>
  )
}

export default Dashboard