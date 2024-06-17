import { Row } from "../../molecules/Row";
import { theme } from "../../../providers/theme";
import { getIconSize } from "../../helpers/helper";
import { IconType } from "react-icons";


export interface RowListInterface {
  rightTitle: string,
  leftTitle: string,
  rightText: string,
  leftIcon: IconType,
  rightIcon: IconType,
  leftText: string, 
  onClick?: () => void,
}

export interface Interface {
    items: RowListInterface[]
  }

const RowList = ({  items }: Interface) => {
  return (
    <>
     {items.map(({  rightTitle,  rightText, leftTitle,  leftText, leftIcon,  rightIcon, onClick }, key: number) => (
        <Row.Root key={key} rowStyle={{borderBottom: `1px solid ${theme.colors.main.stroke}` }}>
            <Row.Icon width={getIconSize()} icon={leftIcon} onClick={onClick}  />   
            <Row.Section>
                <Row.Text>{leftText}</Row.Text>
                <Row.Title>{leftTitle}</Row.Title>
            </Row.Section>     
            <Row.Section sectionStyle={{alignItems: "flex-end"}}>
                <Row.Text>{rightText}</Row.Text>      
                <Row.Title >{rightTitle}</Row.Title>            
            </Row.Section>      
            <Row.Icon width={getIconSize()} icon={rightIcon} onClick={onClick} />       
        </Row.Root>
        ))}
    </>

  );
}

export default RowList