import {z} from 'zod';

export const formSchema = z.object({
  username: z.string()
    .refine(val => val.replace(/\s/g, '').length >= 2, {
      message: "Введи имя (минимум 2 буквы)",
    }),

  telegram: z.string()
    .regex(/^[a-zA-Z0-9_]{5,}$/, {
      message: "Введи никнейм или ссылку на профиль",
    })
    .optional()
    .or(z.literal('')),

  phonenumber: z.string()
    .regex(/^\d{11}$/, {
      message: "Введи номер телефона",
    })
    .optional()
    .or(z.literal('')),

  specialization: z.string()
    .min(1, {
      message: "Выбери направление",
    }),

  termsofprivacy: z.boolean()
    .refine(val => val === true, {
      message: "Необходимо согласие с условиями обработки данных",
    }),
}).superRefine((data, ctx) => {
  if (!data.telegram?.trim() && !data.phonenumber?.trim()) {
    ctx.addIssue({
      path: ["telegram"],
      message: "Введи свой телеграм",
      code: "custom",
    });
    ctx.addIssue({
      path: ["phonenumber"],
      message: "Введи номер телефона",
      code: "custom",
    });
  }
});
export type MyFormType = z.infer<typeof formSchema>