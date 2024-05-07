import styled from 'styled-components'
import BalanceStyle from "./BalanceStyle"
import Text from "../Text"
import Subtitle from "../Subtitle"
import Icon from "../Icon"
import { MdRemoveRedEye} from "react-icons/md"
import { BalanceInterface } from "../../../interfaces"


const Balance = ({ text, subtitle, color, balanceStyle}: BalanceInterface) => {
   
    return (
        <BalanceStyle {...balanceStyle}>
            <Icon  icon={MdRemoveRedEye} topDown color={color}/>
            <Text color={color}>{text}</Text>
            <Subtitle color={color}>{subtitle}</Subtitle>
        </BalanceStyle>
    )
}

export default Balance