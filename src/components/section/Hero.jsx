import { Calendar, MapPin, ArrowRight, Sparkles, Users, Target, Globe } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroRAF26() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-raf-red via-red to-raf-blue text-white">
      {/* Arrière-plan */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[url('/images/map.jpg')] bg-cover bg-center opacity-20 scale-105"
          style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-raf-dark/95 via-primary/85 to-raf-blue/75" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22256%22 height=%22256%22 filter=%22url(%23noise)%22 opacity=%220.03%22/%3E%3C/svg%3E')] opacity-30" />
      </div>

      {/* Décorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-raf-gold/10 rounded-full blur-2xl" style={{ transform: `translate(${scrollY * 0.02}px, ${scrollY * 0.01}px)` }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] bg-raf-red/10 rounded-full blur-2xl" style={{ transform: `translate(${-scrollY * 0.02}px, ${-scrollY * 0.01}px)` }} />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 border border-white/20 rounded-3xl m-6"></div>
          <div className="absolute inset-0 border border-white/10 rounded-4xl m-12"></div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 px-[5%] py-12 sm:py-16 md:py-20">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Colonne texte */}
            <div className={`space-y-6 ${isLoaded ? 'animate-slideUp' : 'opacity-0'}`}>

              {/* Badge édition */}
              <div className="w-full">
                <div className="relative group">
                  {/* <div className="absolute -inset-1 bg-gradient-to-r from-raf-gold to-red-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div> */}

                  <div className="relative flex items-center justify-between bg-raf-dark text-raf-gold  py-2 rounded-full font-bold text-sm sm:text-base tracking-wide">
                    <img
                      src="/images/cccas.png"
                      alt="Logo"
                      className="h-40 w-auto ml-4"
                    />
                    {/* Partie gauche */}
                    <div className="flex items-center gap-2">
                      {/* <Sparkles className="w-4 h-4" /> */}

                      RAF 2026 · 3ᵉ édition
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-raf-red opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-raf-red"></span>
                      </span>
                    </div>



                  </div>
                </div>
              </div>


              {/* Titre principal */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-snug tracking-tight">
                  <span className="block bg-gradient-to-r from-white via-raf-light to-white bg-clip-text text-transparent">Rendez-vous</span>
                  <span className="block bg-gradient-to-r from-raf-light via-white to-raf-light bg-clip-text text-transparent mt-2">d'Affaires</span>
                  <span className="block text-raf-light text-2xl sm:text-3xl md:text-4xl mt-3">de la Francophonie</span>
                </h1>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl border-l-4 border-raf-gold pl-4 py-1">
                  La 3ᵉ édition du RAF26 est un événement économique incontournable pour les entrepreneurs, investisseurs et décideurs francophones, offrant des opportunités d'affaires durables au Canada.
                </p>
              </div>

              {/* Dates et lieux */}
              <div className="space-y-6 pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-raf-gold/20 rounded-lg">
                        <Calendar className="w-5 h-5 text-raf-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Dates</p>
                        <p className="text-lg font-bold mt-1">20 – 21 Mai 2026</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-raf-gold/20 rounded-lg">
                        <MapPin className="w-5 h-5 text-raf-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Lieu</p>
                        <p className="text-lg font-bold mt-1">Centre des Congrès de Québec</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* After RAF */}
                <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-1 bg-raf-red/20 rounded-lg">
                      <Users className="w-5 h-5 text-raf-red" />
                    </div>
                    <h3 className="text-xl font-bold">After RAF : Missions CCCA N°2</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm sm:text-base">
                      <Calendar className="w-4 h-4 text-raf-gold" />
                      <span className="font-medium">25 – 28 Mai 2026</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm sm:text-base">
                      <MapPin className="w-4 h-4 text-raf-gold" />
                      <span className="font-medium">CCCA, 257 Sherbrooke Est, Montréal</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Boutons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a href="https://ccca.mykajabi.com/offers/NY39Novi/checkout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-raf-red via-red-600 to-raf-red text-white font-bold text-base px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary active:scale-95">
                  <span className="relative z-10">S'inscrire au RAF26</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-raf-red via-red-600 to-raf-red rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>

                <a href="#program-mission-ccca" className="inline-flex items-center justify-center gap-3 bg-transparent backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-white font-bold text-base px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-white/10">
                  Voir le programme
                </a>
              </div>
            </div>

            {/* Colonne droite */}
            <div className={`relative ${isLoaded ? 'animate-fadeIn delay-300' : 'opacity-0'}`}>
              <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-3xl p-6 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500" style={{ transform: `translateY(${scrollY * 0.02}px)` }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-raf-gold/30 via-raf-red/30 to-raf-blue/30 rounded-3xl blur-sm opacity-50" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-raf-gold to-red-500 rounded-xl">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Pourquoi participer ?</h3>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {[{ icon: Users, text: "Rencontres B2B ciblées", desc: "Mettez en relation avec des partenaires stratégiques" },
                    { icon: Globe, text: "Opportunités d'investissement", desc: "Découvrez des projets innovants à financer" },
                    { icon: Target, text: "Accès au marché canadien", desc: "Pénétrer l'un des marchés les plus dynamiques" },
                    { icon: Sparkles, text: "Missions économiques CCCA", desc: "Bénéficiez d'un accompagnement personnalisé" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                        <div className="p-2 bg-raf-gold/20 rounded-lg group-hover:bg-raf-gold/30 transition-colors">
                          <item.icon className="w-5 h-5 text-raf-gold" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-1">{item.text}</h4>
                          <p className="text-gray-300 text-sm">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute -top-3 -right-3 w-16 h-16 bg-raf-gold/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-raf-red/20 rounded-full blur-xl"></div>
              </div>

              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-raf-blue/30 to-transparent rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
