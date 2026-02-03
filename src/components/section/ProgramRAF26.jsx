import {
    Calendar, Clock, Building2, Target, Users, Briefcase, Rocket, Award,
    BookOpen, Globe, TrendingUp, Coffee, Handshake,
    CheckCircle, ChevronRight, MapPin
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function MissionProgram() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeDay, setActiveDay] = useState(0);
    const [activeSession, setActiveSession] = useState(0);
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

    const missionDays = [
        {
            id: 1,
            day: "Jour 1",
            title: "Immersion industrielle",
            subtitle: "Environnement d'affaires",
            icon: Building2,
            color: "from-raf-blue to-blue-600",
            sessions: [
                {
                    time: "08h30 - 09h00",
                    title: "Accueil et briefing",
                    description: "Accueil des participants et présentation de la mission",
                    icon: Users,
                    type: "accueil",
                    details: [
                        "Enregistrement des participants",
                        "Remise des documents de mission",
                        "Présentation du programme détaillé"
                    ]
                },
                {
                    time: "09h00 - 12h30",
                    title: "Visites d'entreprises industrielles ciblées",
                    description: "Rencontre avec les dirigeants et responsables opérationnels",
                    icon: Target,
                    type: "visite",
                    details: [
                        "Secteur manufacturier et transformation",
                        "Agroalimentaire",
                        "Industries minières",
                        "BTP/Construction",
                        "Engins et maritimes",
                        "Technologies et innovation",
                        "Transformation du bois",
                        "Aérospatial"
                    ]
                },
                {
                    time: "12h30 - 14h00",
                    title: "Déjeuner d'affaires",
                    description: "Échange avec les entreprises visitées",
                    icon: Coffee,
                    type: "réseautage",
                    details: [
                        "Repas d'affaires",
                        "Networking structuré",
                        "Échanges informels"
                    ]
                },
                {
                    time: "14h00 - 16h00",
                    title: "Session d'information",
                    description: "Thème : Comment ouvrir une filiale au Canada/Québec",
                    icon: BookOpen,
                    type: "formation",
                    details: [
                        "Cadre juridique et réglementaire",
                        "Choix de la structure d'implantation",
                        "Aspects fiscaux et administratifs"
                    ]
                },
                {
                    time: "16h00 - 17h30",
                    title: "Atelier pratique",
                    description: "Thème : Comprendre l'écosystème entrepreneurial canadien",
                    icon: TrendingUp,
                    type: "atelier",
                    details: [
                        "Analyse de l'écosystème",
                        "Stratégies d'intégration",
                        "Réseaux de soutien"
                    ]
                },
                {
                    time: "18h00",
                    title: "Fin des activités",
                    description: "Clôture de la première journée",
                    icon: CheckCircle,
                    type: "clôture",
                    details: [
                        "Bilan de la journée",
                        "Préparation du jour 2"
                    ]
                }
            ]
        },
        {
            id: 2,
            day: "Jour 2",
            title: "Exploration, entrepreneuriat et innovation",
            subtitle: "Exportation et développement",
            icon: Rocket,
            color: "from-raf-red to-red-600",
            sessions: [
                {
                    time: "09h00 - 11h00",
                    title: "Atelier spécialisé",
                    description: "Thème : Comment exporter sa marchandise au Canada",
                    icon: Globe,
                    type: "atelier",
                    details: [
                        "Normes, certifications et conformité",
                        "Logistique, douanes et conformité",
                        "Accès aux marchés et réseaux de vente"
                    ]
                },
                {
                    time: "11h00 - 11h15",
                    title: "Pause café",
                    description: "Moment de détente et d'échanges",
                    icon: Coffee,
                    type: "pause",
                    details: ["Networking informel"]
                },
                {
                    time: "11h15 - 12h45",
                    title: "Formation certifiante - Module 1",
                    description: "Utilisation de l'intelligence artificielle comme levier de développement des affaires",
                    icon: Target,
                    type: "formation",
                    details: [
                        "Outils d'IA pour le marketing, la prospection et la gestion",
                        "Applications pratiques adaptées au marché canadien"
                    ]
                },
                {
                    time: "12h45 - 14h00",
                    title: "Déjeuner",
                    description: "Repas et réseautage",
                    icon: Coffee,
                    type: "réseautage",
                    details: ["Échanges interprofessionnels"]
                },
                {
                    time: "14h00 - 15h30",
                    title: "Atelier entrepreneuriat",
                    description: "Création et développement d'entreprise",
                    icon: Briefcase,
                    type: "atelier",
                    details: [
                        "Création et structuration d'entreprise",
                        "Modèle d'affaires et financement",
                        "Stratégies de croissance"
                    ]
                },
                {
                    time: "15h30 - 16h30",
                    title: "Atelier repreneuriat",
                    description: "Reprise et transmission d'entreprise au Canada",
                    icon: TrendingUp,
                    type: "atelier",
                    details: [
                        "Opportunités et procédures",
                        "Aspects juridiques et financiers"
                    ]
                },
                {
                    time: "16h30 - 18h00",
                    title: "Session thématique",
                    description: "Culture d'affaires au Québec",
                    icon: Users,
                    type: "conférence",
                    details: [
                        "Comprendre la culture professionnelle et entrepreneuriale québécoise",
                        "Styles de communication en affaires",
                        "Relations employeur-employés",
                        "Attentes des partenaires",
                        "Bonnes pratiques"
                    ]
                }
            ]
        },
        {
            id: 3,
            day: "Jour 3",
            title: "Démarrage d'entreprise et perspectives",
            subtitle: "Implantation et développement",
            icon: Award,
            color: "from-raf-gold to-yellow-500",
            sessions: [
                {
                    time: "09h00 - 10h30",
                    title: "Atelier pratique",
                    description: "Démarrage d'entreprise au Québec/Canada",
                    icon: Target,
                    type: "atelier",
                    details: [
                        "Étapes clés du lancement",
                        "Programmes d'accompagnement",
                        "Ressources institutionnelles"
                    ]
                },
                {
                    time: "10h30 - 11h00",
                    title: "Pause-café",
                    description: "Moment de réseautage",
                    icon: Coffee,
                    type: "pause",
                    details: ["Échanges et networking"]
                },
                {
                    time: "11h00 - 12h30",
                    title: "Rencontres ciblées B2B",
                    description: "Sessions de networking stratégique",
                    icon: Handshake,
                    type: "b2b",
                    details: [
                        "Partenaires commerciaux",
                        "Institutions et consultants"
                    ]
                },
                {
                    time: "12h30 - 14h00",
                    title: "Déjeuner de réseautage",
                    description: "Repas d'affaires final",
                    icon: Coffee,
                    type: "réseautage",
                    details: ["Dernières opportunités de networking"]
                },
                {
                    time: "14h00 - 15h20",
                    title: "Session de synthèse et clôture",
                    description: "Bilan et perspectives",
                    icon: CheckCircle,
                    type: "synthèse",
                    details: [
                        "Bilan de la mission",
                        "Retombées et prochaines étapes",
                        "Opportunités d'accompagnement post-mission"
                    ]
                }
            ]
        }
    ];

    return (
        <section id="program-mission-ccca"
            ref={sectionRef}
            className="relative py-12 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
        >
            {/* Arrière-plan décoratif */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-raf-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-raf-red/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-raf-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="relative container mx-auto px-[5%]">

                {/* En-tête */}
                <div className={`max-w-5xl mx-auto text-center mb-20 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`}>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-raf-blue/10 to-raf-red/10 backdrop-blur-sm px-6 py-3 rounded-full border border-raf-blue/20 mb-8">
                        <Calendar className="w-5 h-5 text-raf-blue" />
                        <span className="text-sm font-semibold text-raf-blue uppercase tracking-wider">
                            Programme détaillé
                        </span>
                    </div>

                    {/* Titre principal */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8">
                        Programme des{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-raf-blue via-raf-red to-raf-blue bg-clip-text text-transparent">
                                Missions CCCA
                            </span>
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-raf-blue via-raf-red to-raf-blue rounded-full" />
                        </span>
                    </h2>

                    {/* Informations */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-gray-200 max-w-3xl mx-auto mb-8">
                        <div className="">
                            {/* <div className="flex items-center gap-4">
                                <div className="p-3 bg-raf-blue/10 rounded-xl">
                                    <Calendar className="w-6 h-6 text-raf-blue" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600">Dates</div>
                                    <div className="text-lg font-bold text-raf-dark">25 – 27 Mai 2026</div>
                                </div>
                            </div> */}
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-raf-red/10 rounded-xl">
                                    <MapPin className="w-6 h-6 text-raf-red" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600">Lieu</div>
                                    <div className="text-lg font-bold text-raf-dark">CCCA, 257 Sherbrooke Est, Montréal</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        Un programme intensif de 3 jours conçu pour vous accompagner dans votre
                        implantation au Canada, avec des ateliers pratiques, des visites d'entreprises
                        et des rencontres B2B stratégiques.
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">

                    {/* Colonne de navigation */}
                    <div className={`lg:col-span-1 ${isVisible ? 'animate-fadeIn delay-200' : 'opacity-0'}`}>
                        <div className="sticky top-24 space-y-6">

                            <div className="bg-gradient-to-br from-raf-blue/5 to-raf-red/5 rounded-3xl p-6">
                                <h3 className="text-2xl font-bold text-raf-dark mb-3">
                                    Sélection du jour
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Naviguez entre les 3 jours du programme
                                </p>
                            </div>

                            {/* Navigation des jours */}
                            <div className="space-y-4">
                                {missionDays.map((day, index) => {
                                    const Icon = day.icon;
                                    const isActive = activeDay === index;

                                    return (
                                        <button
                                            key={day.id}
                                            onClick={() => {
                                                setActiveDay(index);
                                                setActiveSession(0);
                                            }}
                                            className={`
                        w-full flex items-center gap-4 p-5 rounded-2xl
                        transition-all duration-300 transform
                        ${isActive
                                                    ? 'bg-white shadow-xl scale-102 border-2 border-transparent'
                                                    : 'bg-white/50 hover:bg-white hover:shadow-card hover:scale-102 border border-gray-200'
                                                }
                      `}
                                        >
                                            {/* Numéro du jour */}
                                            <div className={`
                        w-12 h-12 rounded-xl flex items-center justify-center
                        transition-all duration-300
                        ${isActive
                                                    ? 'bg-gradient-to-br ' + day.color + ' text-white'
                                                    : 'bg-gray-100 text-gray-600'
                                                }
                      `}>
                                                <span className="font-bold text-lg">{day.id}</span>
                                            </div>

                                            {/* Contenu */}
                                            <div className="text-left flex-1">
                                                <div className="flex items-center justify-between">
                                                    <span className={`text-sm font-semibold ${isActive ? 'text-raf-blue' : 'text-gray-600'}`}>
                                                        {day.day}
                                                    </span>
                                                    {isActive && (
                                                        <div className="w-2 h-2 bg-raf-gold rounded-full animate-pulse" />
                                                    )}
                                                </div>
                                                <h4 className={`font-bold mt-1 ${isActive ? 'text-raf-dark' : 'text-gray-800'}`}>
                                                    {day.title}
                                                </h4>
                                                <p className={`text-xs mt-1 ${isActive ? 'text-gray-700' : 'text-gray-600'}`}>
                                                    {day.date}
                                                </p>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Points clés */}
                            <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-200">
                                <h4 className="text-lg font-bold text-raf-dark mb-4 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-raf-gold" />
                                    Inclus dans le programme
                                </h4>
                                <div className="space-y-3">
                                    {[
                                        "Visites d'entreprises industrielles",
                                        "Ateliers pratiques spécialisés",
                                        "Formations certifiantes",
                                        "Rencontres B2B ciblées",
                                        "Déjeuners d'affaires",
                                        "Attestation de participation"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-raf-blue rounded-full mt-2 flex-shrink-0" />
                                            <span className="text-sm text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Colonne du programme détaillé */}
                    <div className={`lg:col-span-3 ${isVisible ? 'animate-fadeIn delay-300' : 'opacity-0'}`}>

                        {/* En-tête du jour */}
                        <div className={`mb-8 p-8 rounded-3xl bg-gradient-to-r ${missionDays[activeDay].color} text-white shadow-lg`}>
                            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        {/* <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                                            <missionDays[activeDay].icon className="w-8 h-8" />
                                        </div> */}
                                        <div>
                                            <div className="text-sm font-semibold uppercase tracking-wider opacity-90">
                                                {missionDays[activeDay].day}
                                            </div>
                                            <h3 className="text-3xl font-bold mt-1">
                                                {missionDays[activeDay].title}
                                            </h3>
                                            <p className="text-white/90 mt-1">
                                                {missionDays[activeDay].subtitle} • {missionDays[activeDay].date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                        <Clock className="w-4 h-4" />
                                        <span className="font-semibold">{missionDays[activeDay].sessions.length} sessions</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Timeline des sessions */}
                        <div className="relative">
                            {/* Ligne de timeline */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-raf-blue via-raf-red to-raf-gold" />

                            {/* Sessions */}
                            <div className="space-y-6 ml-12">
                                {missionDays[activeDay].sessions.map((session, index) => {
                                    const Icon = session.icon;
                                    const isActive = activeSession === index;

                                    return (
                                        <div
                                            key={index}
                                            onClick={() => setActiveSession(index)}
                                            className={`
                        relative group cursor-pointer
                        ${isActive ? 'z-10' : ''}
                      `}
                                        >
                                            {/* Point sur la timeline */}
                                            <div className={`
                        absolute -left-[3.1rem] top-6 w-4 h-4 rounded-full border-4
                        transition-all duration-300
                        ${isActive
                                                    ? 'bg-white border-white scale-125'
                                                    : 'bg-white border-gray-300 group-hover:border-raf-blue'
                                                }
                      `}>
                                                <div className={`
                          absolute inset-0 rounded-full
                          transition-all duration-300
                          ${isActive
                                                        ? 'bg-gradient-to-br ' + missionDays[activeDay].color
                                                        : 'bg-gray-300 group-hover:bg-raf-blue'
                                                    }
                        `} />
                                            </div>

                                            {/* Carte de session */}
                                            <div className={`
                        bg-white rounded-2xl p-6 border-2
                        transition-all duration-300 transform
                        ${isActive
                                                    ? 'border-raf-blue shadow-xl scale-102'
                                                    : 'border-gray-200 hover:border-raf-blue/50 hover:shadow-card hover:scale-102'
                                                }
                      `}>
                                                <div className="flex flex-col sm:flex-row sm:items-start gap-4">

                                                    {/* Horaires */}
                                                    <div className={`
                            flex-shrink-0 sm:w-32 text-center p-3 rounded-xl
                            transition-all duration-300
                            ${isActive
                                                            ? 'bg-gradient-to-br ' + missionDays[activeDay].color + ' text-white'
                                                            : 'bg-gray-100 text-gray-700 group-hover:bg-gray-200'
                                                        }
                          `}>
                                                        <div className="font-bold text-lg">{session.time}</div>
                                                        <div className="text-xs font-medium mt-1 uppercase">
                                                            {session.type}
                                                        </div>
                                                    </div>

                                                    {/* Contenu */}
                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between gap-4">
                                                            <div className="flex-1">
                                                                <div className="flex items-center gap-3 mb-3">
                                                                    <div className={`p-2 rounded-lg ${isActive ? 'bg-raf-blue/10' : 'bg-gray-100'}`}>
                                                                        <Icon className={`w-5 h-5 ${isActive ? 'text-raf-blue' : 'text-gray-600'}`} />
                                                                    </div>
                                                                    <h4 className={`text-xl font-bold ${isActive ? 'text-raf-dark' : 'text-gray-900'}`}>
                                                                        {session.title}
                                                                    </h4>
                                                                </div>

                                                                <p className="text-gray-600 mb-4">
                                                                    {session.description}
                                                                </p>

                                                                {/* Détails */}
                                                                {isActive && session.details && (
                                                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                                                        <h5 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                                                            <ChevronRight className="w-4 h-4 text-raf-blue" />
                                                                            Contenu détaillé
                                                                        </h5>
                                                                        <ul className="space-y-2">
                                                                            {session.details.map((detail, detailIndex) => (
                                                                                <li key={detailIndex} className="flex items-start gap-2">
                                                                                    <div className="w-1.5 h-1.5 bg-raf-blue rounded-full mt-2 flex-shrink-0" />
                                                                                    <span className="text-gray-700">{detail}</span>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                )}
                                                            </div>

                                                            {/* Indicateur */}
                                                            <ChevronRight className={`
                                w-5 h-5 flex-shrink-0 mt-1
                                transition-transform duration-300
                                ${isActive ? 'rotate-90 text-raf-blue' : 'text-gray-400'}
                              `} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// programme des missions de la ccca

// jour 1 - Immersion industrielle et environnement d'affaire.
// 08h30-9h00: accueil des participants et briefing de la mission .
// 09h00-12h30: visite d'entreprise indutrielles cibleels
// . Secteurs manufacturier et transformation
// . Agroalimentataire
// . Industries minieres
// . btp/construction
// . engins et maritimes
// . technologies et innovation
// . transformation du bois
// . aerospatiaux
// Rencontre avec les dirigeants et responsables operationnels
// 12h30-14h00: dejeuner d'affaire avec les entreprises visitees
// 14h00-16h00: session d'information
// Theme: comment ouvrir une filliale au canada/quebec
// . cadre juridique et reglementaire
// . choix de la structure d'implatation
// . aspects fiscaux et administratifs
// 16h00-17h30: Atelier pratique
// theme: compendre l'ecosysteme entrepreneurial canadien
// 18h00: fin des activites de la journee


// jour 2 -Exploration, entrepreneuriat et innovation
// 9h00-11h00: Atelier specialiser
// Theme: Cmment exporter sa marchandise au canada
// . norme, certification et conformiter
// . logistique, douanes et conformiter
// . acces aux marchers et reseaux de vente
// 11h00-11h15: pause
// 11h15-12h45: formation certifiant
// module 1: utilisation de l'inteligence artificielle comme levier
// de developpement des affaires
// . outils d'ia pour marketing, la prospection et la gestion
// . application pratiques adaptees au marcher canadien
// 12h45-14h00: Dejeuner
// 14h00-15h30: atelier Entrepreneurieat
// . Creation et structuration d'entreprise
// . Modele d'affaire et financement
// . strategies de croissance
// 15h30-16h30: Atelier repreneuriat
// . reprise et transmission d'entreprise au canada
// . opportunites et procedures
// . aspects juridiques et financiers
// 16h30-18h00: session thematique : culture d'affaire au quebec
// . comprendre la culture professionnelle et entrepreneuriale quebecoise
// . les styles de communication en affaires (formates, negocian, suivi)
// . les relations employeur-employes et le menagement au quebec
// . les attentes des partenaires, clients et institutions canadiennes
// . Erreurs frequentes a eviter et bonnes pratiques pour reussir


// jour 3 - demarrage d'entreprise et perspectives
// 09h00 - 10h30: Atelier pratique
// theme : demarage d'entreprise au quebec/canada
// . etapes cles du lancement
// . programme d'accompgnement
// . ressource institutionnelles
// 10h30-11h00: pause-cafe
// 11h00-12h30: rencontre ciblees b2b
// . partenaires commerciaux
// . institutions et consultant
// 12h30-14h00: dejeuner de reseautage
// 14h00-15h00: session de synthese et cloture
// . bilant de la mission
// . retombees et prochaines etapes
// .opportunites d'accompagnement post-mission
// 15h00-15h20: remise des attestations de participation
// cloture officielle des missions cca nunero 2