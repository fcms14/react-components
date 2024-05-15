import { IconType } from "react-icons"

export interface ColorInterface {
    header: ElementsInterface,
    main: ElementsInterface,
    button: ButtonInterface,
}

interface ElementsInterface {
    fill: string,
    font: string,
    icon: string,
    stroke: string,
    title: string,
}

interface ButtonInterface {
    active: string,
    inactive: string,
    font: string,
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
    caption: SubSizeInterface,
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
    alignItems?: string,
    gap?: string,
    flexDirection?: string,
    justifyContent?: string,
}

export interface FontProps {
    size?: 'smaller' | 'small' | 'default' | 'big' | 'bigger' | 'biggest',
    parent?: 'header' | 'main',
    element?: 'title' | 'font',
    color?: string,
    cursor?: string,
}

export interface CaptionProps {
    size?: 'small' | 'default' | 'big',
    parent?: 'header' | 'main',
    element?: 'title' | 'font',
    color?: string,
}

export interface IconProps {
    cursor: string,
    rounded?: boolean,
    applyPadding?: boolean,
    loading?: boolean,
    topRight?: boolean,
}

export interface IconComponentInterface {
    icon: IconType,
    onClick?: () => void,
    width?: number,
    color?: string,
    rounded?: boolean,
    applyPadding?: boolean,
    loading?: boolean,
    topRight?: boolean,
}

export interface RowProps {
    justifyContent?: string
    position?: string
    top?: string
    backgroundColor?: string
    borderBottom?: string
    boxShadow?: string
    marginBottom?: string
    flexDirection?: string,
    alignItems?: string,
    borderRadius?: string,
}

export interface HeaderProps {
    justifyContent?: string,
    flexDirection?: string,
}

export interface ButtonProps {
    flexDirection?: string,
    width?: string,
    active?: boolean,
    isLoading?: boolean,
    secondary?: boolean,
    color?: string,
    type?: "button" | "submit" | "reset" | undefined,
}

export interface ToggleSpanProps {
    justifyContent?: string,
    flexDirection?: string,
}

export interface ToasterProps {
    type: "success" | "alert" | "error",
}

export interface NotificationInterface {
    active: boolean,
    text: string,
    subtitle: string,
    caption?: string
    toasterStyle: ToasterProps,
}

export interface NotificationCardInterface extends NotificationInterface {
    index: number,
}

export interface ToasterInterface {
    show: boolean,
    timeoutId: number,
    notifications: NotificationInterface[]
}

export interface ColorByType {
    success: string,
    error: string,
    alert: string,
    info: string,
}
export interface InputProps {
}