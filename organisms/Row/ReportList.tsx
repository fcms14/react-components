import { Row } from "../../molecules/Row"
import { DropDownItemInterface } from "../../atoms/DropDown"
import { theme } from "../../../providers/theme"
import { IconType } from "react-icons"
import IconOrMenu from "../../atoms/IconOrMenu/index"

export interface ReportListInterface {
  title: string,
  text: string,
  icon: IconType,
  iconColor?: string,
  actions?: DropDownItemInterface[]
  observer?: ((instance: HTMLDivElement | null) => void)
}

export interface Interface {
  items: ReportListInterface[]
}

const ReportList = ({ items }: Interface) => {
  return (
    <>
      {items.map(({ text, title, actions, icon, iconColor, observer }, key: number) => (
        <Row.Root key={key} rowStyle={{ borderBottom: `${theme.border} ${theme.colors.main.stroke}` }} observer={observer}>
          <Row.Icon icon={icon} color={iconColor} rounded />
          <Row.Section>
            <Row.Title size="small"> {title} </Row.Title>
            <Row.Text> {text} </Row.Text>
          </Row.Section>
          {actions && <IconOrMenu actions={actions} />}
        </Row.Root>
      ))}
    </>
  )
}
export default ReportList