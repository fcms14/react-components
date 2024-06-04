import { IconType } from "react-icons";
import { Header } from "../../molecules/Header"

interface Interface {
  text: string,
  leftIcon: IconType,
  rightIcon: IconType,
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