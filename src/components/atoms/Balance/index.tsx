import BalanceStyle from "./BalanceStyle"
import Text from "../Text"
import Subtitle from "../Subtitle"
import Icon from "../Icon"
import { IconType } from "react-icons"

interface Interface {
    text: string,
    subtitle: string,
    icon: IconType
}

const Balance = ({ text, subtitle, icon }: Interface) => {

    return (
        <BalanceStyle>
            <Text>{text}</Text>
            <Subtitle>
                {subtitle}
                <Icon icon={icon} width={22} />
            </Subtitle>            
        </BalanceStyle>
    )
}

export default Balance