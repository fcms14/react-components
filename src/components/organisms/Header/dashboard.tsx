import  Header from "../../atoms/Header"
import { Row } from "../../molecules/Row"
import  RowCard  from "../Row/RowCard"
import {RowCardInterface, MenuInterface, MenuProps, RowProps  } from "../../../interfaces"
import Menu from "../../atoms/Menu"
import RowRoot from "../../molecules/Row/RowRoot"
import { theme } from "../../../providers/theme"
import { IconType } from "react-icons";
import {  MdKeyboardArrowDown } from "react-icons/md"


interface Interface {
    textAvatar ?: string,
    textBalance?: string,
    card: RowCardInterface,
    menu: MenuInterface,
    avatar: IconType,
    icon?: IconType, 
    onClick: () => void
}

const menuStyle: MenuProps = {
    justifyContent: `space-between`,
}

const rowStyle: RowProps = {
    marginBottom: `1px`,
    padding: '2px',
    justifyContent: 'undefined',
}

const HeaderDashboard = ( {  onClick, avatar, textAvatar,  textBalance, card, menu }:  Interface) => {
    return (
     <Header dashboard = {true} >    
        <RowRoot rowStyle={rowStyle}>   
            <Row.Icon color={theme.colors.button.font} icon={avatar}  />   
            <Row.Text color={theme.colors.button.font} >{textAvatar}</Row.Text>
            <Row.Icon color={theme.colors.button.font} icon={MdKeyboardArrowDown} onClick={onClick} />                
       </RowRoot>  
        <RowRoot rowStyle={rowStyle}>  
            <Row.Text color={theme.colors.button.font} >{textBalance}</Row.Text> 
        </RowRoot> 
           <RowCard {...card} ></RowCard>               
           <Menu shortcutStyle={ {flexDirection: "row"}}  menuStyle={menuStyle} {...menu}  ></Menu>           
     </Header>   
    )
}

export default HeaderDashboard