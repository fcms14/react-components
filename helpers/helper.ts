import { theme } from "../../providers/theme"

export const getColor = (secondary?: boolean, active?: boolean) => {
    return secondary
        ? active
            ? theme.colors.button.active
            : theme.colors.button.inactive
        : theme.colors.button.font
}

export const getIconSize = (iconSize?: number) => {
    return iconSize ?? Number(theme.fontsizes.title.default.match(/\d+/)) * 1.2
}

export const getSize = (size: string) => {
    return Number(size.match(/\d+/))
}