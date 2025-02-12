const surgeries = [
    {
        name: "Varicocele Microcirúrgica ",
        description:
            "Método mais eficiente e seguro para tratar a varicocele e melhorar a fertilidade masculina"
    },
    {
        name: "Disfunções Sexuais ",
        description:
            "Avaliação e tratamento da disfunção erétil (“impotência”) e dos distúrbios da ejaculação (precoce, retrógrada e anejaculação)."
    },
    {
        name: "Vasectomia",
        description:
            "Procedimento para esterilização permanente. Cirurgia que impede a passagem de espermatozoides para a ejaculação.",
    },

    {
        name: "Reversão de Vasectomia",
        description:
            "Cirurgia que reconecta os ductos deferentes, restaurando a fertilidade após uma vasectomia.",
    },
    {
        name: "Doença de Peyronie",
        description:
            "Cirurgia para correção da curvatura peniana, quando a mesma dificulta a atividade sexual.",
    },
    {
        name: "Implante de Prótese Peniana",
        description:
            "Cirurgia para tratamento definitivo da disfunção erétil, com opções de próteses semirrígida ou inflável.",
    },
    {
        name: "Estética Genital Masculina",
        description:
            "Postectomia, engrossamento peniano e outros tratamentos para cuidar da aparência e saúde de suas partes íntimas.",
    },
    {
        name: "Infertilidade Masculina",
        description:
            "Captação de espermatozoides por punção de epidídimo, Microdissecção Testicular, dentre outras técnicas em reprodução assistida.",
    },

    {
        name: "Doenças Testiculares",
        description:
            "Tratamento da Hidrocele, Neoplasias Testiculares, dentre outras.",
    },
   
    {
        name: "Reposição de Testosterona ",
        description:
            "Para o tratamento de Hipogonadismo e melhora da qualidade de vida.",
    },
    {
        name: "Saúde da Próstata",
        description:
            "Avaliação de rotina da próstata, avaliação de sintomas miccionais e Tratamento cirúrgico da hiperplasia prostática benigna.",
    },
];

export function Surgeries() {
    return (
        <div className="p-6 max-w-full" id='treatments'>
            <h2 className="text-3xl font-bold text-deepBlue mb-6">Tratamentos</h2>
            <div className="text-center mb-6">
                <p className="text-lg text-steelBlue">
                    Ofereço atendimento personalizado em consultório e tratamentos variados,
                    podendo ser cirúrgico e não. Também posso direcionar para terapias de apoio
                    multidisciplinar.
                </p>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {surgeries.map((item) => (
                    <div
                        key={item.name}
                        className="flex-shrink-0 w-60 p-4 bg-deepBlue text-white rounded-xl shadow-md transition-transform hover:scale-105"
                    >
                        <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                        <p className="text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

