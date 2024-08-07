import { AiOutlineLoading3Quarters } from "react-icons/ai"
import SuspenseStyle, { SuspenseStyleProps } from "./SuspenseStyle"
import { theme } from "../../../providers/theme"
import { Row } from "../../molecules/Row"

export interface Interface {
  suspenseStyle?: SuspenseStyleProps
}

const Suspense = ({ suspenseStyle }: Interface) => {
  return (
    <SuspenseStyle {...suspenseStyle}>
      <Row.Root>
        <Row.Section sectionStyle={{ gap: theme.gap }}>
          <Row.Icon icon={AiOutlineLoading3Quarters} width={Number(theme.fontsizes.title.biggest.match(/\d+/))} isLoading />
          <Row.Title>Carregando...</Row.Title>
        </Row.Section>
      </Row.Root>
    </SuspenseStyle>
  )
}

export default Suspense