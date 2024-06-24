import { Button } from "../../organisms/Button";
import { ButtonDefaultInterface } from "../../organisms/Button/default";
import Text from "../Text"
import Title from "../Title"
import ModAlertStyle, { BlurPage } from "./ModAlertStyle"

export interface ModAlertInterface {
  title: string
  text: string
  buttons: ButtonDefaultInterface[]
  onClick: () => void
}

const ModAlert = ({ title, text, buttons, onClick }: ModAlertInterface) => {
  return (
    <BlurPage zIndex={4} onClick={onClick}>
      <ModAlertStyle onClick={(e) => e.stopPropagation()}>
        <header>
          <Title> {title} </Title>
        </header>
        <main>
          <Text> <pre>{text}</pre></Text>
        </main>
        <footer>
          <Button.Panel buttons={buttons} />
        </footer>
      </ModAlertStyle>
    </BlurPage>
  )
}

export default ModAlert