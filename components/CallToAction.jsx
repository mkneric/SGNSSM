'use client';

export default function CallToAction() {
  return (
    <section id="call-to-action" className="py-20 bg-[#2563eb] text-white text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <h3 className="text-2xl font-bold mb-4">Besoin d'aide en santé mentale?</h3>
        <p className="mb-6">
          Nos équipes pluridisciplinaires sont disponibles pour vous accompagner, vous écouter et vous orienter.
          La santé mentale est essentielle au bien-être global. N’attendez pas pour demander du soutien.
        </p>
        <a
          href="#appointment"
          className="inline-block bg-white text-[#2563eb] font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          Prendre un rendez-vous
        </a>
      </div>
    </section>
  );
}
