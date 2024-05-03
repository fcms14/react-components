import { ColorInterface, FontSizeInterface, FooterInterface, PaddingInterface } from "../interfaces"

interface ThemeInterface {
  fontsizes: FontSizeInterface,
  colors: ColorInterface,
  footer: FooterInterface
  padding: PaddingInterface
  gap: string
  radius: string
}

export const theme: ThemeInterface = {
  fontsizes: JSON.parse((import.meta.env.VITE_FONTSIZES).slice(1, -1).replace(/\*/g, '"')),
  colors: JSON.parse((import.meta.env.VITE_COLORS).slice(1, -1).replace(/\*/g, '"')),
  footer: JSON.parse((import.meta.env.VITE_FOOTER).slice(1, -1).replace(/\*/g, '"')),
  padding: JSON.parse((import.meta.env.VITE_PADDINGS).slice(1, -1).replace(/\*/g, '"')),
  gap: import.meta.env.VITE_GAP,
  radius: import.meta.env.VITE_RADIUS,
}