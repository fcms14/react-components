import InputStyle, { ErrorSpanStyle, InputSpanStyle, LabelStyle } from "./InputStyle"
import { InputProps } from "../../../interfaces"
import { useFormikContext } from "formik"
import { BaseSyntheticEvent } from "react"
import { InputMask, MaskType, MaskConfigTypes, configOptions } from "../../../helpers/Mask"
import Subtext from "../Subtext"
import { theme } from "../../../providers/theme"

interface Interface {
    label: string
    type: string
    mask?: MaskType
    maskConfig?: MaskConfigTypes
    inputMode?: string
    onChange?: (value: string) => void
    name: string
    inputStyle?: InputProps
    error?: string | boolean
}

const Input = ({ error, label, type, mask, maskConfig, name, inputStyle, onChange, inputMode }: Interface) => {
    const { setFieldValue } = useFormikContext()

    function handleChange(e: BaseSyntheticEvent, mask: MaskType) {
        if (!mask) return

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
                    const value = mask ? handleChange(e, mask) : e.currentTarget.value;
                    onChange?.(value)
                }}
                onKeyDown={mask ? handleChange : undefined}
            />
            <LabelStyle htmlFor={name}> {label} </LabelStyle>
            {error && <ErrorSpanStyle> <Subtext size="big" color={theme.colorByType.info}>{error}</Subtext> </ErrorSpanStyle>}
        </InputSpanStyle>
    )
}

export default Input