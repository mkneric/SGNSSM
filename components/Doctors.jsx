'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Banniere from './Banniere';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Doctors() {
  const doctors = [
    {
      name: 'Dr. Clément Bouchard',
      role: 'Psychologue clinicienne',
      image: '/img/img-docteur1.webp',
    },
    {
      name: 'Dr. Karim Benyahia',
      role: 'Psychiatre spécialisé en troubles anxieux',
      image: '/img/img-docteur2.webp',
    },
    {
      name: 'Dre. Sophie Tremblay',
      role: 'Neuropsychologue',
      image: '/img/img-docteur3.webp',
    },
    {
      name: 'Dr. Émile Lefebvre',
      role: 'Thérapeute familial',
      image: '/img/img-docteur4.webp',
    },
  ];

  // Scroll fluide vers #doctors au chargement
  useEffect(() => {
    const target = document.getElementById('doctors');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Banniere />

      <section id="doctors" className="py-16 bg-gray-50">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl font-bold text-[#2563eb]">Nos professionnels</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Une équipe pluridisciplinaire engagée à offrir des soins de qualité, à l’écoute de chaque patient.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden text-center hover:shadow-lg transition"
            >
              <div className="relative w-full h-64">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg text-gray-800">{doc.name}</h4>
                <span className="text-sm text-gray-600">{doc.role}</span>
                <div className="flex justify-center mt-4 space-x-3 text-[#2563eb]">
                  <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
                  <a href="#"><FaFacebookF className="hover:text-blue-600" /></a>
                  <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
                  <a href="#"><FaLinkedinIn className="hover:text-blue-700" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
