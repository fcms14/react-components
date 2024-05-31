import Subtitle from "../Subtitle"
import RadioButtonStyle from "./RadioButtonStyle"
import {  useState } from "react"

interface Interface {
    text: string
    color?: string
    name:string   
      
}

const RadioButton = ({  text,  color, name }: Interface) => { 
    const [checked, setChecked] = useState(false);   

    const handleonRadioChange = () => {
        const newCheckedState = !checked;
        setChecked(newCheckedState);     
    };

    return (
        <RadioButtonStyle>
            <input
            name={name}
            type="radio"   
            onChange={() => {handleonRadioChange();}}        
            checked={checked}          
            title={text}            
             />
           <Subtitle color={color}> {text} </Subtitle>
        </RadioButtonStyle>                
    )
}

export default RadioButton