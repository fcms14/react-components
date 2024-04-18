import { JSX } from "react/jsx-runtime"

interface AuthLayoutInterface {
  children?: JSX.Element | JSX.Element[]
}

const Auth = ({ children }: AuthLayoutInterface) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Auth
