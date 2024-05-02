import { ReactNode } from "react"
import Section, { SectionProps } from "../../atoms/Section"

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