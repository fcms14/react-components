import { Button } from ".";
import { ButtonDefaultInterface } from "../../../interfaces";
import Nav from "../../atoms/Nav";

interface Interface {
  buttons: ButtonDefaultInterface[]
}

const ButtonPanel = ({ buttons }: Interface) => {
  return (
    <Nav>
      {buttons.map((button, index: number) =>
        <Button.Small key={index} {...button} buttonStyle={{ ...button.buttonStyle, secondary: true, whiteSpace: "nowrap" }} />
      )}
    </Nav>
  )
}
export default ButtonPanel 
