
import { ButtonProps } from "../../molecules/Button/ButtonStyle";
import { Button } from "../../molecules/Button"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { getColor, getIconSize } from "../../helpers/helper";
import { IconComponentInterface } from "../../atoms/Icon";

export interface ButtonOnlyIconInterface {
  icon: IconComponentInterface
  onClick: () => void
  buttonStyle?: ButtonProps
}

const ButtonOnlyIcon = ({ icon, onClick, buttonStyle }: ButtonOnlyIconInterface) => {
  const _iconSize = getIconSize(icon?.width)
  const color = getColor(buttonStyle?.secondary, buttonStyle?.active)

  return (
    <Button.Root buttonStyle={{ width: "fit-content", ...buttonStyle }} onClick={onClick}>
      <Button.Icon {...icon} color={color} isLoading={buttonStyle?.isLoading} width={_iconSize} icon={buttonStyle?.isLoading ? AiOutlineLoading3Quarters : icon?.icon}/>
    </Button.Root>
  )
}

export default ButtonOnlyIcon