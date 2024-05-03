import { JSX } from "react/jsx-runtime"
import ViewPortStyle from "./ViewPortStyle"

interface Interface {
  children?: JSX.Element | JSX.Element[]
}

const ViewPort = ({ children }: Interface) => {
  return (
    <ViewPortStyle>
      {children}
    </ViewPortStyle>
  )
}

export default ViewPort
