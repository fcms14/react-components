import { Row } from "../../molecules/Row"
import RowSection from "../../molecules/Row/RowSection"
import ButtonSecondary from "./ButtonSecondary";
  
interface Interface {
  text: [string, string, string]
  color: string[]
  borderBotom: boolean
  overflow: boolean
  padding: boolean
}

const PanelsButon = ({ text, color, borderBotom, overflow, padding }: Interface) => {
  
  return (
    <Row.Root >
      <RowSection sectionStyle={{ flexDirection: "row",  borderBotom, overflow}}>        
         <RowSection sectionStyle={{ padding}}> 
            <ButtonSecondary  color={color[0]} text={text[0]} onClick={() => {}}></ButtonSecondary>
          </RowSection>
         <RowSection sectionStyle={{ padding}}>         
            <ButtonSecondary  color={color[0]} text={text[1]}  onClick={() => {}}></ButtonSecondary>
          </RowSection>    
          <RowSection sectionStyle={{ padding}}> 
            <ButtonSecondary  color={color[0]}  text={text[2]}  onClick={() => {}}></ButtonSecondary>
          </RowSection>            
      </RowSection>
    </Row.Root>         
  )
    
  }  
  export default PanelsButon 
