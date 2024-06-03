import { JSX } from "react/jsx-runtime"
import BodyDefaultStyle from "./BodyDefaultStyle"
import Auth from "../entities/Auth"
import { useQuery } from "react-query"
import { useEffect } from "react"
import { dispatchSetRoutes } from "../features/routes/routeDispatcher"
import Menu from "../components/atoms/Menu"
import { MdApi, MdCurrencyExchange, MdDashboard, MdError, MdFileCopy, MdLink, MdManageAccounts, MdMenu, MdOutlineAttachMoney, MdPeople, MdPerson, MdPix, MdWallet } from "react-icons/md"
import { useLocation, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { RoutesInterface } from "../interfaces"
import { ElementType } from "../routes"
import SplashScreen from "../components/atoms/SplashScreen"
import { theme } from "../providers/theme"
import AuthStyle from "./AuthStyle"
import { isMobile } from "react-device-detect"

interface Interface {
  children?: JSX.Element | JSX.Element[]
  showFooterMenu?: boolean
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

const AuthTemplate = ({ children, showFooterMenu = true }: Interface) => {
  const location = useLocation()
  const pathname = location.pathname
  const token = localStorage.getItem('token')
  const newAuth = new Auth
  const navigate = useNavigate()
  const { routes } = useSelector((state: RootState) => state.routes);
  const { data, isLoading, isError } = useQuery("authProfile", () => newAuth.profile(), { staleTime: Infinity, cacheTime: Infinity, retry: false, enabled: !!token })

  useEffect(() => {
    if (!isError && !isLoading && data?.routes) {
      dispatchSetRoutes(data.routes)
    }
  }, [data])

  const isElementType = (element: string): element is ElementType => element in routeIcons

  return (
    <AuthStyle>
      <nav> Desktop Menu </nav>
      <div>
        <BodyDefaultStyle>
          {isLoading ? <SplashScreen /> : children}
          {showFooterMenu && isMobile && <footer>
            <Menu
              menuStyle={{ justifyContent: "space-between" }}
              items={
                routes
                  .filter((route: RoutesInterface) => route.show)
                  .map((route: RoutesInterface) => {
                    return {
                      icon: isElementType(route.element) ? routeIcons[route.element] : MdMenu,
                      color: (pathname === route.path) ? theme.footer.inactive : theme.footer.active,
                      text: route.label,
                      onClick: () => navigate(route.path)
                    }
                  })
              }
            />
          </footer>}
        </BodyDefaultStyle>
      </div>
    </AuthStyle>
  )
}

export default AuthTemplate
