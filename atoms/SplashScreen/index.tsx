import { Header } from "../../organisms/Header"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import SplashScreenStyle from "./SplashScreenStyle"
import { theme } from "../../../providers/theme"
import { Row } from "../../molecules/Row"

export interface SplashScreenInterface {
  showHeader?: boolean
}

const SplashScreen = ({ showHeader = true }: SplashScreenInterface) => {
  return (
    <>
      {showHeader && <Header.Guest />}
      <SplashScreenStyle>
        <Row.Root>
          <Row.Section sectionStyle={{ gap: theme.gap }}>
            <Row.Icon icon={AiOutlineLoading3Quarters} width={Number(theme.fontsizes.title.biggest.match(/\d+/))} isLoading />
            <Row.Title>Carregando...</Row.Title>
          </Row.Section>
        </Row.Root>
      </SplashScreenStyle>
    </>
  )
}

export default SplashScreen