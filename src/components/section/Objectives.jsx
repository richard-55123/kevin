

import { CheckCircle, Target, TrendingUp, Globe, Users, Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ObjectivesRAF26() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries[0].isIntersecting && setIsVisible(true),
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const objectives = [
        {
            title: "Partenariats d’affaires durables",
            description: "Faciliter la création de partenariats économiques solides et pérennes au sein de l’espace francophone.",
            icon: Users,
            color: "from-raf-blue to-blue-600",
            stats: "100+ partenariats"
        },
        {
            title: "Diversification des marchés",
            description: "Accompagner les entreprises dans l’accès à de nouveaux marchés francophones à fort potentiel.",
            icon: Globe,
            color: "from-raf-red to-red-600",
            stats: "20+ pays ciblés"
        },
        {
            title: "Innovation & investissement",
            description: "Stimuler l’innovation et favoriser les flux d’investissement entre les écosystèmes francophones.",
            icon: TrendingUp,
            color: "from-raf-gold to-yellow-500",
            stats: "50 M$+ mobilisés"
        },
        {
            title: "Québec, carrefour stratégique",
            description: "Positionner le Québec comme carrefour économique francophone en Amérique du Nord.",
            icon: Target,
            color: "from-purple-600 to-raf-blue",
            stats: "Hub de référence"
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative pb-12 bg-gradient-to-b from-raf-light/20 via-white to-gray-50 overflow-hidden"
        >
            <div className="relative container mx-auto px-[5%]">
                <div className={`text-center max-w-4xl mx-auto mb-20 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 bg-white/80 px-5 py-2 rounded-full border border-raf-blue/20 mb-8">
                        <Sparkles className="w-4 h-4 text-raf-gold" />
                        <span className="text-sm font-semibold text-raf-blue uppercase tracking-wider">Notre mission</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8">
                        Objectifs{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-raf-blue via-raf-red to-raf-blue bg-clip-text text-transparent">
                                Stratégiques
                            </span>
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-raf-blue via-raf-red to-raf-blue rounded-full" />
                        </span>
                        {" "}du RAF26
                    </h2>


                    <p className="text-xl text-gray-700 leading-relaxed">
                        La 3<sup>e</sup> édition du RAF vise à renforcer la coopération économique francophone à travers des actions concrètes, mesurables et orientées vers l’impact.
                    </p>
                </div>

                <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ${isVisible ? 'animate-fadeIn delay-200' : 'opacity-0'}`}>
                    {objectives.map((objective, index) => {
                        const Icon = objective.icon;
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className="relative group cursor-pointer"
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                            >
                                <div className={`relative h-full bg-white rounded-3xl p-8 border-2 transition-all duration-500 ${isActive ? 'shadow-2xl scale-105' : 'border-gray-100 shadow-card'}`}>
                                    <div className={`mb-6 w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${objective.color} text-white`}>
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-raf-dark mb-3">{objective.title}</h3>
                                    <p className="text-gray-700">{objective.description}</p>
                                    <div className="mt-6 pt-4 border-t border-gray-100 text-sm font-bold text-raf-blue">
                                        {objective.stats}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
