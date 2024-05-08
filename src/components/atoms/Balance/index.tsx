import BalanceStyle from "./BalanceStyle"
import Text from "../Text"
import Subtitle from "../Subtitle"
import Icon from "../Icon"
import { IconType } from "react-icons"

interface Interface {
    text: string,
    subtitle: string,
    icon?: IconType
    onClick?: () => void,
}

const Balance = ({ text, subtitle, icon, onClick }: Interface) => {

    return (
        <BalanceStyle>
            <Text>{text}</Text>
            <Subtitle>
                {subtitle}
                {icon && <Icon icon={icon} width={22} onClick={onClick} />}
            </Subtitle>
        </BalanceStyle>
    )
}

export default Balance