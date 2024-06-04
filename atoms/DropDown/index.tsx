import { IconType } from "react-icons"
import DropDownStyle, { DropDownItemStyle } from "./DropDownStyle"
import Icon from "../Icon"
import Text from "../Text"
import { theme } from "../../../providers/theme"

interface item {
  text: string,
  icon: IconType,
  onClick?: () => void,
  width?: number,
  color?: string
}

export interface DropDownInterface {
  items: item[]
}

const DropDown = ({ items }: DropDownInterface) => {
  return (
    <DropDownStyle>
      {items.map(({ text, icon, onClick, color, width }: item, index: number) =>
        <DropDownItemStyle onClick={onClick} cursor={onClick ? 'pointer' : 'inherit'} key={index}>
          <Icon
            icon={icon}
            color={color ?? theme.colors.main.font}
            width={width ?? Number(theme.fontsizes.title.default.match(/\d+/))}
          />
          <Text color={color ?? theme.colors.main.font}>{text}</Text>
        </DropDownItemStyle>
      )}
    </DropDownStyle>
  )
}

export default DropDown