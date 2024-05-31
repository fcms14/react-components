import * as Yup from "yup"

const endsWithZero = Yup.string().test(
    'ends-with-zero',
    'O valor precisa terminar com 0',
    (value) => {
        if (!value) return true
        return /0$/.test(value)
    }
)

const notZeroCurrency = Yup.string().test(
    "not-zero-currency",
    "O valor não pode ser igual a R$ 0,00",
    (value) => value !== 'R$ 0,00')

const notZero = Yup.string().test(
    "not-zero",
    "O valor não pode ser igual a 0",
    (value) => {
        if (!value) return false
        return +value.replace(/\D+/g, '') !== 0
    })

const notZeroAndEndsWithZero = Yup.string().test(
    "not-zero",
    "O valor não pode ser igual a R$ 0,0000",
    (value) => value !== 'R$ 0,0000')
    .test(
        'ends-with-zero',
        'O valor precisa terminar com 0',
        (value) => {
            if (!value) return true
            return /0$/.test(value)
        }
    )

const greaterThanZero = Yup.string().test(
    "greater-than-zero",
    "O valor precisa ser maior que R$ 0,00",
    (value) => {
        if (!value) return true
        return parseFloat(value.replace(/[^0-9,.-]+/g, '').replace(',', '.')) > 0
    }
)

const required = Yup.string().required("Este campo é obrigatório")

const requiredAlert = Yup.string().required("*obrigatório")

const isEmail = Yup.string().email("Digite um e-mail válido")

const isValidPhone = Yup.string().test(
    "isValidPhone",
    "Digite um número de celular válido",
    (value) => {
        if (!value) return false
        return value.replace(/\D+/g, '').length === 11
    }
)

export const ExchangeOrderValidator = Yup.object().shape({
    limit: notZeroAndEndsWithZero,
    total: notZeroCurrency,
    quantity: notZero,
})

export const SignInValidator = Yup.object().shape({
    login: required,
    password: required,
})

export const SignUpValidator = Yup.object().shape({
    name: required,
    cpf: required,
    email: isEmail,
    ddi: requiredAlert,
    phone: isValidPhone,
    birthday: required,
    login: required,
    password: required,
})