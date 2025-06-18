'use client';

import { useState } from 'react';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    department: '',
    doctor: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation : à remplacer par future API
    alert("Votre demande a été envoyée. Merci !");
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      department: '',
      doctor: '',
      message: '',
    });
  };

  return (
    <section id="appointment" className="py-20 bg-gray-50">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold text-[#2563eb]">Prendre un rendez-vous</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Remplissez le formulaire ci-dessous pour réserver une consultation confidentielle avec l’un de nos professionnels.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              required
              className="border border-gray-300 rounded px-4 py-2 placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              required
              className="border border-gray-300 rounded px-4 py-2 placeholder-gray-400"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Votre téléphone"
              required
              className="border border-gray-300 rounded px-4 py-2 placeholder-gray-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-4 py-2 text-gray-400"
            />
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-4 py-2 text-gray-400"
            >
              <option value="">Choisissez un département</option>
              <option value="Psychologie clinique">Psychologie clinique</option>
              <option value="Psychiatrie">Psychiatrie</option>
              <option value="Pôle Jeunesse">Pôle Jeunesse</option>
              <option value="Prévention">Prévention & Éducation</option>
            </select>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-4 py-2 text-gray-400"
            >
              <option value="">Choisissez un professionnel</option>
              <option value="Dr. Claire Bouchard">Dr. Claire Bouchard</option>
              <option value="Dr. Karim Benyahia">Dr. Karim Benyahia</option>
              <option value="Dre. Sophie Tremblay">Dre. Sophie Tremblay</option>
              <option value="Dr. Émile Lefebvre">Dr. Émile Lefebvre</option>
            </select>
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Message (optionnel)"
            className="w-full border border-gray-300 rounded px-4 py-2 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#2563eb] text-white px-6 py-3 rounded hover:bg-blue-600 transition"
            >
              Envoyer la demande
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
