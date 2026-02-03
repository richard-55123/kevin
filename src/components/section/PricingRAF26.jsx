import { useEffect, useRef, useState } from "react";
import { CheckCircle, CreditCard, Calendar, MapPin } from "lucide-react";

export function PricingRAF26() {
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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const features = [
        "Inscription RAF26",
        "Inscription Missions économiques CCCA N°02",
        "Soumission de visa",
        "Conférence",
        "Accès RAF26 (2 jours)",
        "Visites d'entreprises & incubateurs",
        "Ateliers, formations & B2B",
        "Démarrage d'entreprise au Québec/Canada",
        "Co-working",
        "Logistique, transport",
        "Accueil aéroport",
        "Réseautage"
    ];

    return (
        <section
            ref={sectionRef}
            className="relative pb-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
        >
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/images/visite.jpg')] bg-cover bg-center opacity-5" />
            </div>

            <div className="relative container mx-auto px-[5%]">

                <div className={`text-center mb-12 md:mb-16 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`}>

                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-raf-blue/20 mb-6 md:mb-8">
                        <CreditCard className="w-4 h-4 text-raf-blue" />
                        <span className="text-sm font-semibold text-raf-blue">
                            Tarifs & Inscriptions
                        </span>
                    </div>

                    <h2 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8">
                        Frais de participation RAF26{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-raf-blue via-raf-red to-raf-blue bg-clip-text text-transparent">
                                & Les missions économiques de la CCCA N°02
                            </span>
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-raf-blue via-raf-red to-raf-blue rounded-full" />
                        </span>
                    </h2>

                    {/* <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                        Frais de participation RAF26 & Les missions économiques de la CCCA N°02
                    </h2> */}

                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        Un forfait complet pour maximiser votre expérience au Canada
                    </p>
                </div>

                <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fadeIn delay-200' : 'opacity-0'}`}>

                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl md:rounded-4xl shadow-lg md:shadow-2xl border border-gray-200 overflow-hidden">

                        <div className="bg-gradient-to-r from-raf-blue to-raf-red text-white p-6 md:p-8">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                        Forfait 5 jours : RAF26 + Missions CCCA
                                    </h3>
                                    <div className="flex items-center gap-4 text-white/90">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm md:text-base">5 jours complets</span>
                                        </div>
                                        <div className="hidden md:block">•</div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-sm md:text-base">Québec & Montréal</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center md:text-right">
                                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-1">
                                        5919,15
                                    </div>
                                    <div className="text-lg md:text-xl font-semibold">CAD</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 md:p-10">

                            <div className="mb-8 md:mb-12">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    {features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 p-3 md:p-4 rounded-xl hover:bg-gray-50 transition-colors"
                                        >
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                                            <span className="text-gray-700 md:text-lg">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* <div className="border-t border-gray-200 pt-8">
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                                    <div className="text-center lg:text-left">
                                        <h4 className="text-xl font-bold text-raf-dark mb-2">
                                            Prêt à participer ?
                                        </h4>
                                        <p className="text-gray-600">
                                            Inscrivez-vous dès maintenant pour garantir votre place
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                                        <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-gradient-to-r from-raf-blue to-raf-red text-white font-bold px-8 py-4 rounded-xl md:rounded-2xl hover:opacity-90 transition-opacity">
                                            S'inscrire maintenant
                                        </button>

                                        <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-white border-2 border-raf-blue text-raf-blue font-bold px-8 py-4 rounded-xl md:rounded-2xl hover:bg-raf-blue hover:text-white transition-colors">
                                            Plus d'informations
                                        </button>
                                    </div>
                                </div>
                            </div> */}

                            <div className="mt-8 p-4 md:p-6 bg-raf-light/30 rounded-2xl">
                                <p className="text-gray-600">
                                    <strong>Important :</strong> Ce forfait inclut tous les services mentionnés ci-dessus.
                                    Pour toute question concernant les modalités de paiement, contactez notre équipe.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-6 md:p-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-raf-red">
                            A QUOI RENVOIENT LES FRAIS D’INSCRIPTION DE LA MISSION ECONOMIQUE CCCA?
                        </h3>

                        <p className="text-gray-700 mb-6">
                            Les frais d’inscription à la mission économique de la CCCA renvoient à l’ensemble des coûts administratifs et logistiques liés à la participation à la mission. Ils couvrent notamment :
                        </p>

                        <div className="space-y-4 text-gray-700">
                            <p>
                                <strong>1- L’organisation de la mission :</strong> préparation, coordination et suivi des activités sur place.
                            </p>
                            <p>
                                <strong>2- L’accès aux événements et activités prévues :</strong> visites d’entreprises, ateliers, conférences, sessions de formation, rencontres B2B, et tout programme officiel de la mission.
                            </p>
                            <p>
                                <strong>3- La logistique et le support sur place :</strong> accueil des participants, assistance pendant la mission, documentation et matériel d’information.
                            </p>
                            <p>
                                <strong>4- Les services de mise en relation :</strong> mise en contact avec des entreprises, partenaires locaux et experts pour favoriser les partenariats et collaborations.
                            </p>
                        </div>
                    </div>

                    {/* <div className={`mt-8 md:mt-12 text-center ${isVisible ? 'animate-fadeIn delay-400' : 'opacity-0'}`}>
                        <p className="text-gray-600 mb-4">
                            Besoin d'un forfait personnalisé ou d'informations supplémentaires ?
                        </p>
                        <button className="inline-flex items-center gap-2 text-raf-blue font-semibold hover:text-raf-red transition-colors">
                            <span>Contactez notre équipe commerciale</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

const ArrowRight = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);
