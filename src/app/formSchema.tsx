import { z } from 'zod';

export const formSchema = z.object({
  username: z.string({message: "Введи имя (минимум 2 буквы)"}).min(2, {message: "Введи имя (минимум 2 буквы)"}),
  telegram: z.string().optional(),
  phonenumber: z.string().optional(),
  specialization: z.string().min(1, {message: "Выбери направление"}),
  termsofprivacy: z.boolean().refine(val => val === true, {message: "Необходимо согласие с условиями обработки данных"}),
}).superRefine((data, ctx) => {
  const telegram = data.telegram?.trim() ?? "";
  const phonenumber = data.phonenumber?.trim() ?? "";


  if (!telegram && !phonenumber) {
    ctx.addIssue({
      code: "custom",
      message: "Введи свой телеграм",
      path: ["telegram"],
    });
    ctx.addIssue({
      code: "custom",
      message: "Введи номер телефона",
      path: ["phonenumber"],
    });
    return;
  }

  // Дополнительные проверки для telegram
  if (telegram && telegram.length < 5) {
    ctx.addIssue({
      code: "custom",
      message: "Введи никнейм или ссылку на профиль",
      path: ["telegram"],
    });
  }

  // Дополнительные проверки для phonenumber
  if (phonenumber && !/^\d{11}$/.test(phonenumber)) {
    ctx.addIssue({
      code: "custom",
      message: "Введи номер телефона",
      path: ["phonenumber"],
    });
  }
});

export type MyFormType = z.infer<typeof formSchema>