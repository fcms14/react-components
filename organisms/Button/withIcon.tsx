import { ButtonProps } from "../../molecules/Button/ButtonStyle";
import { Button } from "../../molecules/Button"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { getColor, getIconSize } from "../../helpers/helper";
import { IconComponentInterface } from "../../atoms/Icon";

export interface ButtonWithIconInterface {
  text: string,
  icon: IconComponentInterface,
  onClick: () => void
  buttonStyle?: ButtonProps
  iconBefore?: boolean
}

const ButtonWithIcon = ({ text, icon, onClick, iconBefore, buttonStyle }: ButtonWithIconInterface) => {
  const _iconSize = getIconSize(icon.width)
  const color = getColor(buttonStyle?.secondary, buttonStyle?.active)
  const _buttonStyle: ButtonProps = { flexDirection: `${iconBefore ? "row-reverse" : undefined}`, ...buttonStyle }

  return (
    <Button.Root buttonStyle={_buttonStyle} onClick={onClick}>
      <Button.Title titleStyle={{ color: color }}> {text} </Button.Title>
      <Button.Icon {...icon} color={color} isLoading={buttonStyle?.isLoading} width={_iconSize} icon={buttonStyle?.isLoading ? AiOutlineLoading3Quarters : icon?.icon} />
    </Button.Root>
  )
}

export default ButtonWithIcon