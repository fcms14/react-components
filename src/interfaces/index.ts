export interface ColorInterface {
    header: ElementsInterface,
    main: ElementsInterface,
}

interface ElementsInterface {
    title: string,
    font: string,
    icon: string,
    fill: string,
    stroke: string,
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