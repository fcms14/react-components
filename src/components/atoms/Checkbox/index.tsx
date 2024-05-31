import Subtitle from "../Subtitle"
import CheckboxStyle from "./CheckboxStyle"
import {  useState } from "react"

interface Interface {
    text: string
    color?: string   
      
}

const Checkbox = ({  text,  color}: Interface) => { 
    const [checked, setChecked] = useState(false);   

    const handleonRadioChange = () => {
        const newCheckedState = !checked;
        setChecked(newCheckedState);     
    };

    return (
        <CheckboxStyle>
            <input
            type="checkbox"   
            onChange={() => {handleonRadioChange();}}        
            checked={checked}          
            title={text}            
             />
           <Subtitle color={color}> {text} </Subtitle>
        </CheckboxStyle>                
    )
}

export default Checkbox