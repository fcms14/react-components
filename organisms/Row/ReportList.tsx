import { Row } from "../../molecules/Row"
import { MdNavigateNext, MdPerson } from "react-icons/md"
import DropDown, { DropDownItemInterface } from "../../atoms/DropDown"
import { theme } from "../../../providers/theme"
import { IconType } from "react-icons"

export interface ReportListInterface {
  title: string,
  text: string,
  actions?: DropDownItemInterface[]
  icon?: IconType
}

export interface Interface {
  items: ReportListInterface[]
}

const ReportList = ({ items }: Interface) => {
  
  return (
    <>
      {items.map(({ text, title, actions, icon }, key: number) => (
        <Row.Root key={key} rowStyle={{ borderBottom: `1px solid ${theme.colors.main.stroke}` }}>
          <Row.Icon icon={icon?? MdPerson } rounded />
          <Row.Section>
            <Row.Title size="small"> {title} </Row.Title>
            <Row.Text> {text} </Row.Text>
          </Row.Section>
          {actions ?
            actions.length === 1
              ? <Row.Icon icon={actions[0].icon ?? MdNavigateNext} color={theme.colors.main.font} onClick={actions[0].onClick} width={Number(theme.fontsizes.title.big.match(/\d+/))} />
              : <DropDown items={actions} />
            : <></>
          }
        </Row.Root>
      ))}
    </>
  )
}
export default ReportList