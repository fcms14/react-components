import { ReactNode } from "react"
import RowStyle, { RowProps } from "./RowStyle"

interface Interface {
    children: ReactNode,
    rowStyle?: RowProps
}

const RowRoot = ({ children, rowStyle }: Interface) => {
    return (
        <RowStyle {...rowStyle}>
            {children}
        </RowStyle>
    )
}

export default RowRoot