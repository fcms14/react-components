import { IconComponentInterface } from "../../../interfaces"
import IconStyle from "./IconStyle"

const Icon = (props: IconComponentInterface) => {
    const { icon: Icon, onClick, width, color, rounded, applyPadding, loading, topRight } = props

    return (
        <IconStyle
            rounded={rounded}
            applyPadding={applyPadding}
            topRight={topRight}
            loading={loading}
            cursor={onClick ? 'pointer' : 'inherit'}
            onClick={onClick}
        >
            <Icon size={width} fill={color} />
        </IconStyle>
    )
}

export default Icon