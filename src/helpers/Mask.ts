export const Mask = {
    currencyBrl: (value: string, decimals?: number, divisor?: number): string => {
        const cleanValue = +value.replace(/\D+/g, '')
        const options = { style: 'currency', currency: 'BRL', minimumFractionDigits: decimals ?? 2 }
        return new Intl.NumberFormat('pt-br', options).format(cleanValue / (divisor ?? 100))
    },
    currencyTether: (value: string): string => {
        const cleanValue = +value.replace(/\D+/g, '')
        const options = { style: 'currency', currency: 'USD' }
        return new Intl.NumberFormat('pt-br', options).format(cleanValue / 100)
    },
    unmaskAmount: (value: string): number => Number(value.replace("R$", "").replace(/[^\w\s]/gi, '').replaceAll(' ', '')),
    unmaskAmountTether: (value: string): number => Number(value.replace("US$", "").replace(/[^\w\s]/gi, '').replaceAll(' ', '')),
}

export const Parser = {
    BTCBRL: {
        currency: (value: string) => Mask.currencyBrl(Number(value).toFixed(2)),
        quantity: (value: string) => Number(value).toFixed(6)
    },
    BTCUSDT: {
        currency: (value: string) => Mask.currencyTether(Number(value).toFixed(2)),
        quantity: (value: string) => Number(value).toFixed(6)
    },
    USDTBRL: {
        currency: (value: string) => Mask.currencyBrl(Number(value).toFixed(4), 4, 10000),
        quantity: (value: string) => Mask.currencyTether(Number(value).toFixed(2))
    },
}

export type MaskType = keyof typeof Mask;

export type ParserType = keyof typeof Parser;