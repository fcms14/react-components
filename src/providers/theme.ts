import { ColorInterface, FontSizeInterface, FooterInterface } from "../interfaces"

interface ThemeInterface {
  fontsizes: FontSizeInterface,
  colors: ColorInterface,
  footer: FooterInterface
}

export const theme: ThemeInterface = {
  fontsizes: JSON.parse(import.meta.env.VITE_FONTSIZES),
  colors: JSON.parse(import.meta.env.VITE_COLORS),
  footer: JSON.parse(import.meta.env.VITE_FOOTER),
}