"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/app/page";

import { useState } from "react";

import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
// export const metadata = {
//     title: "Biblio-app",
//     description: "Demo Cours Programmation web avancé",
// };
export default function RootLayout({ children }) {
    const [currentPage, setCurrentPage] = useState("Accueil");
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <Header changePage={setCurrentPage} />
                <main className="flex-1">
                    {/* {children} */}
                    {currentPage === "Accueil" ? (
                        <Home />
                    ) : currentPage === "About" ? (
                        <About />
                    ) : currentPage === "Contact" ? (
                        <Contact />
                    ) : (
                        <div>Page Not Found</div>
                    )}
                </main>
                <Footer />
            </body>
        </html>
    );
}
