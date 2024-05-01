import { JSX } from "react/jsx-runtime"
import TemplateStyle from "./TemplateStyle"

interface Interface {
  children?: JSX.Element | JSX.Element[]
}

const Template = ({ children }: Interface) => {
  return (
    <TemplateStyle>
      {children}
    </TemplateStyle>
  )
}

export default Template
