import { IconType } from "react-icons"
import { ElementType } from "../routes";

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
    subtext: SubSizeInterface,
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
    guest: string,
    icon: string,
}

export interface SectionProps {
    alignItems?: string,
    gap?: string,
    flexDirection?: string,
    justifyContent?: string,
    textalign?: string,
    borderBotom?: boolean,
}

export interface FontProps {
    size?: 'smaller' | 'small' | 'default' | 'big' | 'bigger' | 'biggest',
    parent?: 'header' | 'main',
    element?: 'title' | 'font',
    color?: string,
    cursor?: string,
}

export interface SubtextProps {
    size?: 'small' | 'default' | 'big',
    parent?: 'header' | 'main',
    element?: 'title' | 'font',
    color?: string,
}

export interface IconProps {
    cursor: string,
    rounded?: boolean,
    applyPadding?: boolean,
    isLoading?: boolean,
}

export interface IconComponentInterface {
    icon: IconType,
    onClick?: () => void,
    width?: number,
    color?: string,
    rounded?: boolean,
    applyPadding?: boolean,
    isLoading?: boolean,
}

export interface RowProps {
    justifyContent?: string,
    position?: string,
    top?: string,
    backgroundColor?: string,
    borderBottom?: string,
    boxShadow?: string,
    marginBottom?: string,
    flexDirection?: string,
    alignItems?: string,
    borderRadius?: string,
}

export interface HeaderProps {
    height?: string,
    justifyContent?: string,
    flexDirection?: string,
}

export interface ButtonProps {
    flexDirection?: string,
    width?: string,
    active?: boolean,
    isLoading?: boolean,
    secondary?: boolean,
    small?: boolean,
    color?: string,
    type?: "button" | "submit" | "reset" | undefined,
    whiteSpace?: string;
}

export interface CellProps {
    textAlign?: "center" | "right" | "left"
    color?: string
    cursor?: string
}

export interface TableProps {
    height?: string
}

export interface ToggleSpanProps {
    justifyContent?: string,
    flexDirection?: string,
}

export interface ShorcutProps {
    flexDirection?: string
    cursor?: string
}

export interface MenuProps {
    justifyContent?: string
    applyPadding?: boolean,
}

export interface MenuInterface {
    items: ShortcutInterface[]
    shortcutStyle?: ShorcutProps
    menuStyle?: MenuProps
}


export interface ShortcutInterface {
    text: string,
    icon: IconType,
    onClick?: () => void,
    width?: number,
    color?: string,
    shortcutStyle?: ShorcutProps
}

export interface ToasterProps {
    type: "success" | "alert" | "error",
}

export interface RoutesInterface {
    path: string,
    element: ElementType
}

export interface AlertInterface {
    show: boolean,
    title: string,
    text: string,
    buttons: ButtonDefaultInterface[]
}

export interface NotificationInterface {
    active: boolean,
    text: string,
    subtitle: string,
    subtext?: string,
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

export interface MenuRowInterface {
    title: string,
    text: string,
    iconSize?: number,
    icon: IconType,
}

export interface ButtonDefaultInterface {
    text: string,
    onClick?: () => void,
    iconSize?: number,
    buttonStyle?: ButtonProps
}

export interface RowCardInterface {
    text: string
    title: string
    icon: IconType
    onClick: () => void
}

export interface AvatarInterface {
    text: string
    onClick?: () => void
}

export interface ColorByType {
    success: string,
    error: string,
    alert: string,
    info: string,
}

export interface ColorDefault {
    buy: string,
    sell: string,
    error: string,
    info: string,
    white: string,
}

export enum Sort {
    asc = 'asc',
    desc = 'desc'
}
export interface InputProps {
}