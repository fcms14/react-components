import NotificationCardStyle from "./NotificationCardStyle"
import { dispatchRemoveNotification } from "../../../features/toaster/toasterDispatcher"
import { MdClose } from "react-icons/md"
import Icon from "../Icon"
import Subtitle from "../Subtitle"
import Text from "../Text"
import Caption from "../Caption"
import { NotificationCardInterface } from "../../../interfaces"

const NotificationCard = ({ index, text, subtitle, caption, toasterStyle }: NotificationCardInterface) => {
  return (
    <NotificationCardStyle {...toasterStyle}>
      <Icon icon={MdClose} onClick={() => dispatchRemoveNotification(index)} topRight />
      <Subtitle> {subtitle} </Subtitle>
      <Text> {text} </Text>
      {caption && <Caption> {caption} </Caption>}
    </NotificationCardStyle>
  )
}

export default NotificationCard 