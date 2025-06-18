'use client';

import { useEffect } from 'react';
import Banniere from './Banniere';

export default function Services() {
  const services = [
    {
      icon: 'fas fa-heartbeat',
      title: 'Prise en charge thérapeutique',
      description:
        'Consultations avec des psychologues, psychiatres et intervenants qualifiés pour un accompagnement personnalisé.',
    },
    {
      icon: 'fas fa-pills',
      title: 'Suivi médicamenteux',
      description:
        'Suivi médical encadré pour les patients nécessitant un traitement pharmacologique adapté à leur pathologie.',
    },
    {
      icon: 'fas fa-hospital-user',
      title: 'Évaluation psychologique',
      description:
        'Bilans complets réalisés par des professionnels pour dépister les troubles mentaux ou évaluer les besoins spécifiques.',
    },
    {
      icon: 'fas fa-dna',
      title: 'Programmes de prévention',
      description:
        'Sensibilisation à la santé mentale en milieu scolaire, professionnel ou communautaire pour réduire les stigmatisations.',
    },
    {
      icon: 'fas fa-wheelchair',
      title: 'Soutien aux proches',
      description:
        'Services d’écoute, groupes de parole et ressources pour les aidants naturels ou les familles concernées.',
    },
    {
      icon: 'fas fa-notes-medical',
      title: 'Accès aux ressources',
      description:
        'Portail en ligne sécurisé pour accéder aux documents médicaux, plans de soins et outils d’autoévaluation.',
    },
  ];

  // ⏬ Scroll automatique vers #services au chargement
  useEffect(() => {
    const target = document.getElementById('services');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Banniere />

      <section id="services" className="py-16 bg-gray-50">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl font-bold text-[#2563eb]">Nos services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Découvrez les services numériques mis à votre disposition pour améliorer l’accès, le suivi et la qualité des soins en santé mentale.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center group cursor-pointer"
            >
              <div className="text-[#2563eb] text-4xl mb-4 group-hover:scale-110 transition-transform">
                <i className={service.icon}></i>
              </div>
              <h3 className="font-semibold text-lg text-gray-800 group-hover:text-[#2563eb]">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
