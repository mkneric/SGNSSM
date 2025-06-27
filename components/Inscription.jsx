'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

export default function Inscription() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }
    alert('Inscription simulée');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-[#2563eb] text-center mb-2">Inscription</h2>
        <p className="text-center text-[#2563eb] text-sm mb-6">Créez votre compte SGNSSM</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nom" className="block text-gray-700 text-sm font-medium">Nom complet</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Eric Legrand"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded bg-gray-50 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium">Adresse e-mail ou numéro de téléphone</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="exemple@exemple.com"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded bg-gray-50 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium">Mot de passe</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded bg-gray-50 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium">Confirmez le mot de passe</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded bg-gray-50 placeholder:text-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2563eb] text-white py-2 rounded font-semibold hover:bg-[#1d4ed8]"
          >
            Créer mon compte
          </button>
        </form>

        <div className="text-center text-sm mt-4 text-gray-500">ou inscrivez-vous avec</div>

        <div className="flex justify-center mt-4 space-x-4">
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-[#2563eb] hover:bg-[#2563eb] hover:text-white transition">
            <FaGoogle />
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-[#2563eb] hover:bg-[#2563eb] hover:text-white transition">
            <FaFacebookF />
          </button>
        </div>

        <p className="text-center text-sm mt-6 text-gray-600">
          Vous avez déjà un compte ?{' '}
          <Link href="/loginpage" className="text-[#2563eb] font-medium hover:underline">Connectez-vous</Link>
        </p>
      </div>
    </section>
  );
}
