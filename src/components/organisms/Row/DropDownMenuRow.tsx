import { Row } from "../../molecules/Row"
import DropDownMenu from "../../atoms/DropDownMenu"
import { IconType } from "react-icons"

interface items {
    text: string,
    icon: IconType,   
    color?: string
}

interface Interface {
    item: items[]
}

const DropDownMenuRow = ({item}: Interface) => {
    return (
     <DropDownMenu>  
        <>{item.map((item: items, index: number) =>
            <Row.Root key={index}>            
                <Row.Section sectionStyle={{  flexDirection: "row", alignItems: "center", gap:"4px", padding: true}}>
                    <Row.Icon width={20} icon={item.icon} />
                    <Row.Text size="big" color={item.color}> {item.text} </Row.Text>
                </Row.Section>            
            </Row.Root>          
         )}</>
      </DropDownMenu>    
    )
}

export default DropDownMenuRow