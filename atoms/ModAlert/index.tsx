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
  preFormat?: boolean
}

const ModAlert = ({ title, text, buttons, onClick, preFormat }: ModAlertInterface) => {
  return (
    <BlurPage zIndex={4} onClick={onClick}>
      <ModAlertStyle onClick={(e) => e.stopPropagation()}>
        <header>
          <Title> {title} </Title>
        </header>
        <main>
          <Text>
            {preFormat
              ? <pre>{text}</pre>
              : <>{text}</>
            }
          </Text>
        </main>
        <footer>
          <Button.Panel buttons={buttons} />
        </footer>
      </ModAlertStyle>
    </BlurPage>
  )
}

export default ModAlert