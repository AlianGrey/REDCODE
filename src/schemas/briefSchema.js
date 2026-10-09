import { z } from "zod"

export const briefSchema = z.object({
    name: z
        .string()
        .min(2, 'Введите ваше имя'),
    company: z
        .string()
        .optional(),
    email: z
        .string()
        .email('Введите корректный email'),
    phone: z
        .string()
        .optional(),
    projectType: z
        .string()
        .min(1, 'Выберете тип проекта'),
    projectDescription: z
        .string()
        .min(10, 'Расскажите немного подробнее о своём проекте'),
    audience: z
        .string()
        .optional(),
    design: z
        .string()
        .optional(),
    examples: z
        .string()
        .optional(),
    deadline: z
        .string()
        .optional(),
    budget: z
        .string()
        .optional(),
    consent: z
        .boolean()
        .refine(value => value === true, {
            message: "Необходимо согласие на обработку персональных данных",
        }),
    // Скрытое поле для обнаружения ботов
    website: z.string().optional(),
})