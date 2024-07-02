
import { IconType } from "react-icons"
import IconStyle from "./IconStyle"
import { BaseSyntheticEvent } from "react"

export interface IconComponentInterface {
    icon: IconType,
    onClick?: (e?: BaseSyntheticEvent) => void,
    width?: number,
    color?: string,
    rounded?: boolean,
    applyPadding?: boolean,
    isLoading?: boolean,
}

const Icon = ({ icon: Icon, onClick, width, color, rounded, applyPadding, isLoading }: IconComponentInterface) => {
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