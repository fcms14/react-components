import { IconType } from "react-icons";
import { ButtonProps } from "../../../interfaces"
import { Button } from "../../molecules/Button"
import { getColor, getIconSize } from "./helper"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Interface {
  text: string,
  icon: IconType,
  iconSize?: number,
  onClick: () => void
  buttonStyle?: ButtonProps
  iconBefore?: boolean
}

const ButtonWithIcon = ({ text, icon, iconSize, onClick, iconBefore, buttonStyle }: Interface) => {
  const _iconSize = getIconSize(iconSize)
  const color = getColor(buttonStyle?.secondary, buttonStyle?.active)
  const _buttonStyle: ButtonProps = { flexDirection: `${iconBefore ? "row-reverse" : undefined}`, ...buttonStyle }

  return (
    <Button.Root buttonStyle={_buttonStyle} onClick={onClick}>
      <Button.Title titleStyle={{ color: color }}> {text} </Button.Title>
      <Button.Icon color={color} isLoading={buttonStyle?.isLoading} width={_iconSize} icon={buttonStyle?.isLoading ? AiOutlineLoading3Quarters : icon} />
    </Button.Root>
  )
}

export default ButtonWithIcon