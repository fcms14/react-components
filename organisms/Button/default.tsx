import { getColor, getIconSize } from "../../helpers/helper";
import { Button } from "../../molecules/Button"
import { ButtonProps } from "../../molecules/Button/ButtonStyle";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export interface ButtonDefaultInterface {
  text: string,
  onClick?: () => void,
  iconSize?: number,
  buttonStyle?: ButtonProps,
}

const ButtonDefault = ({ text, onClick, iconSize, buttonStyle }: ButtonDefaultInterface) => {
  const _iconSize = getIconSize(iconSize)
  const color = getColor(buttonStyle?.secondary, buttonStyle?.active)

  return (
    <Button.Root buttonStyle={{ ...buttonStyle }} onClick={onClick}>
      <Button.Title titleStyle={{ color: color }}> {text} </Button.Title>
      {buttonStyle?.isLoading && <Button.Icon color={color} isLoading={buttonStyle.isLoading} width={_iconSize} icon={AiOutlineLoading3Quarters} />}
    </Button.Root>
  )
}

export default ButtonDefault