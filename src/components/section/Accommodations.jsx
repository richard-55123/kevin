import { Hotel, Star, MapPin, Wifi, Coffee, Car, Users, CheckCircle, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Accommodations() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedHotel, setSelectedHotel] = useState(0);
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

    const hotels = [
        {
            id: 1,
            name: "Hôtel Hilton Québec",
            category: "Luxe",
            stars: 5,
            price: "455,03",
            currency: "CAD + taxes",
            period: "par nuitée",
            image: '/images/hilton.jpg'
        },
        {
            id: 2,
            name: "Hôtel Du Nord",
            category: "Confort",
            stars: 4,
            price: "246,63",
            currency: "CAD + taxes",
            period: "par nuitée",
            image: '/images/nord.jpg'
        },
        {
            id: 3,
            name: "Hôtel Le Concorde",
            category: "Affaires",
            stars: 4,
            price: "268,83",
            currency: "CAD + taxes",
            period: "par nuitée",
            image: '/images/concorde.jpg'
        },
        {
            id: 4,
            name: "Les Lofts St-François",
            category: "Appartement",
            stars: 4,
            price: "308,29",
            currency: "CAD + taxes",
            period: "par nuitée",
            image: '/images/uui.jpg'
        },
        {
            id: 5,
            name: "Quality Suites Québec City",
            category: "Économique",
            stars: 3,
            price: "182,51",
            currency: "CAD + taxes",
            period: "par nuitée",
            image: '/images/suite.jpg'
        },
        {
            id: 6,
            name: "Les Lofts de la Barricade",
            category: "Luxe",
            stars: 5,
            price: "330,49",
            currency: "CAD + taxes",
            period: "par nuitée",
            image: '/images/suite2.jpg'
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-12 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
        >
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-[url('/images/hotel-bg.jpg')] bg-cover bg-center opacity-5"
                    style={{ backgroundPosition: "center 30%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-gray-50/95" />

                <div className="absolute top-0 left-0 w-96 h-96 bg-raf-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-raf-red/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative container mx-auto px-[5%]">

                <div className={`max-w-4xl mx-auto text-center mb-20 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`}>

                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-raf-blue/10 to-raf-red/10 backdrop-blur-sm px-6 py-3 rounded-full border border-raf-blue/20 mb-8">
                        <Hotel className="w-5 h-5 text-raf-blue" />
                        <span className="text-sm font-semibold text-raf-blue uppercase tracking-wider">
                            Hébergements
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8">
                        Hébergements{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-raf-blue via-raf-red to-raf-blue bg-clip-text text-transparent">
                                Suggestions
                            </span>
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-raf-blue via-raf-red to-raf-blue rounded-full" />
                        </span>
                    </h2>

                    <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        Des hébergements sélectionnés spécialement pour votre confort pendant
                        le RAF26 et les missions CCCA.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">

                    <div className={`lg:col-span-1 ${isVisible ? 'animate-fadeIn delay-200' : 'opacity-0'}`}>
                        <div className="sticky top-24 space-y-6">

                            <div className="bg-gradient-to-r from-raf-blue/5 to-raf-red/5 rounded-3xl p-6">
                                <h3 className="text-2xl font-bold text-raf-dark mb-3">
                                    Sélectionnez votre hébergement
                                </h3>
                                <p className="text-gray-600">
                                    6 options adaptées à tous les budgets
                                </p>
                            </div>

                            <div className="space-y-4">
                                {hotels.map((hotel, index) => {
                                    const isSelected = selectedHotel === index;

                                    return (
                                        <button
                                            key={hotel.id}
                                            onClick={() => setSelectedHotel(index)}
                                            className={`
                        w-full flex items-center gap-4 p-5 rounded-2xl
                        transition-all duration-300 transform
                        ${isSelected
                                                    ? 'bg-white shadow-xl scale-102 border-2 border-transparent'
                                                    : 'bg-white/50 hover:bg-white hover:shadow-card hover:scale-102 border border-gray-200'
                                                }
                      `}
                                        >


                                            <div className="text-left flex-1">
                                                <div className="flex items-center justify-between">
                                                    <h4 className={`font-bold ${isSelected ? 'text-raf-blue' : 'text-gray-800'}`}>
                                                        {hotel.name}
                                                    </h4>
                                                    {isSelected && (
                                                        <div className="w-2 h-2 bg-raf-gold rounded-full animate-pulse" />
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <div className="text-lg font-bold text-raf-red">
                                                        {hotel.price} {hotel.currency}
                                                    </div>
                                                    <div className="text-sm text-gray-500">/ nuit</div>
                                                </div>
                                                <p className="text-xs text-gray-600 mt-1">
                                                    {hotel.distance}
                                                </p>
                                            </div>

                                            <ArrowRight className={`w-5 h-5 transition-transform ${isSelected ? 'rotate-90 text-raf-blue' : 'text-gray-400'}`} />
                                        </button>
                                    );
                                })}
                            </div>


                        </div>
                    </div>

                    <div className={`lg:col-span-2 ${isVisible ? 'animate-fadeIn delay-300' : 'opacity-0'}`}>

                        <div className="relative group">

                            <div className="absolute -inset-0.5 bg-gradient-to-r from-raf-blue to-raf-red rounded-4xl blur opacity-30 group-hover:opacity-50 transition-opacity" />

                            <div className="relative bg-white rounded-4xl overflow-hidden shadow-2xl">

                                <div className="relative h-64 md:h-80 overflow-hidden">
                                    <img
                                        src={hotels[selectedHotel].image}
                                        alt={hotels[selectedHotel].name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                    <div className="absolute top-6 left-6">

                                    </div>
                                </div>

                                <div className="p-8">
                                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                                        <div className="flex-1">
                                            <h3 className="text-3xl font-bold text-raf-dark mb-4">
                                                {hotels[selectedHotel].name}
                                            </h3>


                                        </div>

                                        <div className="bg-gradient-to-r from-raf-blue/5 to-raf-red/5 rounded-3xl p-6 text-center lg:text-right">
                                            <div className="text-sm text-gray-600 mb-2">Prix par nuit</div>
                                            <div className="text-5xl font-bold bg-gradient-to-r from-raf-blue to-raf-red bg-clip-text text-transparent mb-2">
                                                {hotels[selectedHotel].price}
                                            </div>
                                            <div className="text-xl font-semibold text-gray-800">{hotels[selectedHotel].currency}</div>
                                            <div className="text-gray-600 mt-2">{hotels[selectedHotel].period}</div>
                                            <div className="text-sm text-green-600 font-semibold mt-2">
                                                ✓ {hotels[selectedHotel].taxes}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}