export const Math = {
    multiply: (x: number, y: number): number => {
        return (x * y) / 100
    },
    divide: (x: number, y: number): number => {
        return (x * y) / 100
    },
}

export type MathType = keyof typeof Math;

export const calc = (operation: MathType, x: number, y?: number): number => {
    if (!y) {
        return 0
    }
    return Math[operation](x, y)
}
