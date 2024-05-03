import { ButtonProps } from "../../../interfaces"
import { Button } from "../../molecules/Button"
import { getColor, getIconSize } from "./helper"

interface Interface {
  text: string,
  onClick: () => void
  loading: boolean
  active?: boolean,
  secondary?: boolean,
  iconSize?: number,
  icon: string,
  iconBefore?: boolean
}

const ButtonWithIcon = ({ text, icon, iconSize, onClick, iconBefore, active, secondary, loading }: Interface) => {
  const _iconSize = getIconSize(iconSize)
  const color = getColor(secondary, active)
  const buttonStyle: ButtonProps | undefined = iconBefore ? { flexDirection: "row-reverse", active: active, secondary: secondary } : { active: active, secondary: secondary }

  return (
    <Button.Root buttonStyle={{ ...buttonStyle }} onClick={onClick}>
      <Button.Title titleStyle={{ color: color }} > {text} </Button.Title>
      <Button.Icon color={color} loading={loading} width={_iconSize} icon={loading ? "Loading3Quarters" : icon} />
    </Button.Root>
  )
}

export default ButtonWithIcon