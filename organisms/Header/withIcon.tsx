import { HeaderProps } from "../../atoms/Header";
import { theme } from "../../../providers/theme";
import { Header } from "../../molecules/Header"
import { IconComponentInterface } from "../../atoms/Icon";

interface Interface {
  text: string,
  icon: IconComponentInterface,
  iconBefore?: boolean
}

const HeaderWithIcon = ({ text, icon, iconBefore }: Interface) => {
  icon?.width ?? Number(theme.fontsizes.title.big.match(/\d+/))
  const size = `${(icon.width ?? 16) + (Number(theme.padding.icon.match(/\d+/)) * 2)}px`;
  const headerStyle: HeaderProps | undefined = iconBefore ? { flexDirection: "row-reverse" } : undefined

  return (
    <Header.Root headerStyle={{ ...headerStyle }}>
      <Header.Spacer width={size} />
      <Header.Title parent="header"> {text} </Header.Title>
      <Header.Icon {...icon} />
    </Header.Root>
  )
}

export default HeaderWithIcon