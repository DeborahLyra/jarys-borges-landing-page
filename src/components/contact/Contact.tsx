import image from '../../../public/imgs/jarys_borges_contact.png';
import { WhatsappLogo, MapPin, InstagramLogo} from 'phosphor-react';

const contact = [
    {
        link: "https://maps.app.goo.gl/LnjP9yiw3BTfvn137",
        icon: MapPin,
        text: 'Andros Recife: Empresarial RioMar Trade Center, Torre 3, sala 206',
    },
    {
        link: "https://maps.app.goo.gl/VgvGi1w76JvneivW9",
        icon: MapPin,
        text: 'Uroagreste: Rua Rodrigues de Abreu, nº 102, Maurício de Nassau, Caruaru',
    },
    {
        link: "https://api.whatsapp.com/send?phone=5581993169020&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20Dr.%20Járys%20Borges%20",
        icon: WhatsappLogo,
        text: 'Entre em contato pelo WhatsApp',
    },
    {
        link: "https://www.instagram.com/jarysborges_andrologia/",
        icon: InstagramLogo,
        text: 'Me siga no Instagram!',
    },
];

export function Contact() {
    return (
        <div className="relative w-full p-8 rounded-lg bg-pureWhite overflow-hidden" id="contact">
            <section className="mb-6 text-center">
                <h2 className="font-bold text-2xl mb-4 text-deepBlue text-center sm:text-left">Agende sua Consulta!</h2>
            </section>

            <section className="flex flex-col md:flex-row items-center justify-between bg-skyBlue/70 p-6 rounded-lg gap-6">
                <div className="flex flex-col gap-6">
                    {contact.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-pureWhite rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                            >
                                <IconComponent size={36} className="text-deepBlue" />
                                <p className="text-md font-semibold text-deepBlue transition-colors">
                                    {item.text}
                                </p>
                            </a>
                        );
                    })}
                </div>
                <div className="order-1 md:order-2 flex-shrink-0">
                    <img
                        src={image}
                        alt="Foto de Contato"
                        className="w-72 h-auto rounded-lg shadow-md object-cover"
                    />
                </div>
            </section>
        </div>
    );
}
