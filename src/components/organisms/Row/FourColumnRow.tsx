import { Row } from "../../molecules/Row"
import { theme } from "../../../providers/theme"
import RowSection from "../../molecules/Row/RowSection"

interface Interface {
    subtitle: [string, string, string, string]
    border: boolean   
   
  }
  
  const FourColumnRow = ({ subtitle, border}: Interface) => {
    return (
      <Row.Root >
        <RowSection sectionStyle={{ flexDirection: "row",  textalign: "right", border}}>        
           <RowSection> 
                <Row.Text>{subtitle[0]}</Row.Text>  
            </RowSection>
           <RowSection>         
                <Row.Text>{subtitle[1]}</Row.Text>   
            </RowSection>         
        </RowSection>
        <RowSection sectionStyle={{ flexDirection: "row",  textalign: "left", border}}>       
            <RowSection> 
                <Row.Text >{subtitle[2]}</Row.Text>  
            </RowSection>
           <RowSection>         
                <Row.Text >{subtitle[3]}</Row.Text>   
            </RowSection>           
         </RowSection>
      </Row.Root>         
    )
  }  
  export default FourColumnRow