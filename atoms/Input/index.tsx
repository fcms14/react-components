import InputStyle, { ErrorSpanStyle, InputProps, InputSpanStyle, LabelStyle } from "./InputStyle"
import { useFormikContext } from "formik"
import { BaseSyntheticEvent, useEffect, useState } from "react"
import { InputMask, MaskType, MaskConfigTypes, configOptions } from "../../../components/helpers/Mask"
import Subtext from "../Subtext"
import Icon, { IconComponentInterface } from "../Icon"
import { theme } from "../../../providers/theme"
import { MdRemoveRedEye } from "react-icons/md"
import { FaEyeSlash } from "react-icons/fa"
import { useTranslation } from "react-i18next"
import PasswordValidator from "../../molecules/PasswordValidator"

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
    error?: string
    icon?: IconComponentInterface
    disabled?: boolean
    validator?: boolean
}

const Input = ({ error, label, type, mask, maskConfig, name, inputStyle, onChange, onFocus, inputMode, icon, disabled, validator }: InputInterface) => {
    const { setFieldValue } = useFormikContext()
    const { t } = useTranslation()
    const [show, toggleVisibility] = useState<boolean>(false)
    const [password, setPassword] = useState('');

    function handleChange(e: BaseSyntheticEvent, mask: MaskType) {
        if (!mask) return
        const config = configOptions[maskConfig ?? "default"]
        const value = InputMask[mask](e.currentTarget.value, config)
        setPassword(value)
        setFieldValue(e.currentTarget.name, value)
        return value
    }

    return (
        <>
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
                        const event = e as React.KeyboardEvent<HTMLInputElement>;
                        
                        if (event.code === "Backspace" && !validator) return
                        const value = mask ? handleChange(e, mask) : e.currentTarget.value;
                        setPassword(value); 
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
            {type === 'password' && validator && <PasswordValidator  password={password} />}
        </>
    )
}

export default Input