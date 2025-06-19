'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import Banniere from './Banniere';

export default function About() {
  // Scroll automatique vers #about au chargement de la page
  useEffect(() => {
    const target = document.getElementById('about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Banniere />

      <section id="about" className="bg-white py-16">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl font-bold text-[#2563eb]">À propos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Le SGNSSM est une initiative numérique dédiée à l’amélioration de l’accès aux soins en santé mentale à travers une plateforme sécurisée, humaine et connectée.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/img/img-about.webp"
              alt="À propos SGNSSM"
              width={600}
              height={400}
              className="rounded shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Une solution moderne au service du bien-être psychologique
            </h3>
            <p className="italic text-gray-600 mb-4">
              Notre objectif est de démocratiser l'accès à des services de santé mentale de qualité, que vous soyez patient, proche aidant ou professionnel.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <i className="fas fa-check text-[#2563eb] mr-2 mt-1"></i>
                <span>Prise de rendez-vous rapide avec des spécialistes certifiés.</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-[#2563eb] mr-2 mt-1"></i>
                <span>Accès sécurisé aux dossiers médicaux et historiques de consultations.</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-[#2563eb] mr-2 mt-1"></i>
                <span>Outils d’auto-évaluation, de sensibilisation et de prévention intégrés à la plateforme.</span>
              </li>
            </ul>
            <p className="mt-4 text-gray-600">
              Le SGNSSM vise à rapprocher les citoyens des services en santé mentale, à briser les tabous et à favoriser une approche inclusive et accessible pour tous.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
