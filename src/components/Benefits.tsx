
import { GlobeIcon, HomeIcon, UserCheck, HeartPulse, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Benefits() {
  const benefits = [
    {
      icon: <HomeIcon className="h-10 w-10 text-blue-600" />,
      title: 'Постійне проживання в Польщі',
      description: 'Законне право на проживання в Польщі без необхідності постійного продовження документів'
    },
    {
      icon: <GlobeIcon className="h-10 w-10 text-blue-600" />,
      title: "Вільний в'їзд і виїзд до країн ЄС",
      description: 'Можливість подорожувати країнами Європейського Союзу без віз та додаткових дозволів'
    },
    {
      icon: <UserCheck className="h-10 w-10 text-blue-600" />,
      title: 'Офіційне працевлаштування',
      description: 'Легальне працевлаштування без додаткових дозволів та документів від роботодавця'
    },
    {
      icon: <HeartPulse className="h-10 w-10 text-blue-600" />,
      title: 'Доступ до медицини та соціальної підтримки',
      description: 'Повний доступ до державної медичної допомоги та соціальних програм Польщі'
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: 'Шлях до громадянства',
      description: 'Можливість отримання громадянства Польщі при дотриманні умов перебування'
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Переваги карти тимчасового побуту
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Отримайте легальний статус та всі привілеї офіційного проживання в Польщі
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-blue-50 rounded-full">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-blue-900 font-semibold mb-4">
            Карта тимчасового побуту — ваш ключ до комфортного та легального життя в Польщі!
          </p>
        </div>
      </div>
    </section>
  );
}
