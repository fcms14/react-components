import Header from "../../atoms/Header"
import { RowCardInterface, AvatarInterface } from "../../../interfaces"
import { theme } from "../../../providers/theme"
import { getIconSize } from "../Button/helper"
import { Row } from "../../molecules/Row"
import { MdArrowDropDown, MdPerson } from "react-icons/md"

interface Interface {
  title: string,
  text: string,
  avatar: AvatarInterface,
  card: RowCardInterface,
}

const HeaderDesktop = ({ title, text, avatar, card }: Interface) => {
  return (
    <Header height={"undefined"}>
      <Row.Root rowStyle={{ flexDirection: "row", alignItems: "left" }}>
        <Row.Section sectionStyle={{ flexGrow: "0" }}>
          <Row.Title>{avatar.text}</Row.Title>
          <Row.Section sectionStyle={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: theme.gap }} >
            <Row.Text> {card.text}: {card.title}  </Row.Text>
            <Row.Icon color={theme.colors.main.font} width={getIconSize()} icon={card.icon} onClick={card.onClick} />
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

export default HeaderDesktop