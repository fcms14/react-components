import InputStyle, { InputSpanStyle, LabelStyle } from "./InputStyle"
import { InputProps } from "../../../interfaces"

interface Interface {
    label: string
    type: string
    name: string
    inputStyle: InputProps
}

const Input = ({ label, type, name, inputStyle }: Interface) => {
    return (
        <InputSpanStyle>
            <InputStyle {...inputStyle} placeholder={label} id={name} name={name} type={type}  />
            <LabelStyle htmlFor={name}> {label} </LabelStyle>
        </InputSpanStyle>
    )
}

export default Input