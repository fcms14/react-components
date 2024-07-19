import Header from "../../atoms/Header"
import { theme } from "../../../providers/theme"
import { getIconSize } from "../../helpers/helper"
import { Row } from "../../molecules/Row"
import { MdArrowDropDown, MdPerson } from "react-icons/md"
import { RowCardInterface } from "../Row/RowCard"
import { AvatarInterface } from "../../atoms/Avatar"

export interface HeaderAvatarDesktopInterface {
  text: string,
  title: string,
  avatar: AvatarInterface,
  card: RowCardInterface,
}

const HeaderAvatarDesktop = ({ title, text, avatar, card }: HeaderAvatarDesktopInterface) => {
  return (
    <Header height={"undefined"} className="header">
      <Row.Root rowStyle={{ flexDirection: "row", alignItems: "left" }}>
        <Row.Section sectionStyle={{ flexGrow: "0" }}>
          <Row.Title>{avatar.text}</Row.Title>
          <Row.Section sectionStyle={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: theme.gap }} >
            <Row.Text> {card.text}: {card.title}  </Row.Text>
            <Row.Icon color={theme.colors.main.font} width={getIconSize()} {...card.icon}/>
          </Row.Section>
        </Row.Section>
        <Row.Section sectionStyle={{ flexGrow: "0" }}>
          <Row.Root onClick={avatar.onClick}>
            <Row.Icon icon={MdPerson} color={theme.colors.main.font} width={24} rounded />
            <Row.Section>
              <Row.Section sectionStyle={{ flexDirection: "row", animation: true }}>
                <Row.Title>{title}</Row.Title>
                <Row.Icon icon={MdArrowDropDown} color={theme.colors.main.font} width={Number(theme.fontsizes.title.bigger.match(/\d+/))} />
              </Row.Section>
              <Row.Text>{text}</Row.Text>
            </Row.Section>
          </Row.Root>
        </Row.Section>
      </Row.Root>
    </Header>
  )
}

export default HeaderAvatarDesktop