'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaGoogle, FaFacebookF, FaFingerprint } from 'react-icons/fa';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Connexion simulée');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-[#2563eb] text-center mb-2">Connectez-Vous</h2>
        <p className="text-center text-[#2563eb] text-sm mb-6">Bienvenue</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block  text-gray-700 text-sm font-medium">E-mail ou numéro de téléphone</label>
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
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium">Mot De Passe</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="*************"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded bg-gray-50 placeholder:text-gray-400"
            />
            <div className="text-right text-sm mt-1">
              <a href="#" className="text-[#2563eb] hover:underline">Mot de passe oublié</a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2563eb] text-white py-2 rounded font-semibold hover:bg-[#1d4ed8]"
          >
            Se Connecter
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
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-[#2563eb] hover:bg-[#2563eb] hover:text-white transition">
            <FaFingerprint />
          </button>
        </div>

        <p className="text-center text-sm mt-6 text-gray-600">
          Vous n'avez pas de compte ?{' '}
          <Link href="/inscription" className="text-[#2563eb] font-medium hover:underline">Inscrivez-vous</Link>
        </p>
      </div>
    </section>
  );
}
