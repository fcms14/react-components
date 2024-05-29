import Icon from "../Icon"
import { theme } from "../../../providers/theme"
import AvatarStyle from "./AvatarStyle"
import { MdArrowDropDown, MdPersonOutline } from "react-icons/md"
import Title from "../Title"
import { AvatarInterface } from "../../../interfaces"

const Avatar = ({ text, onClick }: AvatarInterface) => {
  return (
    <AvatarStyle onClick={onClick}>
      <Icon
        icon={MdPersonOutline}
        color={theme.colors.header.font}
        width={Number(theme.fontsizes.title.bigger.match(/\d+/))}
      />
      <Title color={theme.colors.button.font}>{text}</Title>
      <Icon
        icon={MdArrowDropDown}
        color={theme.colors.button.font}
        width={Number(theme.fontsizes.title.bigger.match(/\d+/))}
      />
    </AvatarStyle>
  )
}

export default Avatar