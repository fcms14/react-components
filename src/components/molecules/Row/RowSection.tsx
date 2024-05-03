import { ReactNode } from "react"
import Section from "../../atoms/Section"
import { SectionProps } from "../../../interfaces"

interface Interface {
  children: ReactNode,
  sectionStyle?: SectionProps
}

const RowSection = ({ children, sectionStyle }: Interface) => {
  return (
    <Section {...sectionStyle}>
      {children}
    </Section>
  )
}

export default RowSection