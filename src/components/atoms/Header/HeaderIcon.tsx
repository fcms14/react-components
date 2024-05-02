import Icon from "../Icon"
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
        <Icon {...props} color={props.color ?? theme.colors.header.icon} />
    )
}

export default HeaderIcon