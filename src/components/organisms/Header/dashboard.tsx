import  Header from "../../atoms/Header"
import { Row } from "../../molecules/Row"
import RowSection from "../../molecules/Row/RowSection"
import  RowCard  from "../Row/RowCard"
import { IconType } from "react-icons"


interface Interface {
    text?: string,
    colorText?: string,
    onClick: () => void,
    icon: IconType,
    
}

const HeaderDashboard = ( { text,  icon,  onClick }:  Interface) => {
    return (
     <Header>
           <RowCard text="Saldo Disponível" title ="R$0,00" icon={icon} onClick={onClick} ></RowCard>             
     </Header>   
    )
}

export default HeaderDashboard