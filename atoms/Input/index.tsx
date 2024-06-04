import InputStyle, { ErrorSpanStyle, InputProps, InputSpanStyle, LabelStyle } from "./InputStyle"
import { useFormikContext } from "formik"
import { BaseSyntheticEvent, useState } from "react"
import { InputMask, MaskType, MaskConfigTypes, configOptions } from "../../../components/helpers/Mask"
import Subtext from "../Subtext"
import Icon, { IconComponentInterface } from "../Icon"
import { theme } from "../../../providers/theme"
import { MdRemoveRedEye } from "react-icons/md"
import { FaEyeSlash } from "react-icons/fa"

export interface InputInterface {
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

const Input = ({ error, label, type, mask, maskConfig, name, inputStyle, onChange, onFocus, inputMode, icon }: InputInterface) => {
    const { setFieldValue } = useFormikContext()
    const [show, toggleVisibility] = useState<boolean>(false)

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
                type={(type === "password" && show) ? "text" : type}
                inputMode={inputMode}
                onFocus={onFocus}
                onKeyUp={(e: BaseSyntheticEvent) => {
                    const value = mask ? handleChange(e, mask) : e.currentTarget.value;
                    onChange?.(value)
                }}
                onKeyDown={mask ? handleChange : undefined}
            />
            <LabelStyle htmlFor={name}> {label} </LabelStyle>
            {error && <ErrorSpanStyle> <Subtext size="big" color={theme.colorDefault.error}>{error}</Subtext> </ErrorSpanStyle>}
            {(type === "password") && <Icon icon={!show ? FaEyeSlash : MdRemoveRedEye} onClick={() => toggleVisibility(!show)} />}
            {icon && <Icon {...icon} />}
        </InputSpanStyle>
    )
}

export default Input