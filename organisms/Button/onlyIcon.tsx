import { IconType } from "react-icons";
import { ButtonProps } from "../../molecules/Button/ButtonStyle";
import { Button } from "../../molecules/Button"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { getColor, getIconSize } from "../../helpers/helper";

export interface ButtonOnlyIconInterface {
  icon: IconType,
  iconSize?: number,
  onClick: () => void
  buttonStyle?: ButtonProps
}

const ButtonOnlyIcon = ({ icon, iconSize, onClick, buttonStyle }: ButtonOnlyIconInterface) => {
  const _iconSize = getIconSize(iconSize)
  const color = getColor(buttonStyle?.secondary, buttonStyle?.active)

  return (
    <Button.Root buttonStyle={{ width: "fit-content", ...buttonStyle }} onClick={onClick}>
      <Button.Icon color={color} isLoading={buttonStyle?.isLoading} width={_iconSize} icon={buttonStyle?.isLoading ? AiOutlineLoading3Quarters : icon}/>
    </Button.Root>
  )
}

export default ButtonOnlyIcon