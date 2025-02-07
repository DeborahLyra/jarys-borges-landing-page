export function AboutMe() {
    return (
        <div className="p-8 w-full bg-pureWhite" id="aboutMe">
            <section className="mb-6">
                <h2 className="font-bold text-2xl mb-4 text-deepBlue text-center sm:text-left">Sobre Mim</h2>
            </section>

            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-around">

                <section className="max-w-full sm:max-w-96 mb-6 sm:mb-0 px-4">
                    <p className="">
                        <span className="text-steelBlue font-bold">Sou Urologista e Andrologista. </span>
                        Me dedico aos cuidados com a saúde masculina há mais de 15 anos. Sou especialista em Infertilidade Masculina e Reprodução Humana, Doença de Peyronie, Disfunção Erétil, Vasectomia e sua Reversão.
                        Atendo em Recife e em Caruaru, e também faço consultas online.
                        Presidente 2024-2025 da SBU-PE (Sociedade Brasileira de Urologia, Seccional Pernambuco).
                        Venho frequentando congressos de Medicina Sexual, com oportunidade de palestrar e apresentar trabalhos em alguns deles, além de revisar e de participar em algumas publicações de artigos científicos.
                    </p>
                    <strong className="block mt-4 text-lg text-steelBlue">Járys Borges Cabral Júnior</strong>
                    <span className="block sm:max-w-96 mb-6 sm:mb-0">CRM 14407-PE | RQE 12218</span>

                </section>

                <div className="hidden sm:block w-1 h-96 bg-softGray"></div>

                <section className="max-w-full sm:max-w-96 px-4">
                    <h3 className="font-semibold text-lg text-gray-700">Currículo</h3>
                    <article>
                        <ul className="list-inside text-gray-600 space-y-1">
                            <li className="text-steelBlue font-bold">Membro da International Society of Sexual Medicine</li>
                            <li>Membro do Comitê Científico da ABEMSS (Associação Brasileira de Estudos em Medicina e Saúde Sexual)</li>
                            <li>Coordenador da Residência de Urologia do Hospital Universitário Oswaldo Cruz (UPE)</li>
                        </ul>
                    </article>
                    <article className="pt-4">
                        <h3 className="font-semibold text-lg text-gray-700">Currículo</h3>
                        <ul className="list-inside text-gray-600 space-y-1">
                            <li>Graduação pela UFPE (2002)</li>
                            <li>Residência de Urologia no Hospital Getulio Vargas (2006-2009)</li>
                            <li>Fellow of the Multidisciplinary Joint Committee of Sexual Medicine em 2020 (Sociedade Européia de Medicina Sexual)</li>
                        </ul>
                    </article>
                </section>
            </div>
        </div>
    );
}
