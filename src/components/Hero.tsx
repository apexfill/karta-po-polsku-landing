
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="gradient-bg py-16 md:py-28">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white space-y-6 mb-10 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Отримайте карту тимчасового побуту в Польщі легко та швидко
              </h1>
              <p className="text-xl text-blue-50">
                Допоможемо легалізувати ваше перебування та роботу в Польщі без зайвих клопотів та бюрократії
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold text-base">
                  Безкоштовна консультація
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Дізнатися більше
                </Button>
              </div>
              <div className="bg-blue-800/50 p-4 rounded-lg">
                <p className="text-sm font-medium">
                  ✓ Успішність оформлення більше 97%  
                  ✓ Швидке оформлення документів  
                  ✓ Офіційна допомога з усіма етапами
                </p>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-blue-900">Отримати консультацію</h2>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше ім'я"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Номер телефону"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Електронна пошта"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-base">
                    Отримати консультацію
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Ми зв'яжемося з вами протягом 24 годин
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,56C840,48,960,32,1080,26.7C1200,21,1320,27,1380,29.3L1440,32L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
