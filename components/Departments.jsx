'use client';

import { useEffect } from 'react';
import Banniere from './Banniere';

export default function Departments() {
  const departments = [
    {
      title: 'Pôle de Psychologie Clinique',
      description:
        'Consultations, évaluations et suivis psychologiques pour adultes, adolescents et enfants.',
      icon: 'fas fa-user-md',
    },
    {
      title: 'Pôle de Psychiatrie',
      description:
        'Prise en charge médicale des troubles mentaux sévères par des psychiatres qualifiés.',
      icon: 'fas fa-brain',
    },
    {
      title: 'Pôle de Prévention & Éducation',
      description:
        'Ateliers de sensibilisation, programmes éducatifs et ressources sur la santé mentale.',
      icon: 'fas fa-chalkboard-teacher',
    },
    {
      title: 'Pôle Jeunesse',
      description:
        'Soutien spécialisé aux jeunes et aux familles en contexte scolaire ou communautaire.',
      icon: 'fas fa-child',
    },
    {
      title: 'Pôle de Crise & Urgence',
      description:
        'Interventions rapides et soutien psychologique en cas de situation de crise.',
      icon: 'fas fa-ambulance',
    },
    {
      title: 'Pôle Recherche & Innovation',
      description:
        'Développement de nouvelles pratiques, outils numériques et projets pilotes en santé mentale.',
      icon: 'fas fa-flask',
    },
  ];

  // ⏬ Scroll fluide vers #departments au chargement
  useEffect(() => {
    const target = document.getElementById('departments');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Banniere />

      <section id="departments" className="py-16 bg-white">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl font-bold text-[#2563eb]">Nos Départements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Le SGNSSM regroupe plusieurs pôles d’expertise pour répondre à tous les besoins en santé mentale de manière intégrée et personnalisée.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow hover:bg-[#2563eb] hover:text-white transition group cursor-pointer"
            >
              <div className="text-[#2563eb] text-4xl mb-4 group-hover:text-white transition">
                <i className={dept.icon}></i>
              </div>
              <h3 className="font-semibold text-gray-800 text-lg mb-2 group-hover:text-white">
                {dept.title}
              </h3>
              <p className="text-gray-600 text-sm group-hover:text-white">{dept.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
