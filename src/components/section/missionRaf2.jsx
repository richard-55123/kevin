import {
    Calendar,
    MapPin,
    Users,
    Briefcase,
    Globe,
    ArrowRight,
    ChevronRight,
    Building2
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function AfterRAF() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const highlights = [
        { icon: Users, value: "Entrepreneurs", label: "Investisseurs & dirigeants" },
        { icon: Briefcase, value: "Multi-sectoriel", label: "Approche stratégique" },
        { icon: Globe, value: "Canada", label: "Marché cible" },
        { icon: Building2, value: "CCCA", label: "Organisation" }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-12 bg-gradient-to-br from-raf-dark via-primary to-raf-blue text-white overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-[url('/images/mission.jpg')] bg-cover bg-center opacity-20"
                    style={{ backgroundPosition: "center 30%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-raf-dark/95 via-primary/90 to-raf-blue/85" />
            </div>

            <div className="relative container mx-auto px-[5%]">

                {/* HEADER */}
                <div className={`max-w-4xl mb-20 ${isVisible ? "animate-slideUp" : "opacity-0"}`}>

                    <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20 mb-8">
                        <div className="w-2 h-2 bg-raf-gold rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-raf-gold uppercase tracking-wider">
                            Programme Exclusif
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-10 leading-tight">
                        After RAF –{" "}
                        <span className="bg-gradient-to-r from-raf-gold via-yellow-400 to-raf-gold bg-clip-text text-transparent">
                            Missions économiques
                        </span>{" "}
                        CCCA N°02
                    </h2>

                    <div className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl border-l-4 border-raf-gold pl-4 py-1">
                        <p>
                            Les Missions CCCA N°2, organisées par la Chambre de commerce
                            Canada–Afrique (CCCA), se dérouleront du 25 au 28 mai 2026 au
                            Canada. Cette mission économique internationale s’inscrit dans
                            la continuité des initiatives de la CCCA visant à renforcer les
                            relations commerciales, industrielles et entrepreneuriales entre
                            le Canada et les pays africains.
                        </p>

                        <p>
                            Les Missions CCCA N°2 ont pour objectif principal d’offrir aux
                            entrepreneurs, investisseurs, dirigeants d’entreprises et
                            porteurs de projets une immersion économique et industrielle au
                            sein de l’écosystème canadien. Elles permettront aux participants
                            de mieux comprendre l’environnement d’affaires du Canada,
                            d’identifier des opportunités concrètes de partenariats, ainsi
                            que de développer des stratégies efficaces d’implantation,
                            d’exportation et de croissance.
                        </p>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT COLUMN */}
                    <div className={`space-y-10 ${isVisible ? "animate-fadeIn delay-200" : "opacity-0"}`}>

                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20">
                            <h3 className="text-3xl font-bold mb-6">
                                Cette mission mettra particulièrement l’accent sur :
                            </h3>

                            <ul className="space-y-5 text-gray-200">
                                {[
                                    "les visites ciblées d’entreprises industrielles canadiennes dans différents secteurs stratégiques ;",
                                    "des sessions d’information pratiques sur l’ouverture d’une filiale au Canada ou au Québec ;",
                                    "des ateliers spécialisés portant sur l’exportation de marchandises vers le marché canadien ;",
                                    "des ateliers dédiés à l’entrepreneuriat et au repreneuriat, incluant le démarrage et la reprise d’entreprises au Québec et au Canada ;",
                                    "une formation certifiante en un module, dont l’utilisation de l’intelligence artificielle comme levier de développement des affaires au Canada."
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <ChevronRight className="w-5 h-5 text-raf-gold mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {highlights.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="text-center p-5 bg-white/5 rounded-2xl hover:bg-white/10 transition"
                                    >
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-3">
                                            <Icon className="w-6 h-6 text-raf-gold" />
                                        </div>
                                        <div className="text-sm font-bold">{item.value}</div>
                                        <div className="text-xs text-gray-400">{item.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className={`space-y-10 ${isVisible ? "animate-fadeIn delay-400" : "opacity-0"}`}>

                        <div className="relative rounded-3xl overflow-hidden">
                            <img
                                src="/images/missions.jpg"
                                alt="Missions économiques CCCA"
                                className="w-full h-[420px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-raf-dark/70 via-transparent to-transparent" />
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20">
                            <p className="text-gray-200 text-lg leading-relaxed">
                                Les Missions CCCA N°2 constituent ainsi une opportunité
                                unique pour les participants de passer de l’intention à
                                l’action et de bâtir des projets d’affaires durables sur le
                                marché canadien.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-raf-blue/20 to-raf-red/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div>
                                    <h4 className="text-xl font-bold mb-2">
                                        Prêt à participer ?
                                    </h4>
                                    <p className="text-gray-300 text-sm">
                                        Places limitées – Inscrivez-vous dès maintenant
                                    </p>
                                </div>
                                <a  href="#modalite" className="inline-flex items-center gap-3 bg-gradient-to-r from-raf-gold to-yellow-500 text-raf-dark font-bold px-8 py-4 rounded-2xl hover:scale-105 transition">

                                    <span>S'inscrire aux missions</span>
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
