'use client';

export default function ServicesSection() {
  const services = [
    {
      icon: 'fas fa-brain',
      title: 'Évaluation psychologique',
      text: 'Bilan approfondi des troubles mentaux, réalisé par des professionnels certifiés en santé mentale.',
    },
    {
      icon: 'fas fa-comments',
      title: 'Consultations en ligne',
      text: 'Accédez à des thérapeutes qualifiés depuis chez vous pour une prise en charge confidentielle et sécurisée.',
    },
    {
      icon: 'fas fa-users',
      title: 'Soutien aux familles',
      text: 'Ressources et accompagnement pour les proches de personnes vivant avec des troubles psychiques.',
    },
    {
      icon: 'fas fa-hand-holding-heart',
      title: 'Prévention et sensibilisation',
      text: 'Ateliers éducatifs et campagnes sur la gestion du stress, l’anxiété et la santé mentale au travail.',
    },
  ];

  return (
    <section id="featured-services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg text-center transition cursor-pointer hover:bg-[#2563eb] hover:text-white hover:shadow-xl"
            >
              <div className="text-[#3fbbc0] text-4xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h4 className="font-semibold text-lg text-gray-700 hover:text-white mb-2 transition">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600 hover:text-white transition">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
