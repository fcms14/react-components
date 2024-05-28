import  Header from "../../atoms/Header"
import { Row } from "../../molecules/Row"


interface Interface {
    text?: string,
    colorText?: string
}


const HeaderGuest = ( { text,  colorText }:  Interface) => {
    return (
     <Header>         
        <Row.Root >                            
            <Row.Title size="big" color={colorText}> {text} </Row.Title>
        </Row.Root>         
     </Header>   
    )
}

export default HeaderGuest