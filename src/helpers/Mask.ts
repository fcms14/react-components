export enum Decimal {
    BTC = 8,
    USDT = 4,
    BRL = 2,
    USD = 2,
}

interface Config {
    style?: string,
    currency: string,
    minimumFractionDigits: Decimal,
    divisor: number,
}

export const configOptions = {
    default: { style: "currency", currency: "BRL", minimumFractionDigits: Decimal.BRL, divisor: 100, },
    usdCurrency: { style: "currency", currency: "USD", minimumFractionDigits: Decimal.USD, divisor: 100, },
    usdQuote: { style: "currency", currency: "BRL", minimumFractionDigits: Decimal.USDT, divisor: 10000, },
    btcQuote: { style: undefined, currency: "BRL", minimumFractionDigits: Decimal.BTC, divisor: 100000000, }
}

export const Parser = {    
    intToFloat: (value: number | string): number => Number(value) / 100,
    unmasker: (value: string, replace: string = "R$"): number => Number(value.replace(replace, "").replaceAll('.', '').replace(',', '.')),
}

export const Mask = {
    currency: (value: number, decimal: Decimal = Decimal.BRL, code: string = "BRL"): string => {
        const options = { style: 'currency', currency: code, minimumFractionDigits: decimal }
        return new Intl.NumberFormat('pt-br', options).format(value)
    }
}

export const InputMask = {
    currency: (value: string, config: Config = configOptions.default): string => {
        const cleanValue = +value.replace(/\D+/g, '') / config.divisor
        const options = { ...config }
        return new Intl.NumberFormat('pt-br', options).format(cleanValue)
    }
}

export type MaskType = keyof typeof InputMask;

export type MaskConfigTypes = keyof typeof configOptions;