import InputStyle, { ErrorSpanStyle, InputSpanStyle, LabelStyle } from "./InputStyle"
import { useFormikContext } from "formik"
import { BaseSyntheticEvent, useState } from "react"
import { InputMask, MaskType, MaskConfigTypes, configOptions } from "../../../components/helpers/Mask"
import Subtext from "../Subtext"
import Icon, { IconComponentInterface } from "../Icon"
import { theme } from "../../../providers/theme"
import { MdRemoveRedEye } from "react-icons/md"
import { FaEyeSlash } from "react-icons/fa"
import { useTranslation } from "react-i18next"

export interface InputInterface {
    name: string
    label: string
    type: string
    mask?: MaskType
    maskConfig?: MaskConfigTypes
    inputMode?: string
    onBlur?: () => void
    onChange?: (value: string) => void
    onFocus?: () => void
    error?: string
    icon?: IconComponentInterface
    disabled?: boolean
}

const Input = ({ error, label, type, mask, maskConfig, name, onChange, onFocus, onBlur, inputMode, icon, disabled }: InputInterface) => {
    const { setFieldValue, setFieldTouched } = useFormikContext()
    const { t } = useTranslation()
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
                placeholder={label}
                id={name}
                name={name}
                type={(type === "password" && show) ? "text" : type}
                inputMode={inputMode}
                onBlur={onBlur}
                onFocus={onFocus}
                onKeyUp={(e: BaseSyntheticEvent) => {
                    const event = e as React.KeyboardEvent<HTMLInputElement>;
                    setFieldTouched(e.currentTarget.name)
                    if (event.code === "Backspace" || e.currentTarget.value === '') return
                    const value = mask ? handleChange(e, mask) : e.currentTarget.value;
                    onChange?.(value)
                }}
                onKeyDown={mask ? handleChange : undefined}
                disabled={disabled}
            />
            <LabelStyle htmlFor={name}> {label} </LabelStyle>
            {error && <ErrorSpanStyle> <Subtext size="big" color={theme.colorDefault.error}>{t(error ?? "")}</Subtext> </ErrorSpanStyle>}
            {(type === "password") && <Icon icon={!show ? FaEyeSlash : MdRemoveRedEye} onClick={() => toggleVisibility(!show)} />}
            {icon && <Icon {...icon} onClick={(e?: BaseSyntheticEvent) => {
                if (icon.onClick) {
                    e?.stopPropagation()
                    icon.onClick()
                }
            }} />}
        </InputSpanStyle>
    )
}

export default Input