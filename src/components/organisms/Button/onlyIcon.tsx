import { Button } from "../../molecules/Button"
import { getColor, getIconSize } from "./helper"

interface Interface {
  onClick: () => void
  loading: boolean
  active?: boolean,
  secondary?: boolean,
  iconSize?: number,
  icon: string,
}

const ButtonOnlyIcon = ({ icon, iconSize, onClick, active, secondary, loading }: Interface) => {
  const _iconSize = getIconSize(iconSize)
  const color = getColor(secondary, active)

  return (
    <Button.Root buttonStyle={{ width: "fit-content", active: active, secondary: secondary }} onClick={onClick}>
      <Button.Icon color={color} loading={loading} width={_iconSize} icon={loading ? "Loading3Quarters" : icon} />
    </Button.Root>
  )
}

export default ButtonOnlyIcon