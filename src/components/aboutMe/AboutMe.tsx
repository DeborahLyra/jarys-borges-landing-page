export function AboutMe() {
    return (
        <div className="p-8 w-full bg-pureWhite" id="aboutMe">
            <section className="mb-6">
                <h2 className="font-bold text-2xl mb-4 text-center sm:text-left">Sobre Mim</h2>
            </section>

            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-around">
               
                <section className="max-w-full sm:max-w-96 mb-6 sm:mb-0 px-4">
                    <article className="mb-6">
                        <h4 className="font-semibold text-lg text-gray-700">Graduação</h4>
                        <p className="text-gray-600">Faculdade de Filosofia do Recife (FAFIRE)</p>
                    </article>

                    <article>
                        <h4 className="font-semibold text-lg text-gray-700">Especializações</h4>
                        <ul className="list-inside text-gray-600 space-y-2">
                            <li>Psicologia Clínica</li>
                            <li>Formação em Terapia Sexual pela Sociedade Brasileira de Estudos em Sexualidade Humana (SBRASH)</li>
                            <li>Pós Graduação em Sexualidade Humana pela UNICAP</li>
                            <li>Curso de Terapia Sexual numa Abordagem Multidisciplinar, H. Ellis - São Paulo</li>
                            <li>Curso de Terapia Sexual pelo Instituto Paulista de Sexualidade Humana</li>
                            <li>Terapia de Casal numa Abordagem Cognitivo-comportamental (UNICAP)</li>
                        </ul>
                    </article>
                </section>

                <div className="hidden sm:block w-1 h-96 bg-skyBlue"></div>

                <section className="max-w-full sm:max-w-96 px-4">
                    <h3 className="font-semibold text-lg text-gray-700">Atuação</h3>
                    <article>
                        <ul className="list-inside text-gray-600 space-y-2">
                            <li>Atualmente faço parte da equipe Andros Recife, onde atuo como terapeuta sexual numa abordagem multiprofissional</li>
                            <li>Fui Delegada Estadual da SBRASH em três Gestões</li>
                            <li>Membro da ABEMSS - Associação Brasileira de Estudos em Medicina e Saúde Sexual</li>
                            <li>Atuei como Psicóloga Clínica (crianças, adolescentes e adultos) durante 27 anos no Ambulatório do Hospital João Murilo-Secretaria de Saúde/PE</li>
                            <li>Participei como palestrante em vários eventos, cursos e congressos com a temática referente à sexualidade humana</li>
                        </ul>
                    </article>
                </section>
            </div>
        </div>
    );
}
