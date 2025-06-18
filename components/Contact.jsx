'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé avec succès !');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-16 bg-white text-[#444]">
      {/* Titre */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#2563eb]">Nous contacter</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Vous avez une question, un retour ou souhaitez simplement nous écrire ? Remplissez ce formulaire, nous vous répondrons dans les meilleurs délais.
        </p>
      </div>

      {/* Coordonnées rapides */}
      <div className="max-w-3xl mx-auto mb-10 text-center bg-gray-50 border border-gray-200 rounded-md shadow p-6">
        <p className="text-sm text-gray-600">📍 <strong>Adresse :</strong> 801 Aviation Pkwy, Ottawa, ON K1K 4B2</p>
        <p className="text-sm text-gray-600 mt-2">📞 <strong>Téléphone :</strong> +1 613 000-0000</p>
        <p className="text-sm text-gray-600 mt-2">✉️ <strong>Email :</strong> info@sgnssm.ca</p>
      </div>

      {/* Section FAQ */}
      <section id="faq" className="py-16 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2563eb]">Questions fréquentes</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Retrouvez ici les réponses aux questions que nous recevons le plus souvent.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {[
            {
              question: 'Comment prendre un rendez-vous avec un professionnel ?',
              answer:
                'Cliquez sur "Prendre un rendez-vous" dans le menu ou en bas de page. Remplissez le formulaire, et notre équipe vous recontactera rapidement.',
            },
            {
              question: 'Est-ce que mes informations sont confidentielles ?',
              answer:
                'Oui. Toutes les données sont sécurisées et accessibles uniquement aux professionnels autorisés.',
            },
            {
              question: 'Puis-je consulter à distance ?',
              answer:
                'Oui. Des consultations en ligne sont possibles selon la disponibilité des professionnels.',
            },
            {
              question: 'Quels types de professionnels sont disponibles ?',
              answer:
                'Psychologues, psychiatres, neuropsychologues, thérapeutes familiaux et intervenants sociaux sont à votre service.',
            },
            {
              question: 'Combien coûte une consultation ?',
              answer:
                'Les tarifs varient selon le type de service. Certains services sont couverts par les assurances ou proposés gratuitement.',
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded shadow-sm p-4 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-[#2563eb] mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-700 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contenu principal : Carte + Formulaire */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
        {/* Carte Google */}
        <div className="w-full h-[370px] rounded-md overflow-hidden shadow">
          <iframe
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.678999422138!2d-75.64434642411572!3d45.43469927107362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050ed7fc961f%3A0x1669e6cf87e991f7!2s801%20Aviation%20Pkwy%2C%20Ottawa%2C%20ON%20K1K%204B2!5e0!3m2!1sfr!2sca!4v1718149000000"
          ></iframe>
        </div>

        {/* Formulaire de contact */}
        <form onSubmit={handleSubmit} className="bg-gray-50 shadow-md rounded-lg p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 px-4 py-2 w-full rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 px-4 py-2 w-full rounded"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            value={formData.subject}
            onChange={handleChange}
            required
            className="border border-gray-300 px-4 py-2 w-full rounded"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 px-4 py-2 w-full rounded"
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#2563eb] text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            >
              Envoyer le message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
