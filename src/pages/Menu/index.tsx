import { MdArrowBack, MdApi, MdCurrencyExchange, MdDashboard, MdError, MdFileCopy, MdLink, MdManageAccounts, MdMenu, MdOutlineAttachMoney, MdPeople, MdPerson, MdPix, MdWallet } from "react-icons/md"
import { Header } from "../../components/organisms/Header"
import AuthTemplate from "../../templates/AuthTemplate"
import { useNavigate } from "react-router-dom"
import { Row } from "../../components/organisms/Row"
import { MenuRowInterface } from "../../interfaces"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { theme } from "../../providers/theme"

interface Interface {

}

export const routeIcons = {
  "SignIn": MdOutlineAttachMoney,
  "SignUp": MdOutlineAttachMoney,
  "ApiDocs": MdFileCopy,
  "Error": MdError,
  "Dashboard": MdDashboard,
  "Statement": MdWallet,
  "Pix": MdPix,
  "Contacts": MdPeople,
  "Menu": MdMenu,
  "Accounts": MdManageAccounts,
  "Exchange": MdCurrencyExchange,
  "Integrations": MdApi,
  "Profile": MdPerson,
  "LinkedAccounts": MdLink,
}

const Menu = ({ }: Interface) => {
  const navigate = useNavigate()
  const { routes } = useSelector((state: RootState) => state.routes);

  const items: MenuRowInterface[] = routes.filter((route) => route.detail).map((route) => {
    return {
      title: route.label,
      text: route.detail ?? "teste",
      icon: routeIcons[route.element],
      iconSize: Number(theme.fontsizes.title.bigger.match(/\d+/)),
      onClick: () => navigate(route.path)
    }
  })

  return (
    <AuthTemplate>
      <Header.WithIcon
        iconBefore
        text="Menu"
        icon={MdArrowBack}
        iconSize={24}
        onClick={() => navigate('/dashboard')}
      />
      <main>
        <Row.Menu items={items} />
      </main>
    </AuthTemplate>
  )
}

export default Menu