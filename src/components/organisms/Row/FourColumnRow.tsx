import { Row } from "../../molecules/Row"
import RowSection from "../../molecules/Row/RowSection"

interface Interface {
    text: [string, string, string, string]
    color: [string, string, string, string]
    borderBotom: boolean         
  }
  
  const FourColumnRow = ({ text , borderBotom, color}: Interface) => {
        
    return (
      <Row.Root >
        <RowSection sectionStyle={{ flexDirection: "row",  textalign: "right", borderBotom}}>        
           <RowSection> 
                <Row.Title color={color[0]} size="smaller">{text[0]}</Row.Title>
            </RowSection>
           <RowSection >         
                <Row.Title color={color[1]} size="smaller">{text[1]}</Row.Title>
            </RowSection>         
        </RowSection>
        <RowSection sectionStyle={{ flexDirection: "row",  textalign: "left", borderBotom}}>       
            <RowSection > 
                <Row.Title color={color[2]} size="smaller">{text[2]}</Row.Title>
            </RowSection>
           <RowSection>         
                <Row.Title color={color[3]} size="smaller">{text[3]}</Row.Title>
            </RowSection>           
         </RowSection>
      </Row.Root>         
    )
  }  
  export default FourColumnRow