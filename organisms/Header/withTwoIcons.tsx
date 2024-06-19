import { IconType } from "react-icons";
import { Header } from "../../molecules/Header"
import { theme } from "../../../providers/theme";

interface Interface {
  text: string,
  leftIcon: IconType,
  rightIcon: IconType,
  leftClick: () => void
  rightClick: () => void
  iconSize?: number,
}

const HeaderWithTwoIcons = ({ text, leftIcon, rightIcon, iconSize, leftClick, rightClick }: Interface) => {
  const iconWidth = iconSize ?? Number(theme.fontsizes.title.big.match(/\d+/))
  return (
    <Header.Root>
      <Header.Icon width={iconWidth} icon={leftIcon} onClick={leftClick} />
      <Header.Title parent="header"> {text} </Header.Title>
      <Header.Icon width={iconWidth} icon={rightIcon} onClick={rightClick} />
    </Header.Root>
  )
}

export default HeaderWithTwoIcons