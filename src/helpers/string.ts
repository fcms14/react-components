const captilize  = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

const pascalcase = (str: string): string => str.replace('.svg','')
                                                .split('-')
                                                .map(str => captilize(str))
                                                .join('')

const randomstr  = (): string => Math.random().toString(36).slice(2, 7)

const idempotencyKey = (): string => {
    let output = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 200; i++ ) {
        output += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return output;
}

const normalize = (str: string): string => str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()

const mask = (str: string, num: number, mask = '*'): string => `${str}`.slice(-num)
    .padStart(`${str}`.length, mask);

const maskDoc = (str: string, num: number, mask = '*'): string => 
    str.slice(0, num) + mask.repeat(str.length - (num * 2)) + str.slice(str.length - num);

const maskCreditCardNumber = (number:string) => {
    let pieces = number.match(/.{1,4}/g)
    return pieces?.map((piece, idx) => {
        if (idx === 0 || idx === 3) {
            return piece
        } else {
            return mask(piece, -4)
        }
    }).join(' ')
}

const objectToString = (data: any) => {
    const keys = Object.keys(data);
    let text = ' ';

    for (let key of keys) {
        const chieldText = typeof data[key] == "object" ? objectToString(data[key]) : null;
        text += `${key}: ${chieldText ?? data[key]} `;
    }
    text += '\n'

    return text;
}

export { maskDoc, normalize, pascalcase, captilize, randomstr, idempotencyKey, mask, maskCreditCardNumber, objectToString }