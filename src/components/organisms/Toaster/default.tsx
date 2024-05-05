import { Toaster } from "../../molecules/Toaster"
import { ToasterInterface } from '../../../interfaces'
import { MdClose } from "react-icons/md"

const ToasterDefault = ({ text, subtitle, caption, toasterStyle }: ToasterInterface) => {
  return (
    <Toaster.Root toasterStyle={{ ...toasterStyle }}>
      <Toaster.Icon icon={MdClose} />
      <Toaster.Subtitle> {subtitle} </Toaster.Subtitle>
      <Toaster.Text> {text} </Toaster.Text>
      <Toaster.Caption> {caption} </Toaster.Caption>
    </Toaster.Root>
  )
}

export default ToasterDefault