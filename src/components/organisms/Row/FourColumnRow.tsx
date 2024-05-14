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
                <Row.Subtext color={color[0]} >{text[0]}</Row.Subtext >
            </RowSection>
           <RowSection >         
                <Row.Subtext color={color[1]} >{text[1]}</Row.Subtext >
            </RowSection>         
        </RowSection>
        <RowSection sectionStyle={{ flexDirection: "row",  textalign: "left", borderBotom}}>       
            <RowSection > 
                <Row.Subtext color={color[2]} >{text[2]}</Row.Subtext >
            </RowSection>
           <RowSection>         
                <Row.Subtext color={color[3]} >{text[3]}</Row.Subtext >
            </RowSection>           
         </RowSection>
      </Row.Root>         
    )
  }  
  export default FourColumnRow