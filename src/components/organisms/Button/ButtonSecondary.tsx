import { Button } from "../../molecules/Button"

interface Interface {
  text: string,
  onClick: () => void,
  color: string
}

const ButtonSecondary = ({ text, onClick, color}: Interface) => {
  const secondary = true;
  return (
    <Button.Root buttonStyle={{ secondary, color}} onClick={onClick}>
      <Button.Subtitle size="big" color={color}> {text} </Button.Subtitle >
    </Button.Root>
  )
}

export default ButtonSecondary 