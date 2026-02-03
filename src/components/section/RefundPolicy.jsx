const RefundPolicy = () => {
    return (
        <section className="bg-raf.light py-16">
            <div className="container max-w-4xl">
                <div className="bg-white rounded-3xl shadow-card p-8 md:p-12 animate-slideUp">

                    {/* Titre */}
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-raf.dark mb-6">
                        Politique de remboursement
                    </h2>

                    {/* Introduction */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                        La présente politique de remboursement s’applique aux événements suivants :
                    </p>

                    <ul className="list-disc list-inside text-gray-700 mb-8">
                        <li>Le Rendez-vous d’affaires de la Francophonie de Québec (RAF)</li>
                        <li>Les Missions économiques de la Chambre de commerce Canada–Afrique (CCCA)</li>
                    </ul>

                    {/* Section 1 */}
                    <h3 className="font-heading text-xl font-bold text-raf.dark mb-4">
                        1. Rendez-vous d’affaires de la Francophonie de Québec (RAF)
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Un remboursement des frais d’inscription est possible jusqu’à <strong>21 jours avant le début de l’événement</strong>,
                        sous réserve des conditions suivantes :
                    </p>

                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                        <li>
                            Des frais de billetterie de <strong>6 % par inscription</strong> seront automatiquement déduits du montant remboursé ;
                        </li>
                        <li>
                            Le remboursement sera effectué <strong>exclusivement sur la même carte de crédit utilisée lors de l’inscription</strong> ;
                        </li>
                        <li>
                            <strong>Aucun remboursement ne sera accordé après le 20 avril 2026</strong>,
                            quelle qu’en soit la raison, y compris en cas de refus de visa,
                            d’empêchement administratif ou personnel.
                        </li>
                    </ul>

                    {/* Section 2 */}
                    <h3 className="font-heading text-xl font-bold text-raf.dark mb-4">
                        2. Missions économiques de la CCCA (toutes éditions)
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Concernant les Missions économiques organisées par la Chambre de commerce Canada–Afrique (CCCA),
                        veuillez noter que :
                    </p>

                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                            <strong>Les frais d’inscription sont strictement non remboursables</strong> ;
                        </li>
                        <li>
                            Cette politique s’applique <strong>y compris en cas de refus de visa</strong>,
                            de retard administratif ou de tout autre empêchement personnel ou institutionnel.
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default RefundPolicy;
