import { theme } from "../../../providers/theme";
import { Header } from "../../molecules/Header"

interface Interface {
  text: string,
  leftIcon: string,
  rightIcon: string,
  leftClick: () => void
  rightClick: () => void
  iconSize?: number,
}

const HeaderWithTwoIcons = ({ text, leftIcon, rightIcon, iconSize, leftClick, rightClick }: Interface) => {
  return (
    <Header.Root>
      <Header.Icon width={iconSize} icon={leftIcon} onClick={leftClick} />
      <Header.Title parent="header"> {text} </Header.Title>
      <Header.Icon width={iconSize} icon={rightIcon} onClick={rightClick} />
    </Header.Root>
  )
}

export default HeaderWithTwoIcons