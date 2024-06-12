import { Row } from "../../molecules/Row"
import { InputMask } from "../../../components/helpers/Mask"
import { MdNavigateNext, MdPerson } from "react-icons/md"
import DropDown, { DropDownItemInterface } from "../../atoms/DropDown"
import { theme } from "../../../providers/theme"

export interface ReportListInterface {
  title: string,
  text: string,
  actions?: DropDownItemInterface[]
}

export interface Interface {
  items: ReportListInterface[]
}

const ReportList = ({ items }: Interface) => {
  return (
    <>
      {items.map((item, key: number) => (
        <Row.Root key={key} rowStyle={{ borderBottom: `1px solid ${theme.colors.main.stroke}` }}>
          <Row.Icon icon={MdPerson} rounded />
          <Row.Section>
            <Row.Title size="small"> {InputMask.name(item.title)} </Row.Title>
            <Row.Text> {item.text} </Row.Text>
          </Row.Section>
          {item.actions ?
            item.actions.length === 1
              ? <Row.Icon icon={MdNavigateNext} color={theme.colors.main.font} onClick={item.actions[0].onClick} width={Number(theme.fontsizes.title.big.match(/\d+/))} />
              : <DropDown items={item.actions} />
            : <></>
          }
        </Row.Root>
      ))}
    </>
  )
}
export default ReportList