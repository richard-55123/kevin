const RefundPolicy = () => {
    return (
        <section className="bg-raf.light py-16">
            <div className="container max-w-4xl">
                <div className="bg-white rounded-3xl shadow-card p-8 md:p-12 animate-slideUp">

                    {/* Titre */}
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-raf.dark mb-6">
                        Politique de remboursement
                    </h2>

                    {/* Contenu */}
                    <p className="text-gray-700 leading-relaxed mb-4 font-semibold text-raf.dark">
                        Veuillez noter que les frais d’inscription ne sont pas remboursables, y compris en cas de refus de visa ou de tout autre empêchement administratif ou personnel.
                    </p>

                    {/* <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                        <li>Refus de visa</li>
                        <li>Empêchement administratif</li>
                        <li>Empêchement personnel</li>
                        <li>Annulation ou non-participation du participant</li>
                    </ul> */}

                    {/* <p className="text-gray-700 leading-relaxed mb-4">
                        Une fois l’inscription validée et le paiement effectué,
                        <span className="font-semibold text-raf.dark">
                            {" "}aucune demande de remboursement ne pourra être acceptée.
                        </span>
                    </p> */}

                    {/* <p className="text-sm text-gray-500 border-t pt-4">
                        En procédant à l’inscription, le participant reconnaît avoir pris
                        connaissance de cette politique et l’accepter sans réserve.
                    </p> */}
                </div>
            </div>
        </section>
    );
};

export default RefundPolicy;
