
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="bg-blue-900 rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готові отримати карту тимчасового побуту?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Зробіть перший крок до легалізації вашого перебування в Польщі вже сьогодні
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-6 text-base">
              Замовити консультацію
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-6 text-base">
              Зв'язатися з нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
