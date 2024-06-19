import { ButtonDefaultInterface } from "./default";
import { Button } from "../../molecules/Button"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { getColor, getIconSize } from "../../helpers/helper";
import { IconType } from "react-icons";

interface Interface extends ButtonDefaultInterface {
  icon?: IconType,
}

const ButtonSmall = ({ text, onClick, iconSize, buttonStyle, icon }: Interface) => {
  const _iconSize = getIconSize(iconSize)
  const color = getColor(buttonStyle?.secondary, buttonStyle?.active)

  return (
    <Button.Root buttonStyle={{ ...buttonStyle, small: true }} onClick={onClick}>
      <Button.Subtitle titleStyle={{ color: color }}> {text} </Button.Subtitle>
      {(buttonStyle?.isLoading || icon) &&
        <Button.Icon
          color={color}
          isLoading={buttonStyle?.isLoading}
          width={_iconSize}
          icon={(buttonStyle?.isLoading || !icon) ? AiOutlineLoading3Quarters : icon}
        />
      }
    </Button.Root>
  )
}

export default ButtonSmall