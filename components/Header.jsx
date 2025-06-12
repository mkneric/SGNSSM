'use client';

import NavBar from './NavBar';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white text-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Titre */}
        <a href="/" className="flex items-center space-x-3">
          <Image
            src="/img/img-logo.webp"
            alt="Logo SGNSSM"
            width={40}
            height={40}
            priority
          />
          <span className="font-bold text-lg text-gray-900">SGNSSM</span>
        </a>

        {/* Barre de navigation */}
        <NavBar />
      </div>
    </header>
  );
}
