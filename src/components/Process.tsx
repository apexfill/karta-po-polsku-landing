
import { Button } from '@/components/ui/button';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Консультація',
      description: 'Безкоштовна консультація з нашими експертами для аналізу вашої ситуації'
    },
    {
      number: '02',
      title: 'Підготовка документів',
      description: 'Допомога у зборі та правильному оформленні всіх необхідних документів'
    },
    {
      number: '03',
      title: 'Подання заяви',
      description: 'Подання заяви та супроводжувальних документів до відповідних органів'
    },
    {
      number: '04',
      title: 'Отримання карти',
      description: 'Отримання готової карти тимчасового побуту та інструкції з користування'
    }
  ];

  return (
    <section id="process" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Як ми допомагаємо отримати карту побуту
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Простий та зрозумілий процес без зайвих складнощів
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm relative">
              <div className="text-5xl font-bold text-blue-100 absolute right-4 top-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-900 relative z-10">
                {step.title}
              </h3>
              <p className="text-gray-600 relative z-10">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center text-blue-900">
            Не відкладайте своє майбутнє на потім
          </h3>
          <p className="text-gray-600 mb-6 text-center">
            Отримайте професійну допомогу в оформленні карти тимчасового побуту вже сьогодні
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Замовити консультацію
            </Button>
            <Button size="lg" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              Дізнатися вартість
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
