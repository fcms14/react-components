import InputStyle, { InputSpanStyle, LabelStyle } from "./InputStyle"
import { InputProps } from "../../../interfaces"
import { useState } from "react"

interface Interface {
    label: string
    inputStyle: InputProps
}

const Input = ({ label, inputStyle }: Interface) => {
    const [filled, setFilled] = useState(false);

    return (
        <InputSpanStyle>
            <LabelStyle filled={filled}> {label} </LabelStyle>
            <InputStyle {...inputStyle} onChange={(e) => setFilled(!!e.target.value)} />
        </InputSpanStyle>
    )
}

export default Input