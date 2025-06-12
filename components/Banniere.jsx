'use client';

import { useEffect, useState } from 'react';

const images = [
  '/img/Banniere1.webp',
  '/img/Banniere2.webp',
];

export default function Banniere() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // ↻ Toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-[85vh] flex items-center justify-center text-white transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `url(${images[index]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Bienvenue sur <span className="text-[#2563eb]">SGNSSM</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
          Plateforme numérique de gestion des soins en santé mentale : accès rapide, dossiers sécurisés, ressources éducatives.
        </p>
        <a
          href="#about"
          className="mt-8 inline-block bg-[#2563eb] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-800 transition"
        >
          En savoir plus
        </a>
      </div>
    </section>
  );
}
