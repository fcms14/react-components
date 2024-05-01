export interface PageTitleInterface {
    title: string,
    titleAlign?: string,
    description?: string,
    steps?: number,
    current?: number,
    backIcon?: boolean,
    onClick?: () => void,
    onAction?: () => void,
    actionIcon?: string,
    closeIcon?: boolean
}
