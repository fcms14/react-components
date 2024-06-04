import NotificationCardStyle, { ToasterProps } from "./NotificationCardStyle"
import { MdClose } from "react-icons/md"
import Icon from "../Icon"
import Subtitle from "../Subtitle"
import Text from "../Text"
import Section from "../Section"
import Subtext from "../Subtext"

export interface NotificationInterface {
  active: boolean,
  text: string,
  subtitle: string,
  subtext?: string,
  toasterStyle: ToasterProps,
}

export interface NotificationCardInterface extends NotificationInterface {
  index: number,
  onClick: (index: number) => void
}

const NotificationCard = ({ index, text, subtitle, subtext, toasterStyle, onClick }: NotificationCardInterface) => {
  return (
    <NotificationCardStyle {...toasterStyle}>
      <Section flexDirection="row" justifyContent="space-between" alignItems="flex-start">
        <Subtitle> {subtitle} </Subtitle>
        <Icon icon={MdClose} onClick={() => onClick(index)} />
      </Section>
      <Text> {text} </Text>
      {subtext && <Subtext> {subtext} </Subtext>}
    </NotificationCardStyle>
  )
}

export default NotificationCard 