import { IconType } from "react-icons";
import { HeaderProps } from "../../../interfaces";
import { theme } from "../../../providers/theme";
import { Header } from "../../molecules/Header"

interface Interface {
  text: string,
  icon: IconType,
  onClick: () => void
  iconSize?: number,
  iconBefore?: boolean
}

const HeaderWithIcon = ({ text, icon, iconSize, onClick, iconBefore }: Interface) => {
  const size = `${(iconSize ?? 16) + (Number(theme.padding.icon.match(/\d+/)) * 2)}px`;
  const headerStyle: HeaderProps | undefined = iconBefore ? { flexDirection: "row-reverse" } : undefined

  return (
    <Header.Root headerStyle={{ ...headerStyle }}>
      <Header.Spacer width={size} />
      <Header.Title parent="header"> {text} </Header.Title>
      <Header.Icon width={iconSize} icon={icon} onClick={onClick} />
    </Header.Root>
  )
}

export default HeaderWithIcon