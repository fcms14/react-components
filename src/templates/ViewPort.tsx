import { JSX } from "react/jsx-runtime"
import ViewPortStyle from "./ViewPortStyle"
import Auth from "../entities/Auth"
import { useQuery } from "react-query"
import { useEffect } from "react"
import { dispatchSetRoutes } from "../features/routes/routeDispatcher"
import Menu from "../components/atoms/Menu"
import { MdDashboard, MdMenu, MdOutlineAttachMoney, MdPix, MdWallet } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { RoutesInterface } from "../interfaces"
import { ElementType } from "../routes"
import SplashScreen from "../components/atoms/SplashScreen"

interface Interface {
  children?: JSX.Element | JSX.Element[]
}

const icons = {
  "SignIn": MdOutlineAttachMoney,
  "SignUp": MdOutlineAttachMoney,
  "Dashboard": MdWallet,
  "Exchange": MdDashboard,
  "ApiDocs": MdPix,
  "Error": MdMenu,
}

const ViewPort = ({ children }: Interface) => {
  const token = localStorage.getItem('token')
  const { routes } = useSelector((state: RootState) => state.routes);

  const newAuth = new Auth
  const navigate = useNavigate()

  const { data, isLoading, isError } = useQuery("authProfile", () => newAuth.profile(), { staleTime: Infinity, cacheTime: Infinity, retry: false, enabled: !!token })

  useEffect(() => {
    if (!isError && !isLoading && data?.routes) {
      dispatchSetRoutes(data.routes)
    }
  }, [data])

  const isElementType = (element: string): element is ElementType => element in icons

  return (
    <ViewPortStyle>
      {isLoading ? <SplashScreen /> : children}
      <footer>
        <Menu menuStyle={{ justifyContent: "space-between", applyPadding: true }} items={
          routes.map((route: RoutesInterface) => {
            return { icon: isElementType(route.element) ? icons[route.element] : MdMenu, text: route.path, onClick: () => navigate(route.path) }
          })
        } />
      </footer>
    </ViewPortStyle>
  )
}

export default ViewPort
