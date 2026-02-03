import { CreditCard } from "lucide-react";

export function ModalitesPayementsRAF() {
    return (
        <section className="relative py-20 bg-raf-red overflow-hidden" id="modalite">

            <div className="absolute inset-0 bg-[url('/images/city-bg.jpg')] bg-cover bg-center opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-raf-red/90 to-raf-red" />

            <div className="relative container">

                <div className="text-center mb-14 animate-slideUp">
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-raf-white tracking-wide">
                        MODALITÉS DE PAIEMENT
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto bg-raf-white rounded-4xl shadow-card p-6 md:p-10 animate-fadeIn">

                    <div className="space-y-5 text-gray-800 text-lg md:text-xl font-medium mb-14">

                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span>Frais d’inscription RAF 26 + Taxes</span>
                            <span className="font-semibold">820 USD</span>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span>Frais d’inscription Missions CCCA + Taxes</span>
                            <span className="font-semibold">820 USD</span>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span>Frais de Visa + Biométrie</span>
                            <span className="font-semibold">270 USD</span>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span>Frais de représentation</span>
                            <span className="font-semibold">600 USD</span>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span>Frais de transport</span>
                            <span className="font-semibold">535 USD <span className="text-sm text-gray-500">(optionnel)</span></span>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span>Frais de transfert de fonds</span>
                            <span className="font-semibold">200 USD</span>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span>Frais d’assistance Visa / Honoraires</span>
                            <span className="font-semibold">1 800 USD</span>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span>Frais de réservation d’hôtel (1 nuitée)</span>
                            <span className="font-semibold">Selon le choix</span>
                        </div>

                    </div>

                    <div className="border-t border-gray-200 py-8">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="text-center lg:text-left">
                                <h4 className="text-xl font-bold text-raf-dark mb-2">
                                    Prêt à participer ?
                                </h4>
                                {/* <p className="text-gray-600">
                                    Inscrivez-vous dès maintenant pour garantir votre place
                                </p> */}
                            </div>

                            {/* <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                                <a
                                    href="https://ccca.mykajabi.com/offers/NY39Novi/checkout"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-gradient-to-r from-raf-blue to-raf-red text-white font-bold px-8 py-4 rounded-xl md:rounded-2xl hover:opacity-90 transition-opacity"
                                >
                                    S'inscrire maintenant
                                </a>
                            </div> */}
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <a
                            href="https://ccca.mykajabi.com/offers/NY39Novi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="rounded-3xl border border-gray-200 shadow-soft overflow-hidden hover:scale-[1.02] transition">
                                <div className="bg-raf-red text-raf-white text-center py-4 font-bold text-lg">
                                    Frais d’inscription RAF 26 + taxes ; Frais de visa
                                </div>

                                <div className="p-6 text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-raf-dark mb-3">
                                        1 090 USD
                                    </div>
                                    <p className="text-gray-600 font-medium">
                                        Au plus tard le 05 Février 2026
                                    </p>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://ccca.mykajabi.com/offers/Lge5Rdqn/checkout"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="rounded-3xl border border-gray-200 shadow-soft overflow-hidden hover:scale-[1.02] transition">
                                <div className="bg-raf-red text-raf-white text-center py-4 font-bold text-lg px-4">
                                    Frais d’inscription Missions CCCA + Taxes
                                </div>

                                <div className="p-6 text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-raf-dark mb-3">
                                        820 USD
                                    </div>
                                    <p className="text-gray-600 font-medium">
                                        (Payable après obtention de la lettre de dépôt)
                                    </p>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://ccca.mykajabi.com/offers/BepUibHq/checkout"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="rounded-3xl border border-gray-200 shadow-soft overflow-hidden hover:scale-[1.02] transition">
                                <div className="bg-raf-red text-raf-white text-center py-4 font-bold text-lg px-4">
                                    Honoraires + frais de représentation
                                </div>

                                <div className="p-6 text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-raf-dark mb-3">
                                        3 135 USD
                                    </div>
                                    <p className="text-gray-600 font-medium">
                                        (Payable après obtention de la lettre de dépôt)
                                    </p>
                                </div>
                            </div>
                        </a>

                    </div>



                </div>
            </div>
        </section>
    );
}
