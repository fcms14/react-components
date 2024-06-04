import Icon from "../Icon"
import { theme } from "../../../providers/theme"
import AvatarStyle from "./AvatarStyle"
import { MdArrowDropDown, MdPersonOutline } from "react-icons/md"
import Title from "../Title"
import { AvatarInterface } from "../../../interfaces"

const Avatar = ({ text, color, onClick }: AvatarInterface) => {
  return (
    <AvatarStyle onClick={onClick}>
      <img src={import.meta.env.VITE_WHITE_LABEL_LOGO_ICON} width={Number(theme.fontsizes.title.bigger.match(/\d+/))} />
      <Title color={color ?? theme.colors.button.font}>{text}</Title>
      <Icon
        icon={MdArrowDropDown}
        color={color ?? theme.colors.button.font}
        width={Number(theme.fontsizes.title.bigger.match(/\d+/))}
      />
    </AvatarStyle>
  )
}

export default Avatar