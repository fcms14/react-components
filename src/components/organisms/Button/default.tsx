import { ButtonProps } from "../../../interfaces"
import { Button } from "../../molecules/Button"
import { getColor, getIconSize } from "./helper"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Interface {
  text: string,
  onClick: () => void,
  iconSize?: number,
  buttonStyle?: ButtonProps
}

const ButtonDefault = ({ text, onClick, iconSize, buttonStyle }: Interface) => {
  const _iconSize = getIconSize(iconSize)
  const color = getColor(buttonStyle?.secondary, buttonStyle?.active)

  return (
    <Button.Root buttonStyle={{ ...buttonStyle }} onClick={onClick}>
      <Button.Title titleStyle={{ color: color }}> {text} </Button.Title>
      {buttonStyle?.loading && <Button.Icon color={color} loading={buttonStyle.loading} width={_iconSize} icon={AiOutlineLoading3Quarters} />}
    </Button.Root>
  )
}

export default ButtonDefault