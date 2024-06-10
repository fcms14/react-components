import { Row } from "../../molecules/Row"
import { IconType } from "react-icons"
import { useTranslation } from "react-i18next"
import { InputMask } from "../../../components/helpers/Mask"
import Icon from "../../atoms/Icon"

export interface ContactsListInterface {
    name: string,
    email: string,
    key_document: string,
    document: string,
    phone: string,
    iconSize?: number,
    icon: IconType,
    onClick?: () => void,
}
  
export interface Interface {
    items: ContactsListInterface[]
}

const ContactsList = ({items}: Interface) => {
    const { t } = useTranslation()

    return (
        <>
        {items.map((item, key:number) => (
            <Row.Root key={key} rowStyle={{ justifyContent: "flex-start" }}>
                <Row.Section sectionStyle={{borderBotom: true}}>
                    <Row.Text key={key}> {item} </Row.Text>               
                </Row.Section>
            </Row.Root>
        ))}
    </>
    )                        
      

}
export default ContactsList