import { ArrowRight, Mail, Phone } from "lucide-react";

export function ContactRAF26() {
    return (
        <section className="py-12 bg-gradient-to-br from-raf-dark via-primary to-raf-blue text-white">
            <div className="container grid lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                        Contact & Inscriptions
                    </h2>
                    <p className="text-gray-300 mb-8">
                        Rejoignez la 3ᵉ édition du RAF et développez vos opportunités d’affaires
                        au Canada.
                    </p>

                    <div className="space-y-4 text-gray-200">
                        <div className="flex items-center gap-3"><Phone className="w-5 h-5" /> +237 698 616 852</div>
                        <div className="flex items-center gap-3"><Mail className="w-5 h-5" /> m.epossi@franchiseconseils.com</div>
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl p-10 rounded-4xl">
                    <h3 className="text-xl font-semibold mb-6">S’inscrire maintenant</h3>
                    <a href="https://ccca.mykajabi.com/offers/NY39Novi/checkout"
                        target="_blank"

                        rel="noopener noreferrer" className="w-full bg-raf-red py-4 rounded-2xl font-semibold flex items-center justify-center gap-2">
                        Je m’inscris au RAF26 <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
