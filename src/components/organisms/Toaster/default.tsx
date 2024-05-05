import { Toaster } from "../../molecules/Toaster"
import { NotificationInterface } from '../../../interfaces'
import { MdClose } from "react-icons/md"
import { dispatchRemoveNotification } from "../../../features/toaster/toasterDispatcher"

const ToasterDefault = ({ index, text, subtitle, caption, toasterStyle }: NotificationInterface) => {
  return (
    <Toaster.Root toasterStyle={{ ...toasterStyle }}>
      <Toaster.Icon icon={MdClose} onClick={() => index ? dispatchRemoveNotification(index) : undefined} />
      <Toaster.Subtitle> {subtitle} </Toaster.Subtitle>
      <Toaster.Text> {text} </Toaster.Text>
      <Toaster.Caption> {caption} </Toaster.Caption>
    </Toaster.Root>
  )
}

export default ToasterDefault