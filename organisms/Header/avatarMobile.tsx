import Header from "../../atoms/Header"
import Text from "../../atoms/Text"
import { theme } from "../../../providers/theme"
import RowCard from "../Row/RowCard"
import Menu, { MenuInterface } from "../../atoms/Menu"
import Avatar from "../../atoms/Avatar"
import { HeaderAvatarDesktopInterface } from "./avatarDesktop"


export interface HeaderAvatarMobileInterface extends HeaderAvatarDesktopInterface {
  menu: MenuInterface,
}

const HeaderAvatarMobile = ({ avatar, card, menu, title }: HeaderAvatarMobileInterface) => {
  return (
    <Header height={"undefined"}>
      <Avatar {...avatar} />
      {title && <Text color={theme.colors.button.font}>{title}</Text>}
      <RowCard {...card} />
      <Menu {...menu} shortcutStyle={{ flexDirection: "row" }} menuStyle={{ justifyContent: "space-between" }} />
    </Header>
  )
}

export default HeaderAvatarMobile