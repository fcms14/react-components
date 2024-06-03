import { JSX } from "react/jsx-runtime"
import BodyDefaultStyle from "./BodyDefaultStyle"
import Auth from "../entities/Auth"
import { useQuery } from "react-query"
import { useEffect } from "react"
import { dispatchSetRoutes } from "../features/routes/routeDispatcher"
import GuestStyle from "./GuestStyle"

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
    <GuestStyle>
      <div>
        <BodyDefaultStyle isGuest>
          {children}
        </BodyDefaultStyle>
      </div>
      <aside></aside>
    </GuestStyle>
  )
}

export default GuestTemplate
