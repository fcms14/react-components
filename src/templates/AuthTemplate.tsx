import { JSX } from "react/jsx-runtime"
import BodyDefaultStyle from "./BodyDefaultStyle"
import Auth from "../entities/Auth"
import { useQuery } from "react-query"
import { useEffect } from "react"
import { dispatchSetRoutes } from "../features/routes/routeDispatcher"
import Menu from "../components/atoms/Menu"
import { useLocation, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { RoutesInterface, ShortcutInterface } from "../interfaces"
import SplashScreen from "../components/atoms/SplashScreen"
import { theme } from "../providers/theme"
import AuthStyle from "./AuthStyle"
import { isMobile } from "react-device-detect"
import { routeIcons } from "../pages/Menu"
import Sidebar from "../components/atoms/Sidebar"

interface Interface {
  children?: JSX.Element | JSX.Element[]
  showFooterMenu?: boolean
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

  const menuItems: ShortcutInterface[] = routes.filter((route: RoutesInterface) => route.show).map((route: RoutesInterface) => {
    return {
      text: route.label,
      onClick: () => navigate(route.path),
      icon: routeIcons[route.element],
      color: (pathname === route.path) ? theme.footer.inactive : theme.footer.active,
      isActive: pathname === route.path
    }
  })

  return (
    <AuthStyle>
      <nav>
        <span>
          <img src={import.meta.env.VITE_WHITE_LABEL_LOGO_MENU} />
        </span>
        <Sidebar items={menuItems} />
      </nav>
      <div>
        <BodyDefaultStyle>
          {isLoading ? <SplashScreen /> : children}
          {showFooterMenu && isMobile && <footer> <Menu menuStyle={{ justifyContent: "space-around" }} items={menuItems} /> </footer>}
        </BodyDefaultStyle>
      </div>
    </AuthStyle>
  )
}

export default AuthTemplate
