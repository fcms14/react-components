import * as Yup from "yup"

const endsWithZero = Yup.string().test(
    'ends-with-zero',
    'O valor precisa terminar com 0',
    (value) => {
        if (!value) return false;
        return /0$/.test(value);
    }
);

const notZero = Yup.string().test("not-zero", "O valor não pode ser igual a R$ 0,00", (value) => value !== 'R$ 0,00')

const notZeroAndEndsWithZero = Yup.string().test("not-zero", "O valor não pode ser igual a R$ 0,0000", (value) => value !== 'R$ 0,0000').test(
    'ends-with-zero',
    'O valor precisa terminar com 0',
    (value) => {
        if (!value) return false;
        return /0$/.test(value);
    }
);

const greaterThanZero = Yup.string().test(
    "greater-than-zero",
    "O valor precisa ser maior que R$ 0,00",
    (value) => {
        if (!value) return false
        parseFloat(value.replace(/[^0-9,.-]+/g, '').replace(',', '.')) > 0
    }
);

export const ExchangeOrderValidator = Yup.object().shape({
    limit: notZeroAndEndsWithZero,
    total: notZero,
    quantity: endsWithZero,
})