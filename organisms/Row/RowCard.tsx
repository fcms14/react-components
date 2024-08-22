import { Row } from "../../molecules/Row"
import { theme } from "../../../providers/theme"
import { IconComponentInterface } from "../../atoms/Icon"

export interface RowCardInterface {
  text: string,
  title: string,
  icon: IconComponentInterface,
}

const RowCard = ({ text, title, icon }: RowCardInterface) => {
  return (
    <Row.Root rowStyle={{ flexDirection: "column", alignItems: "left", backgroundColor: theme.colorByType.info, borderRadius: theme.radius }}>
      <Row.Text color={theme.colors.button.font}> {text} </Row.Text>
      <Row.Section sectionStyle={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
        <Row.Title color={theme.colors.button.font}> {title} </Row.Title>
        <Row.Icon {...icon} />
      </Row.Section>
    </Row.Root>
  )
}

export default RowCard