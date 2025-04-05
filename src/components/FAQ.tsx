
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Скільки часу займає оформлення карти побуту?",
      answer:
        "Стандартний термін оформлення карти тимчасового побуту складає від 2 до 4 місяців, залежно від воєводства та індивідуальних обставин. Наша компанія допомагає оптимізувати процес та мінімізувати затримки."
    },
    {
      question: "Які документи потрібні для оформлення?",
      answer:
        "Необхідний пакет документів включає: закордонний паспорт, підтвердження місця проживання в Польщі, доказ фінансового забезпечення, медичне страхування, фотографії та підстави для перебування (трудовий договір, навчання, тощо). Ми надаємо повний чек-лист та допомагаємо з підготовкою всіх документів."
    },
    {
      question: "Чи потрібна мені особиста присутність у воєводстві?",
      answer:
        "За законодавством Польщі, ваша особиста присутність потрібна при поданні заяви та при отриманні готової карти. Однак, ми можемо представляти ваші інтереси на проміжних етапах процесу за наявності нотаріальної довіреності."
    },
    {
      question: "Яка вартість послуг з оформлення карти побуту?",
      answer:
        "Вартість наших послуг залежить від підстави для оформлення карти та складності вашої справи. Базова консультація безкоштовна, після якої ми надаємо точний розрахунок вартості. Оплата здійснюється поетапно в залежності від прогресу вашої справи."
    },
    {
      question: "Що робити, якщо мені відмовили у видачі карти побуту?",
      answer:
        "У випадку відмови, ми аналізуємо причини та допомагаємо підготувати апеляцію або нову заяву з урахуванням попередніх помилок. Наш досвід показує, що більшість відмов пов'язані з технічними помилками, які можна виправити."
    },
    {
      question: "Чи можна подати документи онлайн?",
      answer:
        "Деякі документи можна подати через електронну систему, але повний пакет документів необхідно подавати особисто або через уповноважену особу. Ми допомагаємо з електронною реєстрацією та підготовкою до особистого візиту."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Часті запитання
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Відповіді на найпопулярніші питання про карту тимчасового побуту
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Не знайшли відповідь на своє запитання?
          </p>
          <p className="text-blue-600 font-semibold">
            Зателефонуйте нам за номером{" "}
            <a href="tel:+48123456789" className="underline hover:no-underline">
              +48 123 456 789
            </a>{" "}
            або напишіть на{" "}
            <a href="mailto:info@kartapobytu.pl" className="underline hover:no-underline">
              info@kartapobytu.pl
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
