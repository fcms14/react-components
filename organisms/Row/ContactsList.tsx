import { Row } from "../../molecules/Row"
import { InputMask } from "../../../components/helpers/Mask"
import { MdPerson } from "react-icons/md"
import DropDown, { DropDownItemInterface } from "../../atoms/DropDown"
import { theme } from "../../../providers/theme"

export interface ContactsListInterface {
  title: string,
  text: string,
  actions?: DropDownItemInterface[]
}

export interface Interface {
  items: ContactsListInterface[]
}

const ContactsList = ({ items }: Interface) => {
  return (
    <>
      {items.map((item, key: number) => (
        <Row.Root key={key} rowStyle={{ borderBottom: `1px solid ${theme.colors.main.stroke}` }}>
          <Row.Icon icon={MdPerson} rounded />
          <Row.Section>
            <Row.Title size="small"> {InputMask.name(item.title)} </Row.Title>
            <Row.Text> {item.text} </Row.Text>
          </Row.Section>
          {item.actions && <DropDown items={item.actions} />}
        </Row.Root>
      ))}
    </>
  )
}
export default ContactsList