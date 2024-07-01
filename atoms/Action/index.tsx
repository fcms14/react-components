import { MdNavigateNext } from "react-icons/md";
import { theme } from "../../../providers/theme";
import DropDown, { DropDownItemInterface } from "../DropDown"
import { Row } from "../../molecules/Row"

interface ActionInterface {
  actions: DropDownItemInterface[];
}

const Action = ({ actions }: ActionInterface) => {
  return <>
    {actions.length === 1
      ? <Row.Icon
        icon={actions[0].icon ?? MdNavigateNext}
        color={theme.colors.main.font}
        onClick={actions[0].onClick}
        width={Number(theme.fontsizes.title.big.match(/\d+/))}
      />
      : <DropDown items={actions} />
    }
  </>
}

export default Action