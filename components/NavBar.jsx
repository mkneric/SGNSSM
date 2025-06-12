'use client';

import { useState } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: 'Accueil', href: '#hero' },
        { label: 'À propos', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Départements', href: '#departments' },
        { label: 'Professionnels', href: '#doctors' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <div className="flex items-center space-x-4">
            {/* Menu desktop */}
            <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="hover:text-[#3fbbc0] transition-colors"
                    >
                        {link.label}
                    </a>
                ))}
            </nav>

            {/* CTA bouton */}
            <a
                href="#appointment"
                className="hidden md:inline-block bg-[#2563eb] text-white px-4 py-2 rounded text-sm hover:bg-[#1d4ed8]"
            >
                Prendre un rendez-vous
            </a>



            {/* Menu mobile */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-800 text-2xl"
            >
                ☰
            </button>

            {isOpen && (
                <div className="absolute top-20 right-4 w-64 bg-white rounded shadow-lg p-4 md:hidden z-50">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-800 py-2 hover:text-[#3fbbc0]"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#appointment"
                        onClick={() => setIsOpen(false)}
                        className="block mt-4 bg-[#2563eb] text-white text-center py-2 rounded hover:bg-[#1d4ed8]"
                    >
                        Prendre un rendez-vous
                    </a>


                </div>
            )}
        </div>
    );
}
