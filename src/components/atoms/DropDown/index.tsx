import { IconType } from "react-icons"
import DropDownStyle, { DropDownItemStyle } from "./DropDownStyle"
import Icon from "../Icon"
import Text from "../Text"
import { theme } from "../../../providers/theme"

interface items {
  text: string,
  icon: IconType,
  onClick?: () => void,
  width?: number,
  color?: string
}

interface Interface {
  item: items[]
}

const DropDown = ({ item }: Interface) => {
  return (
    <DropDownStyle>
      {item.map(({ text, icon, onClick, color, width }: items, index: number) =>
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