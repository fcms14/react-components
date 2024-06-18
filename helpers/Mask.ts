export enum Decimal {
    BTC = 8,
    USDT = 4,
    BRL = 2,
    USD = 2,
    USDTBRL = 1,
}

export enum Fractions {
    USDTBRL = 1,
    DEFAULT = 2,
    BTCBRL = 8
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
    btcQuote: { style: undefined, currency: "BRL", minimumFractionDigits: Decimal.BTC, divisor: 100000000, },
    number: { currency: "BRL", minimumFractionDigits: Decimal.USDTBRL, divisor: 10 }
}

export const Parser = {
    intToFloat: (value: number | string): number => Number(value) / 100,
    unmasker: (value: string, replace: string = "R$"): number => Number(value.replace(replace, "").replaceAll('.', '').replace(',', '.')),
    unmaskerToInt: (value: string): number => Number(value.replace("R$", "").replace(/[^\w\s]/gi, '').replaceAll(' ', ''))
}

export const Mask = {
    currency: (value: number, decimal: Decimal = Decimal.BRL, code: string = "BRL"): string => {
        const options = { style: 'currency', currency: code, minimumFractionDigits: decimal }
        return new Intl.NumberFormat('pt-br', options).format(value)
    },
    dateTime: (value: Date) => {
        const date = new Date(value)
        const formatedDate = date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
        return formatedDate
    },
}

export const InputMask = {
    currency: (value: string, config: Config = configOptions.default): string => {
        const cleanValue = +value.replace(/\D+/g, '') / config.divisor
        const options = { ...config }
        return new Intl.NumberFormat('pt-br', options).format(cleanValue)
    },
    number: (value: string, config: Config = configOptions.default): string => (+value.replace(/\D+/g, '') / config.divisor).toFixed(config.minimumFractionDigits),
    name: (value: string): string => value
        .toLowerCase()
        .replace(/(^|\s)\S/g, match => match.toUpperCase())
        .replace(/\(.+?\)|\..+?\b/g, match => match.charAt(0) + match.charAt(1).toUpperCase() + match.slice(2))
    ,
    capitalize: (value: string): string => value.charAt(0).toUpperCase() + value.slice(1),
    cpf: (value: string): string => value
        .replace(/\D+/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1'),
    cnpj: (value: string): string => value
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    ,
    document: (value: string) => {
        if (value.length <= 14) {
            return InputMask.cpf(value)
        }
        return InputMask.cnpj(value)
    },
    phone: (value: string): string => value
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '($1)$2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(\d{5})-(\d)(\d{5})/, '$1-$2')
        .replace(/(-\d{5})\d+?$/, '$1')
    ,
    ddi: (value: string): string => '+' + value
        .replace(/\D+/g, '')
        .replace(/^(\d{4}).*$/, '$1')
    ,
    normalize: (value: string): string => value.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
}

export type MaskType = keyof typeof InputMask;

export type MaskConfigTypes = keyof typeof configOptions;