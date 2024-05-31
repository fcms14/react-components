import { Header } from "../../organisms/Header"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import SplashScreenStyle from "./SplashScreenStyle"
import { theme } from "../../../providers/theme"
import { Row } from "../../molecules/Row"
import GuestTemplate from "../../../templates/GuestTemplate"

interface Interface {
  showHeader?: boolean
}

const SplashScreen = ({ showHeader = true }: Interface) => {
  return (
    <GuestTemplate>
      <>{showHeader && <Header.Guest />}</>
      <main>
        <SplashScreenStyle>
          <Row.Root>
            <Row.Section sectionStyle={{ gap: theme.gap }}>
              <Row.Icon icon={AiOutlineLoading3Quarters} width={Number(theme.fontsizes.title.biggest.match(/\d+/))} isLoading />
              <Row.Title>Carregando...</Row.Title>
            </Row.Section>
          </Row.Root>
        </SplashScreenStyle>
      </main>
    </GuestTemplate>
  )
}

export default SplashScreen