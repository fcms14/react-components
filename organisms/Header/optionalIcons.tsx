import { IconComponentInterface } from "../../atoms/Icon";
import { HeaderProps } from "../../atoms/Header";
import { theme } from "../../../providers/theme";
import { Header } from "../../molecules/Header"
import IconOrMenu from "../../atoms/IconOrMenu/index";
import { DropDownItemInterface } from "../../atoms/DropDown";

export interface HeaderRightIconInterface extends IconComponentInterface {
  text: string
}

export interface HeaderOptionalIconsInterface {
  text: string,
  leftIcon?: IconComponentInterface
  rightIcon?: HeaderRightIconInterface
  iconBefore?: boolean
  actions?: DropDownItemInterface[]
}

const HeaderOptionalIcons = ({ text, leftIcon, rightIcon, iconBefore, actions }: HeaderOptionalIconsInterface) => {
  const iconWidth = leftIcon?.width ?? rightIcon?.width ?? Number(theme.fontsizes.title.big.match(/\d+/))
  const size = `${(iconWidth) + (Number(theme.padding.icon.match(/\d+/)) * 2)}px`;
  const headerStyle: HeaderProps | undefined = iconBefore ? { flexDirection: "row-reverse" } : undefined

  return (
    <Header.Root headerStyle={{ ...headerStyle }}>
      {leftIcon ? <Header.Icon {...leftIcon} width={iconWidth} /> : <Header.Spacer width={size} />}
      <Header.Title parent="header"> {text} </Header.Title>
      {rightIcon
        ? <Header.Icon {...rightIcon} width={iconWidth} />
        : (actions
          ? <IconOrMenu actions={actions} iconColor={theme.colors.header.icon} />
          : <Header.Spacer width={size} />
        )
      }
    </Header.Root>
  )
}

export default HeaderOptionalIcons