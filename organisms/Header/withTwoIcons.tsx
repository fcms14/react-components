import { Header } from "../../molecules/Header"
import { theme } from "../../../providers/theme";
import { IconComponentInterface } from "../../atoms/Icon";

interface Interface {
  text: string,
  leftIcon: IconComponentInterface,
  rightIcon: IconComponentInterface,
}

const HeaderWithTwoIcons = ({ text, leftIcon, rightIcon }: Interface) => {
  leftIcon.width ?? Number(theme.fontsizes.title.big.match(/\d+/))
  rightIcon.width ?? Number(theme.fontsizes.title.big.match(/\d+/))
  return (
    <Header.Root>
      <Header.Icon {...leftIcon} />
      <Header.Title parent="header"> {text} </Header.Title>
      <Header.Icon {...rightIcon} />
    </Header.Root>
  )
}

export default HeaderWithTwoIcons