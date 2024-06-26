import { MdNavigateNext } from "react-icons/md";
import { theme } from "../../../providers/theme";
import DropDown, { DropDownItemInterface } from "../DropDown"
import { Row } from "../../molecules/Row"

interface IconOrMenuInterface {
  actions: DropDownItemInterface[]
  iconColor?: string
}

const IconOrMenu = ({ actions, iconColor }: IconOrMenuInterface) => {
  return <>
    {actions.length === 1
      ? <Row.Icon
        icon={actions[0].icon ?? MdNavigateNext}
        color={actions[0].color ?? theme.colors.main.font}
        onClick={actions[0].onClick}
        width={Number(theme.fontsizes.title.big.match(/\d+/))}
      />
      : <DropDown items={actions} iconColor={iconColor} />
    }
  </>
}

export default IconOrMenu