import { IconType } from "react-icons"
import { Row } from "../../molecules/Row"
import { theme } from "../../../providers/theme"
import { getIconSize } from "../Button/helper"

interface Interface {
  text: string
  title: string
  icon: IconType
  onClick: () => void
}

const RowCard = ({ text, title, icon, onClick }: Interface) => {
  return (
    <Row.Root rowStyle={{ flexDirection: "column", alignItems: "left", backgroundColor: theme.colorByType.info, borderRadius: theme.radius }}>
      <Row.Text color={theme.colors.button.font}> {text} </Row.Text>
      <Row.Section sectionStyle={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
        <Row.Title color={theme.colors.button.font}> {title} </Row.Title>
        <Row.Icon width={getIconSize()} color={theme.colors.button.font} icon={icon} onClick={onClick} />
      </Row.Section>
    </Row.Root>
  )
}

export default RowCard