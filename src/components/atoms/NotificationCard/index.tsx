import NotificationCardStyle from "./NotificationCardStyle"
import { dispatchRemoveNotification } from "../../../features/toaster/toasterDispatcher"
import { MdClose } from "react-icons/md"
import Icon from "../Icon"
import Subtitle from "../Subtitle"
import Text from "../Text"
import Subtext from "../Subtext"
import { NotificationCardInterface } from "../../../interfaces"
import Section from "../Section"

const NotificationCard = ({ index, text, subtitle, subtext, toasterStyle }: NotificationCardInterface) => {
  return (
    <NotificationCardStyle {...toasterStyle}>
      <Section flexDirection="row" justifyContent="space-between" alignItems="flex-start">
        <Subtitle> {subtitle} </Subtitle>
        <Icon icon={MdClose} onClick={() => dispatchRemoveNotification(index)} />
      </Section>
      <Text> {text} </Text>
      {subtext && <Subtext> {subtext} </Subtext>}
    </NotificationCardStyle>
  )
}

export default NotificationCard 