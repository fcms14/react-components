import InputStyle, { ErrorSpanStyle, InputSpanStyle, LabelStyle } from "./InputStyle"
import { IconComponentInterface, InputProps } from "../../../interfaces"
import { useFormikContext } from "formik"
import { BaseSyntheticEvent } from "react"
import { InputMask, MaskType, MaskConfigTypes, configOptions } from "../../../helpers/Mask"
import Subtext from "../Subtext"
import Icon from "../Icon"

interface Interface {
    name: string
    label: string
    type: string
    mask?: MaskType
    maskConfig?: MaskConfigTypes
    inputMode?: string
    onChange?: (value: string) => void
    onFocus?: () => void
    inputStyle?: InputProps
    error?: string | boolean
    icon?: IconComponentInterface
}

const Input = ({ error, label, type, mask, maskConfig, name, inputStyle, onChange, onFocus, inputMode, icon }: Interface) => {
    const { setFieldValue } = useFormikContext()

    function handleChange(e: BaseSyntheticEvent, mask: MaskType) {
        if (!mask) return

        const config = configOptions[maskConfig ?? "default"]
        const value = InputMask[mask](e.currentTarget.value, config)
        setFieldValue(e.currentTarget.name, value)
        return value
    }

    return (
        <InputSpanStyle onClick={onFocus}>
            <InputStyle
                {...inputStyle}
                placeholder={label}
                id={name}
                name={name}
                type={type}
                inputMode={inputMode}
                onFocus={onFocus}
                onKeyUp={(e: BaseSyntheticEvent) => {
                    const value = mask ? handleChange(e, mask) : e.currentTarget.value;
                    onChange?.(value)
                }}
                onKeyDown={mask ? handleChange : undefined}
            />
            <LabelStyle htmlFor={name}> {label} </LabelStyle>
            {error && <ErrorSpanStyle> <Subtext size="big" color={"#FF0000"}>{error}</Subtext> </ErrorSpanStyle>}
            {icon && <Icon {...icon} />}
        </InputSpanStyle>
    )
}

export default Input