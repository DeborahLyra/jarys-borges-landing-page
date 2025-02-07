import { ArrowDown } from '@phosphor-icons/react';
import profile from '../../../public/imgs/jarys_borges_andrologista.png';

export function Banner() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[550px] bg-gradient-to-r from-deepBlue to-skyBlue p-6 md:p-10 shadow-xl relative">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-pureWhite mb-4">Járys Borges</h1>
            <h3 className="text-2xl md:text-3xl text-skyBlue mb-6">Urologia e Andrologia</h3>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="relative">
                <img 
                    src={profile} 
                    alt="Semíramis Profile" 
                    className="h-[300px] md:h-[500px] w-auto rounded-xl shadow-lg object-cover"
                />
                <div className="absolute top-[-10px] left-[-10px] w-full h-full border-4 border-goldenBeige rounded-xl -z-10"></div>
            </div>
        </div>
        <div className="flex flex-col items-center md:absolute md:bottom-6 md:left-1/2 md:transform md:-translate-x-1/2">
            <p className="text-pureWhite text-sm md:text-base mb-2">Saiba mais</p>
            <ArrowDown size={24} className="text-pureWhite animate-bounce" />
        </div>
    </div>
    
    );
} 
