import { FacebookLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react';
import logo from "../../../public/imgs/logo_jarys.png"
export function Footer() {
    return (
        <footer className="bg-pureWhite text-deepBlue p-8 border-t-4 border-skyBlue">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <img src={logo} alt="" className="scale-250 h-8 w-auto mx-4"/>
                </div>

                <div className="flex justify-center gap-6">
                    <a
                        href="https://www.facebook.com/profile.php?id=100083296373694"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-skyBlue hover:bg-deepBlue transition-all"
                    >
                        <FacebookLogo
                            size={30}
                            weight="fill"
                            className="text-pureWhite group-hover:text-skyBlue transition-colors"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/semiramispradopsicologa?igsh=MWloMnl0MmFhNXg4Nw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-skyBlue hover:bg-deepBlue transition-all"
                    >
                        <InstagramLogo
                            size={30}
                            weight="fill"
                            className="text-pureWhite group-hover:text-skyBlue transition-colors"
                        />
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=5581989815885&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20Dr.%20Járys%20Borba%20"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Whatsapp"
                        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-skyBlue hover:bg-deepBlue transition-all"
                    >
                        <YoutubeLogo
                            size={30}
                            weight="fill"
                            className="text-pureWhite group-hover:text-skyBlue transition-colors"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
