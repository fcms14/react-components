import { ReactNode } from "react"
import Section, { SectionProps } from "../../atoms/Section"

export interface RowSectionInterface {
  children: ReactNode,
  sectionStyle?: SectionProps
}

const RowSection = ({ children, sectionStyle }: RowSectionInterface) => {
  return (
    <Section {...sectionStyle}>
      {children}
    </Section>
  )
}

export default RowSection