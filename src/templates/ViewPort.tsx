import { JSX } from "react/jsx-runtime"
import ViewPortStyle from "./ViewPortStyle"
import Auth from "../entities/Auth"
import { useQuery } from "react-query"
import { useEffect } from "react"
import { dispatchSetRoutes } from "../features/routes/routeDispatcher"

interface Interface {
  children?: JSX.Element | JSX.Element[]
}

const ViewPort = ({ children }: Interface) => {
  const newAuth = new Auth
  const { data, isLoading } = useQuery("authProfile", () => newAuth.profile(), { staleTime: Infinity, cacheTime: Infinity })

  useEffect(() => {
    if (!isLoading && data) {
      dispatchSetRoutes(data.routes)
    }
  }, [data])

  return (
    <ViewPortStyle>
      {isLoading ? <>Carregando ... </> : children}
    </ViewPortStyle>
  )
}

export default ViewPort
