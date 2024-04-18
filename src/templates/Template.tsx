import { JSX } from "react/jsx-runtime"
import TemplateStyle from "./templateStyle"

interface TemplateInterface {
  children?: JSX.Element | JSX.Element[]
}

const Template = ({ children }: TemplateInterface) => {
  return (
    <TemplateStyle>
      {children}
    </TemplateStyle>
  )
}

export default Template
