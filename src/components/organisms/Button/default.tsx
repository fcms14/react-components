import { Button } from "../../molecules/Button"
import { getColor, getIconSize } from "./helper"

interface Interface {
  text: string,
  onClick: () => void,
  loading: boolean
  active?: boolean,
  secondary?: boolean,
  iconSize?: number,
  buttonColor?: string,
}

const ButtonDefault = ({ text, onClick, active, loading, secondary, iconSize, buttonColor }: Interface) => {
  const _iconSize = getIconSize(iconSize)
  const color = getColor(secondary, active)

  return (
    <Button.Root buttonStyle={{ active: active, secondary: secondary, color: buttonColor }} onClick={onClick}>
      <Button.Title titleStyle={{ color: color }}> {text} </Button.Title>
      {loading && <Button.Icon color={color} loading={loading} width={_iconSize} icon="Loading3Quarters" />}
    </Button.Root>
  )
}

export default ButtonDefault