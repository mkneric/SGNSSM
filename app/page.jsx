'use client';

import Banniere from '@/components/Banniere';
import ServicesSection from '@/components/ServicesSection';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <>
      <Banniere />
      <ServicesSection />

      {/* Section Témoignages */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl font-bold text-[#2563eb]">Témoignages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Ils ont fait confiance au SGNSSM pour leur santé mentale. Découvrez leurs histoires.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="bg-gray-50 border rounded-lg shadow p-6 flex flex-col items-center text-center"
            >
              <img
                src={`/img/testimonials/testimonial-${index + 1}.jpg`}
                alt={`Témoignage ${index + 1}`}
                className="w-20 h-20 rounded-full object-cover mb-4 text-black"
              />
              <p className="text-gray-600 italic mb-4">
                &ldquo;Grâce à SGNSSM, j’ai trouvé le soutien que je cherchais depuis longtemps. L’équipe est bienveillante et à l’écoute.&rdquo;
              </p>
              <h4 className="font-semibold text-black">Témoignage {index + 1}</h4>
              <span className="text-sm text-gray-500">Bénéficiaire</span>
            </div>
          ))}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
