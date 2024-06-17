import { Row } from "../../molecules/Row";
import { theme } from "../../../providers/theme";
import { getIconSize } from "../../helpers/helper";
import { IconType } from "react-icons";


export interface RowListInterface {
  rightTitle: string,
  leftTitle: string,
  rightText: string,
  lefticon: IconType,
  righticon: IconType,
  leftText: string, 
  onClick: () => void,
}

const RowList = ({  leftText, rightTitle, rightText, lefticon, righticon, leftTitle,  onClick }: RowListInterface) => {
  return (
    <Row.Root rowStyle={{borderBottom: `1px solid ${theme.colors.main.stroke}` }}>
        <Row.Icon width={getIconSize()} icon={lefticon} onClick={onClick}  />   
        <Row.Section>
            <Row.Text>{ leftText}</Row.Text>
            <Row.Title>{leftTitle}</Row.Title>
        </Row.Section>     
        <Row.Section sectionStyle={{alignItems: "flex-end"}}>
            <Row.Text>{rightText}</Row.Text>      
            <Row.Title >{rightTitle}</Row.Title>            
        </Row.Section>      
        <Row.Icon width={getIconSize()} icon={righticon} onClick={onClick} />       
    </Row.Root>
  );
}

export default RowList