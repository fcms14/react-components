import { IconComponentInterface } from "../../atoms/Icon";
import { HeaderProps } from "../../atoms/Header";
import { theme } from "../../../providers/theme";
import { Header } from "../../molecules/Header"

interface Interface {
  text: string,
  leftIcon?: IconComponentInterface
  rightIcon?: IconComponentInterface
  iconBefore?: boolean
}

const HeaderOptionalIcons = ({ text, leftIcon, rightIcon, iconBefore }: Interface) => {
  const size = `${(leftIcon?.width ?? rightIcon?.width ?? 16) + (Number(theme.padding.icon.match(/\d+/)) * 2)}px`;
  const headerStyle: HeaderProps | undefined = iconBefore ? { flexDirection: "row-reverse" } : undefined

  return (
    <Header.Root headerStyle={{ ...headerStyle }}>
      {leftIcon ? <Header.Icon {...leftIcon} /> : <Header.Spacer width={size} />}
      <Header.Title parent="header"> {text} </Header.Title>
      {rightIcon ? <Header.Icon {...rightIcon} /> : <Header.Spacer width={size} />}
    </Header.Root>
  )
}

export default HeaderOptionalIcons