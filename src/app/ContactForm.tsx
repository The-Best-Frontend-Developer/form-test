import React from 'react';
import {useForm} from "react-hook-form";
import {formSchema, MyFormType} from "@/src/app/formSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";

const ContactForm = () => {
  const form = useForm<MyFormType>({
    defaultValues: {
      username: '',
      telegram: '',
      phonenumber: '',
      specialization: '',
      termsofprivacy: false,
    },
    mode: "onBlur",
    resolver: zodResolver(formSchema),
  })

  function handleSubmit(data: MyFormType) {
    console.log(data)
  }

  return (
    <div className="flex justify-center bg-purple-200 w-screen h-screen md:p-10 p-5">
      <div className="flex flex-col w-[min(900px,_100%)] bg-white rounded-xl p-8 gap-4 h-fit">
        <div className="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20" fill="none" viewBox="0 0 64 72">
            <path
              fill="#FFD500"
              d="M64 36.89c0-6.081-5.401-11.363-16.696-15.515l-3.341-14.51C42.908 1.997 41.325 0 37.72 0c-6.682 0-12.31 9.731-16.442 21.374C7.721 23.46 0 29.455 0 36.145c0 4.544 3.566 8.718 11.385 9.912l-8.22 16.937c-3.43 7.646 3.253 10.687 10.64 6.69l13.98-7.473 11.518 7.473c8.44 5.474 13.892.434 12.75-6.69L49.86 49.563C60.207 47.556 64 43.058 64 36.89Z"
            />
            <path
              fill="#000"
              fillRule="evenodd"
              d="M26.475 18.802c-.506 0-1.153.203-1.71.76l-1.04-1.029c.837-.836 1.862-1.189 2.75-1.189.854 0 1.683.278 2.307.843.633.573 1.006 1.4 1.006 2.39H28.32c0-.608-.22-1.034-.527-1.313-.317-.288-.778-.462-1.318-.462Zm8.915-.059c.623-.565 1.453-.842 2.306-.842.889 0 1.913.352 2.751 1.189l-1.04 1.027c-.557-.555-1.205-.759-1.71-.759-.54 0-1 .175-1.318.462-.308.279-.527.705-.527 1.314h-1.468c0-.99.373-1.817 1.006-2.39Zm.032 8.957c-1.138.785-2.567 1.122-3.999 1.122-1.51 0-3.086-.375-4.442-1.052l.66-1.302a8.657 8.657 0 0 0 3.782.897c1.217 0 2.332-.29 3.162-.862.812-.559 1.396-1.416 1.546-2.67l1.458.17c-.2 1.669-1.009 2.9-2.167 3.697Zm-15.675 4-1.94-1.986 1.055-1.015 2.574 2.636a55.574 55.574 0 0 1 10.838-1.048c4.515 0 9.093.493 13.87 1.405l-.278 1.43c-4.702-.897-9.185-1.378-13.592-1.378-5.761 0-11.267.871-16.402 2.55 2.538 5.033 6.148 8.81 10.83 11.365 4.918 2.683 11.06 4.041 18.466 4.041 1.445 0 3.102-.068 4.708-.138l.064 1.456c-1.6.07-3.29.14-4.772.14-7.58 0-13.983-1.39-19.172-4.222a27.537 27.537 0 0 1-2.054-1.238c-2.918 1.177-5.953 1.633-9.092 1.633-1.284 0-2.496-.071-3.776-.213l.163-1.449c1.23.137 2.387.205 3.613.205 2.67 0 5.22-.346 7.66-1.196-3.51-2.678-6.285-6.181-8.325-10.5l-.346-.732.769-.266a51.533 51.533 0 0 1 5.139-1.48Z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="font-bold text-2xl/6">Запишись на бесплатный скрининг с ментором</h3>
        </div>
        <ul className="text-sm">
          <li className="flex gap-x-2">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                   className="lucide lucide-check-check-icon lucide-check-check">
                <path d="M18 6 7 17l-5-5M22 10l-7.5 7.5L13 16"/>
              </svg>
            </span>
            <span>Ментор оценит текущий уровень навыков</span>
          </li>
          <li className="flex gap-x-2">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                   className="lucide lucide-check-check-icon lucide-check-check">
                <path d="M18 6 7 17l-5-5M22 10l-7.5 7.5L13 16"/>
              </svg>
            </span>
            <span>Поймёшь на какую позицию и ЗП ты можешь претендовать</span>
          </li>
          <li className="flex gap-x-2">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                   className="lucide lucide-check-check-icon lucide-check-check">
                <path d="M18 6 7 17l-5-5M22 10l-7.5 7.5L13 16"/>
              </svg>
            </span>
            <span>Узнаешь как мы работаем и как быстро ты дойдёшь до своей цели</span>
          </li>
        </ul>
        <Form {...form}>
          <form className="flex flex-col gap-6" onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({field, fieldState}) => (
                <FormItem>
                  <div className="flex flex-col gap-0.5">
                    <FormLabel className="font-medium text-sm" htmlFor="username">Имя</FormLabel>
                    <FormControl>
                      <Input
                        className={`${fieldState.invalid ? "border-destructive" : ""}`}
                        id="username"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <div className="flex items-start gap-4 sm:flex-row flex-col">
              <FormField
                control={form.control}
                name="telegram"
                render={({field, fieldState}) => (
                  <FormItem className="w-full"
                            onChange={(e) => {
                              field.onChange(e)
                              form.trigger(['phonenumber', 'telegram'])
                            }}
                  >
                    <div className="flex flex-col gap-0.5">
                      <FormLabel className="font-medium text-sm" htmlFor="telegram">Ник в Телеграмм</FormLabel>
                      <FormControl>
                        <Input
                          className={`${fieldState.invalid ? "border-destructive" : ""}`}
                          id="telegram"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <span className="font-medium text-sm mt-9 self-start sm:inline hidden">или</span>
              <FormField
                control={form.control}
                name="phonenumber"
                render={({field, fieldState}) => (
                  <FormItem className="w-full"
                            onChange={(e) => {
                              field.onChange(e)
                              form.trigger(['phonenumber', 'telegram'])
                            }}
                  >
                    <div className="flex flex-col gap-0.5">
                      <FormLabel className="font-medium text-sm" htmlFor="phonenumber">Номер</FormLabel>
                      <FormControl>
                        <Input
                          className={`${fieldState.invalid ? "border-destructive" : ""}`}
                          id="phonenumber"
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="specialization"
              rules={{required: "Выбери направление"}}
              render={({field, fieldState}) => (
                <div className="flex flex-col gap-0.5">
                  <FormLabel className="font-medium text-sm" htmlFor="direction">Направление</FormLabel>
                  <FormControl>
                    <Select
                      name="direction"
                      value={field.value}
                      onValueChange={(e) => {
                        field.onChange(e);
                        form.trigger("specialization")
                      }}
                    >
                      <SelectTrigger id="direction"
                                     className={`${fieldState.invalid ? "border-1 border-destructive" : ""} w-full`}
                                     onBlur={() => form.trigger("specialization")}
                      >
                        <SelectValue placeholder="Выбери направление"/>
                      </SelectTrigger>
                      <SelectContent>
                        <div className="px-3 py-1 text-xs font-semibold text-muted-foreground">
                          Разработка
                        </div>
                        <SelectItem value="python-backend">
                          🐍Python разработка | Python Backend
                        </SelectItem>
                        <SelectItem value="frontend">
                          🌐Frontend | Фронтенд
                        </SelectItem>

                        <div
                          className="px-3 py-1 mt-2 text-xs font-semibold text-muted-foreground border-t border-gray-200">
                          Аналитика
                        </div>
                        <SelectItem value="system-analysis">
                          💷Системный анализ | SA | System Analysis
                        </SelectItem>
                        <SelectItem value="business-analysis">
                          💶Бизнес-анализ | BA | Business Analysis
                        </SelectItem>
                        <SelectItem value="data-analysis">
                          📊Анализ данных | DA | Data Analysis
                        </SelectItem>
                        <SelectItem value="dwh-analytics">
                          💽DWH-аналитик | DWH | Аналитика хранилищ данных
                        </SelectItem>
                        <SelectItem value="data-science">
                          🧑🏻‍🔬Data Science | DS | ML | Machine Learning
                        </SelectItem>

                        <div
                          className="px-3 py-1 mt-2 text-xs font-semibold text-muted-foreground border-t border-gray-200">
                          Тестирование
                        </div>
                        <SelectItem value="manual-qa">
                          ✊🏻Ручное тестирование | QA | Manual QA
                        </SelectItem>
                        <SelectItem value="aqa">
                          🤖Автоматическое тестирование | AQA
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage/>
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="termsofprivacy"
              rules={{required: true}}
              render={({field, fieldState}) => (
                <FormItem className="inline-flex">
                  <FormControl>
                    <Checkbox
                      id="form"
                      checked={field.value}
                      onCheckedChange={(e) => {
                        field.onChange(e)
                        form.trigger("termsofprivacy")
                      }}
                      className={fieldState.invalid ? "border-destructive" : ""}
                    />
                  </FormControl>
                  <FormLabel className="flex items-center gap-3 text-sm" htmlFor="form">
                    <span className={`${fieldState.invalid ? "text-destructive" : ""}`}>
                      Я соглашаюсь с&nbsp;
                      <a
                        href="https://offer.gernar.ru/privacy"
                        className="text-blue-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        условиями обработки и использования персональных данных
                      </a>
                    </span>
                  </FormLabel>
                </FormItem>
              )}
            />
            <Button
              className="cursor-pointer rounded-lg border py-2.5 bg-lime-300 border-lime-400 hover:bg-[#c1fc53]"
              type="submit"
            >
              Получить консультацию
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;