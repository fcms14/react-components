import Icon from "../../atoms/Icon"
import { theme } from "../../../providers/theme"

interface Interface {
    icon: string,
    onClick?: () => void
    width?: number | any,
    color?: string,
    rounded?: boolean,
}

const HeaderIcon = (props: Interface) => {
    return (
        <Icon
            {...props}
            color={props.color ?? theme.colors.header.icon}
            applyPadding={props.onClick ? true : false}
        />

    )
}

export default HeaderIcon