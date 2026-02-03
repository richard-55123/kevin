

import {
    Building2, Users, Globe, Briefcase, CalendarDays, MapPin, CheckCircle, ArrowRight, Plane, Hotel, CreditCard, Mail, Phone, ChevronRight
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const AboutRAF26 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
        >
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-raf-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-raf-red/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                <div className="absolute top-20 right-20 w-64 h-64 border-2 border-raf-gold/10 rounded-3xl rotate-12" />
                <div className="absolute bottom-20 left-20 w-40 h-40 border-2 border-raf-blue/10 rounded-3xl -rotate-12" />
            </div>

            <div className="relative container mx-auto px-[5%]">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    <div className={`space-y-8 lg:space-y-10 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`}>
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-raf-blue/10 to-raf-red/10 backdrop-blur-sm px-6 py-3 rounded-full border border-raf-blue/20">
                            <div className="w-2 h-2 bg-raf-red rounded-full animate-pulse" />
                            <span className="text-sm font-semibold text-raf-blue uppercase tracking-wider">
                                Présentation
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
                                À propos du{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 bg-gradient-to-r from-raf-red to-red-600 bg-clip-text text-transparent">
                                        RAF 2026
                                    </span>
                                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-raf-red to-red-600 rounded-full" />
                                </span>
                            </h2>
                            <div className="h-1 w-24 bg-gradient-to-r from-raf-gold to-yellow-500 rounded-full" />
                        </div>

                        <div className="space-y-8">
                            <div className={`space-y-6 ${isVisible ? 'animate-fadeIn delay-200' : 'opacity-0'}`}>
                                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                                    La <strong>3<sup>e</sup> édition du Rendez-vous d’Affaires de la Francophonie (RAF26)</strong>, organisée par <strong>Québec International</strong>, se tiendra les{" "}
                                    <span className="relative inline-block">
                                        <span className="relative z-10 font-bold text-raf-red">20 et 21 mai 2026</span>
                                        <span className="absolute -bottom-1 left-0 w-full h-1 bg-raf-red/20 rounded-full" />
                                    </span>{" "}
                                    au <strong className="text-raf-blue">Centre des congrès de Québec</strong>, situé au <strong>1000, boulevard René‑Lévesque Est, Québec (QC) G1R 5TR</strong>.
                                </p>

                                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                                    Le RAF26 s’impose comme un <strong className="text-raf-dark">événement économique incontournable</strong> de l’espace francophone international. Il constitue une plateforme privilégiée de rencontres, d’échanges et de développement de <strong>partenariats d’affaires durables</strong> entre entrepreneurs, investisseurs, institutions et décideurs économiques.
                                </p>

                                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                                    Dans un contexte mondial marqué par la transformation des chaînes de valeur, les tensions géopolitiques et la recherche de nouveaux marchés, la Francophonie s’affirme comme un <strong className="text-raf-dark">choix stratégique</strong>, regroupant plus de <strong>320 millions de francophones</strong> autour d’une langue commune, de valeurs partagées et d’une coopération économique en pleine croissance.
                                </p>
                            </div>

                            <div className={`grid grid-cols-2 gap-6 pt-6 ${isVisible ? 'animate-fadeIn delay-300' : 'opacity-0'}`}>
                                {[
                                    "Partenariats d’affaires durables",
                                    "Diversification des marchés francophones",
                                    "Innovation et investissement",
                                    "Rôle stratégique du Québec en Amérique du Nord"
                                ].map((point, index) => (
                                    <div key={index} className="flex items-center gap-3 group cursor-pointer">
                                        <div className="p-2 bg-raf-blue/10 rounded-lg group-hover:bg-raf-blue/20 transition-colors">
                                            <ChevronRight className="w-4 h-4 text-raf-blue" />
                                        </div>
                                        <span className="text-gray-800 font-medium group-hover:text-raf-blue transition-colors">
                                            {point}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={`relative ${isVisible ? 'animate-fadeIn delay-500' : 'opacity-0'}`}>
                        <div className="relative group">
                            <div className="relative rounded-4xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-raf-blue/20 to-raf-red/20 mix-blend-multiply" />
                                <img
                                    src="/images/ca.jpg"
                                    alt="Centre des congrès de Québec"
                                    className="w-full h-[600px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-raf-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="absolute -bottom-6 right-8 bg-gradient-to-r from-raf-blue to-raf-red text-white px-6 py-3 rounded-2xl shadow-lg">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span className="font-bold">Québec, Canada</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

























// La troisieme edition de rendez-vous d'affaires de la francophonie
// (RAF26), organisée par Québec International se tiendra les 20 et 21 mai 2026
// au Centre des congres de Québec, situé au 1000, boulevard René-Levesque Est,
// Québec (QC) G1R 5TR. La RAF26  s'impose comme un événement économique incontournable de l'espace francophone
// international. Il constitue une plateforme privilégiée permettant aux entrepreneur, investisseurs, institutions et
// décideurs économique de se rencontrer, d'échanger et de développer des partenariets durables au sein du vaste
// réseau francophone.

// Dans un contexte mondial marqué par la transfometion des chaines de valeurs, les tensions géopolitiques et la recherche accrue
// de nouveaux marchés, la Francophonie s'affirme comme un choix stratégique. Elle regroupe aujourd'hui plus de
// 320 millions de francophones répartis sur une langue commune, des valeurs partagées et une coopération économique en pleine croissance.


// La 3eme édition RAF26 mettra particulierement en lumiere :
// . le développement de partenariats d'affaire durables;
// . la diversification des marchés francophones;
// . l'innovation, l'investissement et la mobilité des TableOfContents;
// . le role stratégique du Québec comme Carrefour économique francophone en amérique du Nord.


// A travers une programmation riche, le RAF26 offrira aux participants :
// . Des conférences de haut niveau sur les enjeux économiques actuels du monde francophone;
// . Des rencontres d'affaire (B2B) ciblées et structurées;
// . Des espaces de réseautage exclusifs favorisant des collaborations concretes et profitables. 