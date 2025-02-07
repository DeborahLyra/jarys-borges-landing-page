import { FacebookLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react';
import logo from "../../../public/imgs/jarys_borges_logo_footer.png"

export function Footer() {
    return (
        <footer className="bg-pureWhite text-deepBlue p-8 border-t-4 border-skyBlue">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <img src={logo} alt="" className="scale-200 h-4 w-auto mx-8"/>
                </div>

                <div className="flex justify-center gap-6">
                    <a
                        href="https://www.facebook.com/profile.php?id=100083296373694"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-deepBlue hover:bg-skyBlue transition-all"
                    >
                        <FacebookLogo
                            size={30}
                            weight="fill"
                            className="text-pureWhite group-hover:text-deepBlue transition-colors"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/jarysborges_andrologia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-deepBlue hover:bg-skyBlue transition-all"
                    >
                        <InstagramLogo
                            size={30}
                            weight="fill"
                            className="text-pureWhite  group-hover:text-deepBlue transition-colors"
                        />
                    </a>
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Whatsapp"
                        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-deepBlue hover:bg-skyBlue transition-all"
                    >
                        <YoutubeLogo
                            size={30}
                            weight="fill"
                            className="text-pureWhite  group-hover:text-deepBlue transition-colors"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
