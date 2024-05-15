import InputStyle, { InputSpanStyle, LabelStyle } from "./InputStyle"
import { InputProps } from "../../../interfaces"
import { useFormikContext } from "formik"
import { BaseSyntheticEvent } from "react"
import { Mask, MaskType } from "../../../helpers/Mask"

interface Interface {
    label: string
    type: string
    mask: MaskType
    inputMode?: string
    onChange?: () => void
    name: string
    inputStyle?: InputProps
}

const Input = ({ label, type, mask, name, inputStyle, onChange, inputMode }: Interface) => {
    const { setFieldValue } = useFormikContext()

    function handleChange(e: BaseSyntheticEvent) {
        setFieldValue(e.currentTarget.name, Mask[mask](e.currentTarget.value))
    }

    return (
        <InputSpanStyle>
            <InputStyle
                {...inputStyle}
                placeholder={label}
                id={name}
                name={name}
                type={type}
                inputMode={inputMode}
                onKeyUp={(e: BaseSyntheticEvent) => {
                    handleChange(e);
                    onChange?.()
                }}
                onKeyDown={handleChange}
            />
            <LabelStyle htmlFor={name}> {label} </LabelStyle>
        </InputSpanStyle>
    )
}

export default Input