import NotificationCardStyle from "./NotificationCardStyle"
import { dispatchRemoveNotification } from "../../../features/toaster/toasterDispatcher"
import { MdClose } from "react-icons/md"
import Icon from "../Icon"
import Subtitle from "../Subtitle"
import Text from "../Text"
import SubText from "../SubText"
import { NotificationCardInterface } from "../../../interfaces"

const NotificationCard = ({ index, text, subtitle, subText, toasterStyle }: NotificationCardInterface) => {
  return (
    <NotificationCardStyle {...toasterStyle}>
      <Icon icon={MdClose} onClick={() => dispatchRemoveNotification(index)} topRight />
      <Subtitle> {subtitle} </Subtitle>
      <Text> {text} </Text>
      {subText && <SubText> {subText} </SubText>}
    </NotificationCardStyle>
  )
}

export default NotificationCard 