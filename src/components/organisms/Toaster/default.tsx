import { Toaster } from "../../molecules/Toaster"
import { ToasterProps } from '../../../interfaces'

interface Interface {
  text: string,
  subtitle: string,
  caption: string
  icon: string,
  toasterStyle: ToasterProps,
}

const ToasterDefault = ({ text, subtitle, caption, icon, toasterStyle }: Interface) => {
  return (
    <Toaster.Root toasterStyle={{ ...toasterStyle }}>
      <Toaster.Icon icon={icon} />
      <Toaster.Subtitle> {subtitle} </Toaster.Subtitle>
      <Toaster.Text> {text} </Toaster.Text>
      <Toaster.Caption> {caption} </Toaster.Caption>
    </Toaster.Root>
  )
}

export default ToasterDefault