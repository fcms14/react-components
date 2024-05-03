export interface ColorInterface {
    header: ElementsInterface,
    main: ElementsInterface,
}

interface ElementsInterface {
    fill: string,
    font: string,
    icon: string,
    stroke: string,
    title: string,
}

export interface FooterInterface {
    active: string,
    inactive: string,
    fill: string,
    stroke: string,
}

export interface FontSizeInterface {
    title: SizeInterface,
    subtitle: SizeInterface,
    text: SizeInterface,
    caption: SubSizeInterface
}

interface SizeInterface {
    smaller: string,
    small: string,
    default: string,
    big: string,
    bigger: string,
    biggest: string,
}

interface SubSizeInterface {
    small: string,
    default: string,
    big: string,
}

export interface PaddingInterface {
    header: string,
    main: string,
    icon: string,
}

export interface SectionProps {
    alignItems?: string
}

export interface FontProps {
    size?: 'smaller' | 'small' | 'default' | 'big' | 'bigger' | 'biggest'
    parent?: 'header' | 'main'
    element?: 'title' | 'font'
}

export interface CaptionProps {
    size?: 'small' | 'default' | 'big'
    parent?: 'header' | 'main'
    element?: 'title' | 'font'
}

export interface IconProps {
    cursor: string,
    rounded?: boolean,
    applyPadding?: boolean
}

export interface IconComponentInterface {
    icon: string,
    onClick?: () => void
    width?: number | any,
    color?: string,
    rounded?: boolean,
}

export interface RowProps {
    justifyContent?: string
    position?: string
    top?: string
    backgroundColor?: string
    borderBottom?: string
    boxShadow?: string
}

export interface HeaderProps {
    justifyContent?: string
}

export interface ButtonProps {
    flexDirection?: string
    width?: string
    active?: boolean
}

export interface ToggleSpanProps {
    justifyContent?: string
    flexDirection?: string
}