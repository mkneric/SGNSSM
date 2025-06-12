'use client';

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 text-sm pt-10 pb-6">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Coordonnées */}
                <div>
                    <h4 className="font-bold text-lg mb-2 text-[#2563eb]">SGNSSM</h4>
                    <p>
                        801 Aviation Pkwy, Ottawa, ON K1K 4B2<br />
                        <strong>Téléphone :</strong> +1 613 000-0000<br />
                        <strong>Email :</strong> info@sgnssm.ca
                    </p>
                </div>

                {/* Liens utiles */}
                <div>
                    <h4 className="font-bold text-lg mb-2 text-[#2563eb]">Liens utiles</h4>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-[#2563eb]">Accueil</a></li>
                        <li><a href="#" className="hover:text-[#2563eb]">À propos</a></li>
                        <li><a href="#" className="hover:text-[#2563eb]">Services</a></li>
                        <li><a href="#" className="hover:text-[#2563eb]">Conditions</a></li>
                        <li><a href="#" className="hover:text-[#2563eb]">Confidentialité</a></li>
                    </ul>
                </div>

                {/* Réseaux sociaux */}
                <div>
                    <h4 className="font-bold text-lg mb-2 text-[#2563eb]">Réseaux sociaux</h4>
                    <div className="flex space-x-3">
                        <a href="#" className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-[#2563eb] hover:text-white transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-[#2563eb] hover:text-white transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-[#2563eb] hover:text-white transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-[#2563eb] hover:text-white transition">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bas de page */}
            <div className="text-center mt-8 text-gray-500">
                © {new Date().getFullYear()} SGNSSM. Tous droits réservés.
            </div>
        </footer>
    );
}
