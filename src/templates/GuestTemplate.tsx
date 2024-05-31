import { JSX } from "react/jsx-runtime"
import BodyDefaultStyle from "./BodyDefaultStyle"
import Auth from "../entities/Auth"
import { useQuery } from "react-query"
import { useEffect } from "react"
import { dispatchSetRoutes } from "../features/routes/routeDispatcher"

interface Interface {
  children?: JSX.Element | JSX.Element[]
}

const GuestTemplate = ({ children }: Interface) => {
  const token = localStorage.getItem('token')
  const newAuth = new Auth
  const { data, isLoading, isError } = useQuery("authProfile", () => newAuth.profile(), { staleTime: Infinity, cacheTime: Infinity, retry: false, enabled: !!token })

  useEffect(() => {
    if (!isError && !isLoading && data?.routes) {
      dispatchSetRoutes(data.routes)
    }
  }, [data])

  return (
    <BodyDefaultStyle isGuest>
      {children}
    </BodyDefaultStyle>
  )
}

export default GuestTemplate
