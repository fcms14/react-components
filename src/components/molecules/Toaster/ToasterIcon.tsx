import Icon from "../../atoms/Icon"
import { IconComponentInterface } from "../../../interfaces"

const ToasterIcon = (props: IconComponentInterface) => {
  return (
    <Icon
      {...props}
      topRight
    />
  )
}

export default ToasterIcon