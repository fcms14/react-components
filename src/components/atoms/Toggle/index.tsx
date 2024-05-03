import { useState } from "react"
import Title from "../Title"
import ToggleStyle, { ToggleSpanStyle } from "./ToggleStyle"
import { ToggleSpanProps } from "../../../interfaces"

interface Interface {
    text: string
    color?: string
    onToggleChange?: (checked: boolean) => void;
    toggleStyle?: ToggleSpanProps
}

const Toggle = ({ text, color, onToggleChange, toggleStyle }: Interface) => {
    const [checked, setChecked] = useState(true);

    const handleCheckboxChange = () => {
        onToggleChange?.(!checked);
        setChecked(!checked);
    };

    return (
        <ToggleSpanStyle {...toggleStyle}>
            <Title color={color}> {text} </Title>
            <ToggleStyle color={color}> <input type="checkbox" checked={checked} onChange={handleCheckboxChange} /> <span /> </ToggleStyle>
        </ToggleSpanStyle>
    )
}

export default Toggle