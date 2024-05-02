import Icon from "../../atoms/Icon"
import { theme } from "../../../providers/theme"

interface Interface {
    icon: string,
    onClick?: () => void
    width?: number | any,
    color?: string,
    rounded?: boolean,
}

const RowIcon = (props: Interface) => {
    return (
        <Icon
            {...props}
            color={props.color ?? theme.colors.main.icon}
        />
    )
}

export default RowIcon