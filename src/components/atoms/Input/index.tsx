import InputStyle, { InputSpanStyle, LabelStyle } from "./InputStyle"
import { InputProps } from "../../../interfaces"
import { useFormikContext } from "formik"
import { BaseSyntheticEvent } from "react"
import { InputMask, MaskType, MaskConfigTypes, configOptions } from "../../../helpers/Mask"

interface Interface {
    label: string
    type: string
    mask: MaskType
    maskConfig?: MaskConfigTypes
    inputMode?: string
    onChange?: (value: string) => void
    name: string
    inputStyle?: InputProps
}

const Input = ({ label, type, mask, maskConfig, name, inputStyle, onChange, inputMode }: Interface) => {
    const { setFieldValue } = useFormikContext()

    function handleChange(e: BaseSyntheticEvent) {
        const config = configOptions[maskConfig ?? "default"]
        const value = InputMask[mask](e.currentTarget.value, config)
        setFieldValue(e.currentTarget.name, value)
        return value
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
                    const value = handleChange(e);
                    onChange?.(value)
                }}
                onKeyDown={handleChange}
            />
            <LabelStyle htmlFor={name}> {label} </LabelStyle>
        </InputSpanStyle>
    )
}

export default Input