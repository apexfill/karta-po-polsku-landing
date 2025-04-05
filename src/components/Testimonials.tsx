
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Олена К.",
      location: "Київ",
      text: "Дякую за професійну допомогу в отриманні карти побуту! Всі етапи пройшли гладко і без проблем. Тепер я спокійно працюю в польській IT-компанії і планую своє майбутнє тут.",
      rating: 5
    },
    {
      name: "Сергій М.",
      location: "Львів",
      text: "Неймовірно швидко і якісно! Попри складнощі у моїх документах, команда експертів все вирішила за 2 місяці. Тепер маю карту побуту і можу вільно подорожувати Європою.",
      rating: 5
    },
    {
      name: "Марія Д.",
      location: "Одеса",
      text: "Спочатку сумнівалася, чи звертатися до посередників, але тепер розумію, що це було правильне рішення. Зекономила багато часу і нервів. Висока якість обслуговування!",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Відгуки наших клієнтів
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ми пишаємося довірою та позитивними відгуками від задоволених клієнтів
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200">
              <CardContent className="pt-6">
                <div className="flex flex-col">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-medium text-blue-900 mb-2">
            Довіртеся професіоналам з досвідом
          </p>
          <p className="text-gray-600">
            97% наших клієнтів успішно отримують карту тимчасового побуту
          </p>
        </div>
      </div>
    </section>
  );
}
