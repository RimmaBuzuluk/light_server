import { body, validationResult } from 'express-validator';
import validator from 'validator';

export const registerValidator=[
    body("email", "Невірний формат пошти").isEmail(),
    body("password", "Пароль має бути мінімум 5 символів").isLength({min:5}),
    body("fullName", "Вкажіть своє ім'я, мінімум 3 симвла").isLength({min:3})
]

export const loginValidation=[
    body("email", "Невірний формат пошти").isEmail(),
    body("password", "Пароль має бути мінімум 5 символів").isLength({min:5})
]

export const addressCreateValidation = [
    body("addressPlace", "Назва має бути більше ніж 3 символа").isLength({min: 3}),
    body("address", "Невірний формат IP-адреси").custom((value) => {
        if (!validator.isIP(value)) {
            throw new Error('Невірний формат IP-адреси');
        }
        return true;
    })
];