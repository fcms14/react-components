import { IconType } from "react-icons";
import { ButtonProps } from "../../../interfaces"
import { Button } from "../../molecules/Button"
import { getColor, getIconSize } from "./helper"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Interface {
  icon: IconType,
  iconSize?: number,
  onClick: () => void
  buttonStyle?: ButtonProps
}

const ButtonOnlyIcon = ({ icon, iconSize, onClick, buttonStyle }: Interface) => {
  const _iconSize = getIconSize(iconSize)
  const color = getColor(buttonStyle?.secondary, buttonStyle?.active)

  return (
    <Button.Root buttonStyle={{ width: "fit-content", ...buttonStyle }} onClick={onClick}>
      <Button.Icon color={color} loading={buttonStyle?.loading} width={_iconSize} icon={buttonStyle?.loading ? AiOutlineLoading3Quarters : icon}/>
    </Button.Root>
  )
}

export default ButtonOnlyIcon