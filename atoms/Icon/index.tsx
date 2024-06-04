
import { IconType } from "react-icons"
import IconStyle from "./IconStyle"

export interface IconComponentInterface {
    icon: IconType,
    onClick?: () => void,
    width?: number,
    color?: string,
    rounded?: boolean,
    applyPadding?: boolean,
    isLoading?: boolean,
}

const Icon = (props: IconComponentInterface) => {
    const { icon: Icon, onClick, width, color, rounded, applyPadding, isLoading } = props

    return (
        <IconStyle
            rounded={rounded}
            applyPadding={applyPadding}
            isLoading={isLoading}
            cursor={onClick ? 'pointer' : 'inherit'}
            onClick={onClick}
        >
            <Icon size={width} fill={color} />
        </IconStyle>
    )
}

export default Icon