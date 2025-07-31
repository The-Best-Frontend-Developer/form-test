"use client"

import ContactForm from "@/src/app/ContactForm";

type MyForm = {
  username: string;
  telegram: string;
  phonenumber: string;
  specialization: string;
  termsofprivacy: boolean;
}

export default function Home() {
  return (
    <ContactForm/>
  )
}
