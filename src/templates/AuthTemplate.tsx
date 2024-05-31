import { JSX } from "react/jsx-runtime"
import BodyDefaultStyle from "./BodyDefaultStyle"
import Auth from "../entities/Auth"
import { useQuery } from "react-query"
import { useEffect } from "react"
import { dispatchSetRoutes } from "../features/routes/routeDispatcher"
import Menu from "../components/atoms/Menu"
import { MdDashboard, MdMenu, MdOutlineAttachMoney, MdPix, MdWallet } from "react-icons/md"
import { useLocation, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { RoutesInterface } from "../interfaces"
import { ElementType } from "../routes"
import SplashScreen from "../components/atoms/SplashScreen"
import { theme } from "../providers/theme"

interface Interface {
  children?: JSX.Element | JSX.Element[]
  showFooterMenu?: boolean
}

const icons = {
  "SignIn": MdOutlineAttachMoney,
  "SignUp": MdOutlineAttachMoney,
  "Dashboard": MdWallet,
  "Exchange": MdDashboard,
  "ApiDocs": MdPix,
  "Error": MdMenu,
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

  const isElementType = (element: string): element is ElementType => element in icons

  return (
    <BodyDefaultStyle>
      {isLoading ? <SplashScreen /> : children}
      {showFooterMenu && <footer>
        <Menu
          menuStyle={{ justifyContent: "space-between", applyPadding: true }}
          items={
            routes
              .filter((route: RoutesInterface) => route.show)
              .map((route: RoutesInterface) => {
                return {
                  icon: isElementType(route.element) ? icons[route.element] : MdMenu,
                  color: (pathname === route.path) ? theme.footer.inactive : theme.footer.active,
                  text: route.label,
                  onClick: () => navigate(route.path)
                }
              })
          }
        />
      </footer>}
    </BodyDefaultStyle>
  )
}

export default AuthTemplate
