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

interface Interface {
  children?: JSX.Element | JSX.Element[]
}

const icons = {
  "Exchange": MdDashboard,
  "Error": MdMenu,
  "Login": MdOutlineAttachMoney,
  "ApiDocs": MdPix,
  "Index": MdWallet
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

  return (
    <ViewPortStyle>
      {isLoading ? <>Carregando ... </> : children}
      <footer>
        <Menu menuStyle={{ justifyContent: "space-between", applyPadding: true }} items={
          routes.map((route: RoutesInterface) => {
            return { icon: icons[route.element], text: route.path, onClick: () => navigate(route.path) }
          })
        } />
      </footer>
    </ViewPortStyle>
  )
}

export default ViewPort
