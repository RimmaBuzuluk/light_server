import { body } from "express-validator";

export const registerValidator=[
    body("email", "Невірний формат пошти").isEmail(),
    body("password", "Пароль має бути мінімум 5 символів").isLength({min:5}),
    body("fullName", "Вкажіть своє ім'я, мінімум 3 симвла").isLength({min:3})
]