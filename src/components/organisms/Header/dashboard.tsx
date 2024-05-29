import Header from "../../atoms/Header"
import RowCard from "../Row/RowCard"
import { RowCardInterface, MenuInterface, AvatarInterface } from "../../../interfaces"
import Menu from "../../atoms/Menu"
import { theme } from "../../../providers/theme"
import Avatar from "../../atoms/Avatar"
import Text from "../../atoms/Text"

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