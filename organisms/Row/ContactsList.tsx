import { Row } from "../../molecules/Row"
import { InputMask } from "../../../components/helpers/Mask"
import { MdPerson } from "react-icons/md"
import DropDown, {DropDownItemInterface } from "../../atoms/DropDown"

export interface ContactsListInterface {
    title: string,
    text: string,
    actions?: DropDownItemInterface[]     
}
  
export interface Interface {
    items: ContactsListInterface[]
}

const ContactsList = ({items}: Interface) => {
    return (
        <>
        {items.map((item, key:number) => (
            <div key={key} style={{ borderBottom: `1px solid` }}>
            <Row.Root rowStyle={{  }}>
                <Row.Icon icon={MdPerson} rounded />
                <Row.Section>
                    <Row.Title size="small"> {InputMask.name(item.title)} </Row.Title>
                    <Row.Text> {item.text} </Row.Text>
                </Row.Section>
                {item.actions &&  
                <DropDown items={item.actions}/>
                }
            </Row.Root>                       
          </div>
        ))}
    </>
    )                      
      
}
export default ContactsList