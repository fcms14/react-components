import { ColorByType, ColorDefault, ColorInterface, FontSizeInterface, FooterInterface, PaddingInterface } from "../interfaces"

interface ThemeInterface {
  colorDefault: ColorDefault,
  colorByType: ColorByType,
  colors: ColorInterface,
  fontsizes: FontSizeInterface,
  footer: FooterInterface
  gap: string
  padding: PaddingInterface
  radius: string
}

export const theme: ThemeInterface = {
  colorDefault: JSON.parse((import.meta.env.VITE_COLOR_DEFAULT).slice(1, -1).replace(/\*/g, '"')),
  colorByType: JSON.parse((import.meta.env.VITE_COLOR_BY_TYPE).slice(1, -1).replace(/\*/g, '"')),
  colors: JSON.parse((import.meta.env.VITE_COLORS).slice(1, -1).replace(/\*/g, '"')),
  fontsizes: JSON.parse((import.meta.env.VITE_FONTSIZES).slice(1, -1).replace(/\*/g, '"')),
  footer: JSON.parse((import.meta.env.VITE_FOOTER).slice(1, -1).replace(/\*/g, '"')),
  gap: import.meta.env.VITE_GAP,
  padding: JSON.parse((import.meta.env.VITE_PADDINGS).slice(1, -1).replace(/\*/g, '"')),
  radius: import.meta.env.VITE_RADIUS,
}