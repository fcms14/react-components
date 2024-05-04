import InputStyle, { InputSpanStyle, LabelStyle } from "./InputStyle"
import { InputProps } from "../../../interfaces"
import { useState } from "react"

interface Interface {
    label: string
    inputStyle: InputProps
}

const Input = ({ label, inputStyle }: Interface) => {
    return (
        <InputSpanStyle>
            <InputStyle placeholder={label} id={inputStyle.name} {...inputStyle} />
            <LabelStyle htmlFor={inputStyle.name}> {label} </LabelStyle>
        </InputSpanStyle>
    )
}

export default Input