import { ButtonDefaultInterface } from "../../../interfaces"
import { Button } from "../../molecules/Button"
import { getColor, getIconSize } from "./helper"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ButtonSmall = ({ text, onClick, iconSize, buttonStyle }: ButtonDefaultInterface) => {
  const _iconSize = getIconSize(iconSize)
  const color = getColor(buttonStyle?.secondary, buttonStyle?.active)

  return (
    <Button.Root buttonStyle={{ ...buttonStyle, small: true }} onClick={onClick}>
      <Button.Subtitle titleStyle={{ color: color }}> {text} </Button.Subtitle>
      {buttonStyle?.isLoading && <Button.Icon color={color} loading={buttonStyle.isLoading} width={_iconSize} icon={AiOutlineLoading3Quarters} />}
    </Button.Root>
  )
}

export default ButtonSmall