import { ButtonInterface } from "./ButtonInterface"
import { useEffect, useState } from "react"
import ButtonStyle from "./ButtonStyle"
import Icon from "../Icon"
import DefaulTheme from "../../../providers/theme"
import { isMobile } from "react-device-detect"

const Button = (props: any) => {
    const ButtonContent = (props: ButtonInterface) => {
        const { icon, children, noText, quad, iconSize, isLoading, iconOnly, iconPosition } = props
        const sizeIcon = iconSize || 22
        const iconColor = props.iconColor || DefaulTheme.colors.WHITE
        const textColor = props.textColor
        const [buttonLayout, setButtonLayout] = useState('flex w-full')

        useEffect(() => {
            if (isMobile && quad) {
                setButtonLayout('flex w-full gap-2 flex-col text-center justify-center')
            }
        }, [])

        return (
            <div className={buttonLayout && (iconOnly && 'iconOnlyClass')}>
                {isLoading && <Icon icon="preloader" width={sizeIcon} color={iconColor} />}
                {(iconOnly || (icon && iconPosition == 'left' || iconPosition == null))}
                {/* {noText && <Text className="hidden md:block" size="sm" color={textColor}>{children}</Text>} */}
                {(!noText && !isLoading && !iconOnly) && <span color={textColor}> {children} </span>}
                {icon && iconPosition == 'right' && !iconOnly && <Icon width={sizeIcon} color={iconColor} icon={icon} />}
            </div>
        )
    }

    return (
        <ButtonStyle {...props} props={props} disabled={props.isLoading || props.disabled}>
            {ButtonContent(props)}
        </ButtonStyle>
    )
}

export default Button