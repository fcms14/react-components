import { ColorInterface, FontSizeInterface, FooterInterface, PaddingInterface } from "../interfaces"

interface ThemeInterface {
  fontsizes: FontSizeInterface,
  colors: ColorInterface,
  footer: FooterInterface
  padding: PaddingInterface
}

export const theme: ThemeInterface = {
  fontsizes: JSON.parse(import.meta.env.VITE_FONTSIZES),
  colors: JSON.parse(import.meta.env.VITE_COLORS),
  footer: JSON.parse(import.meta.env.VITE_FOOTER),
  padding: JSON.parse(import.meta.env.VITE_PADDINGS),
}