import { Button } from ".";
import Nav from "../../atoms/Nav";
import { ButtonDefaultInterface } from "./default";

export interface ButtonPanelInterface {
  buttons: ButtonDefaultInterface[]
}

const ButtonPanel = ({ buttons }: ButtonPanelInterface) => {
  return (
    <Nav>
      {buttons.map((button, index: number) =>
        <Button.Small key={index} {...button} buttonStyle={{ ...button.buttonStyle, secondary: button.buttonStyle?.secondary ?? true, whiteSpace: "nowrap" }} />
      )}
    </Nav>
  )
}
export default ButtonPanel 
