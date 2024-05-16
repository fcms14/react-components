import NotificationCardStyle from "./NotificationCardStyle"
import { dispatchRemoveNotification } from "../../../features/toaster/toasterDispatcher"
import { MdClose } from "react-icons/md"
import Icon from "../Icon"
import Subtitle from "../Subtitle"
import Text from "../Text"
import { NotificationCardInterface } from "../../../interfaces"
import Section from "../Section"
import Subtext2 from "../Subtext2"

const NotificationCard = ({ index, text, subtitle, subtext, toasterStyle }: NotificationCardInterface) => {
  return (
    <NotificationCardStyle {...toasterStyle}>
      <Section flexDirection="row" justifyContent="space-between" alignItems="flex-start">
        <Subtitle> {subtitle} </Subtitle>
        <Icon icon={MdClose} onClick={() => dispatchRemoveNotification(index)} />
      </Section>
      <Text> {text} </Text>
      {subtext && <Subtext2> {subtext} </Subtext2>}
    </NotificationCardStyle>
  )
}

export default NotificationCard 