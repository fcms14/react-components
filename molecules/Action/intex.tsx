import { MdNavigateNext } from "react-icons/md";
import { theme } from "../../../providers/theme";
import DropDown, { DropDownItemInterface } from "../../atoms/DropDown"
import { Row } from "../../molecules/Row"

interface ActionInterface {
    actions?: DropDownItemInterface[];
  }
  
  const Action = ({ actions }: ActionInterface) => {
    if (!actions || actions.length === 0) {
      return null;
    }
  
    if (actions.length === 1) {
      const action = actions[0];
      return (
        <Row.Icon
          icon={action.icon ?? MdNavigateNext}
          color={theme.colors.main.font}
          onClick={action.onClick}
          width={Number(theme.fontsizes.title.big.match(/\d+/))}
        />
      );
    }
  
    return <DropDown items={actions} />;
  };

  export default Action