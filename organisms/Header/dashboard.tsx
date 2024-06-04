import Header from "../../atoms/Header"
import Text from "../../atoms/Text"
import { theme } from "../../../providers/theme"
import RowCard, { RowCardInterface } from "../Row/RowCard"
import Menu, { MenuInterface } from "../../atoms/Menu"
import Avatar, { AvatarInterface } from "../../atoms/Avatar"

interface Interface {
  text: string,
  avatar: AvatarInterface,
  card: RowCardInterface,
  menu: MenuInterface,
}

const HeaderDashboard = ({ text, avatar, card, menu }: Interface) => {
  return (
    <Header height={"undefined"}>
      <Avatar {...avatar} />
      <Text color={theme.colors.button.font}>{text}</Text>
      <RowCard {...card} />
      <Menu {...menu} shortcutStyle={{ flexDirection: "row" }} menuStyle={{ justifyContent: "space-between" }} />
    </Header>
  )
}

export default HeaderDashboard