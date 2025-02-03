const surgeries = [
    {
        name: "Varicocele microcirúrgica ",
        description:
            "Método mais eficiente e seguro para tratar a varicocele e melhorar a fertilidade masculina"
    },
    {
        name: "Disfunções sexuais ",
        description:
            "Avaliação e tratamento da disfunção erétil (“impotência”) e dos distúrbios da ejaculação (precoce, retrógrada e anejaculação)."
    },
    {
        name: "Vasectomia",
        description:
            "Cirurgia que reconecta os ductos deferentes, restaurando a fertilidade após uma vasectomia.",
    },

    {
        name: "Reversão de Vasectomia",
        description:
            "Cirurgia para correção da curvatura peniana, quando a mesma dificulta a atividade sexual.",
    },
    {
        name: "Doença de Peyronie",
        description:
            "Cirurgia que reconecta os ductos deferentes, restaurando a fertilidade após uma vasectomia.",
    },
    {
        name: "Implante de prótese peniana",
        description:
            "Cirurgia para tratamento definitivo da disfunção erétil, com opções de próteses semirrígida ou inflável.",
    },
    {
        name: "Estética genital masculina",
        description:
            "Postectomia, engrossamento peniano e outros tratamentos para cuidar da aparência e saúde de suas partes íntimas.",
    },
    {
        name: "Infertilidade masculina",
        description:
            "Captação de espermatozoides por punção de epidídimo, Microdissecção Testicular, dentre outras técnicas em reprodução assistida",
    },

    {
        name: "Doenças testiculares",
        description:
            "Tratamento da Hidrocele, Neoplasias Testiculares, dentre outras.",
    },
   
    {
        name: "Reposição de testosterona ",
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
        <div id="surgeries" className="p-6 max-w-full">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Cirurgias</h2>
            <div className="text-center mb-6">
                <p className="text-lg text-gray-700">
                    Ofereço atendimento personalizado em consultório e tratamentos variados,
                    podendo ser cirúrgicos e não. Também posso direcionar para terapias de apoio
                    multidisciplinar.
                </p>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {surgeries.map((item) => (
                    <div
                        key={item.name}
                        className="flex-shrink-0 w-60 p-4 bg-blue-800 text-white rounded-xl shadow-md transition-transform hover:scale-105"
                    >
                        <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                        <p className="text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

