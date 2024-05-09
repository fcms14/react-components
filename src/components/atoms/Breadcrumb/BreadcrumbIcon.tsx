import Icon from "../Icon"
import { IconComponentInterface } from "../../../interfaces"

const BreadcrumbIcon = (props: IconComponentInterface) => {
  return (
    <Icon
      {...props}
      color={props.color!}
    />
  )
}

export default BreadcrumbIcon