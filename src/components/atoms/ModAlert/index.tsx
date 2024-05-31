import { dispatchHideAlerts } from "../../../features/alert/alertDispatcher";
import { ButtonDefaultInterface } from "../../../interfaces";
import { Button } from "../../organisms/Button";
import Text from "../Text"
import Title from "../Title"
import ModAlertStyle, { BlurPage } from "./ModAlertStyle"

interface Interface {
  title: string
  text: string
  buttons: ButtonDefaultInterface[]
}

const ModAlert = ({ title, text, buttons }: Interface) => {
  return (
    <BlurPage onClick={dispatchHideAlerts}>
      <ModAlertStyle>
        <header>
          <Title> {title} </Title>
        </header>
        <main>
          <Text> {text}</Text>
        </main>
        <footer>
          <Button.Panel buttons={buttons} />
        </footer>
      </ModAlertStyle>
    </BlurPage>
  )
}

export default ModAlert