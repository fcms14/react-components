import { ColorInterface, FontSizeInterface } from "../interfaces"

export interface ThemeInterface {
  fontsizes: FontSizeInterface,
  colors: ColorInterface
}

export const theme: ThemeInterface = {
  fontsizes: JSON.parse(import.meta.env.VITE_FONTSIZES),
  colors: JSON.parse(import.meta.env.VITE_COLORS)
}