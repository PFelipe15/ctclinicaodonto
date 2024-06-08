/* eslint-disable react/no-unescaped-entities */
'use client'
import Autoplay from "embla-carousel-autoplay"
import Logo from "../../app/assets/LogoQualidadeAlta.jpg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext
} from "@/components/ui/carousel"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
 export default function CarrouselBannerMain() {

    const plugin = React.useRef(
        Autoplay({ delay: 20000 })
    )

    // const Card1 = () => (
    //     <section className="bg-cover bg-center bg-no-repeat bg-banner flex flex-col items-center justify-center h-screen md:h-[100vh] w-full transition-all text-white">
    //         <div className="flex flex-col gap-4 font-extrabold rounded-lg">
    //             <div className="flex flex-col gap-4 items-center md:items-baseline">
    //                 <div className="flex items-center justify-center md:flex-row md:gap-4">
    //                     <div className="bg-primary flex items-center flex-col right-3 px-4 rounded-md">
    //                         <div className="flex gap-4 items-center justify-center">
    //                             <Image
    //                                 src={Logo}
    //                                 width={120}
    //                                 height={120}
    //                                 alt="Logo"
    //                                 className="rounded-md w-[120px] h-[120px] md:w-[100px] md:h-[100px]"
    //                             />
    //                             <h1 className="font-bold hidden rounded-md md:block text-white md:text-7xl">
    //                                 Clinica CT
    //                             </h1>
    //                         </div>
    //                         <h1 className="max-w-[95vw] md:max-w-[1200px] p-4 animate-typing text-white rounded-md transition-all">
    //                             Gerenciando seu sorriso.
    //                         </h1>
    //                     </div>
    //                 </div>
    //                 <div className="flex gap-4 jus flex-col">
    //                     <p className="text-2xl md:text-5xl bg-white max-w-[95vw] md:max-w-[1200px] p-4 animate-typing text-primary rounded-md transition-all">
    //                         A Clinica CT oferece uma ampla gama de serviços odontológicos para garantir a sua saúde bucal. Nossa equipe é formada por especialistas altamente qualificados.
    //                     </p>
    //                     <Link href="/clinica" className="animate-fadeIn opacity-0">
    //                         <Button className="bg-primary font-semibold text-white">
    //                             Ver mais
    //                         </Button>
    //                     </Link>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // );

    const comments = [
        "A Clinica CT transformou meu sorriso. O atendimento é excelente e os profissionais são muito competentes. - Maria S.",
        "Estou muito satisfeita com o atendimento e os resultados dos tratamentos. - João P.",
        "A equipe é muito atenciosa e qualificada. Recomendo a todos! - Ana L.",
        "Serviço de primeira qualidade. Ambiente limpo e acolhedor. - Carlos M.",
        "Ótimos profissionais e atendimento diferenciado. - Beatriz T."
    ];

    const CommentCarousel = () => (
        <Carousel       >
            <CarouselContent className="w-[90vw] md:w-[60vw]">
                {comments.map((comment, index) => (
                    <CarouselItem key={index} className="p-4">
                        <blockquote className="text-base md:text-lg text-white p-4 bg-primary rounded-md">
                            {comment}
                        </blockquote>
                    </CarouselItem>
                    
                ))}
            </CarouselContent>
                        <CarouselPrevious className="  bg-secondary  hover:bg-black -left-[50px]" />
                        <CarouselNext className="hover:bg-black -right-[50px] " />
        </Carousel>
    );

    const Card2 = () => (
        <section className="bg-cover bg-center bg-no-repeat bg-banner2 flex flex-col items-center justify-center h-screen md:h-[100vh] w-full transition-all text-white">
            <div className="flex flex-col gap-4 text-black font-extrabold rounded-lg">
                <div className="flex flex-col gap-4 items-center md:items-center">
                    <div className="bg-primary flex items-center right-3 px-4 rounded-md">
                        <Image
                            src={Logo}
                            width={120}
                            height={120}
                            alt="Logo"
                            className="rounded-md w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
                        />
                        <h1 className="font-bold hidden rounded-md md:block text-white md:text-7xl">
                            Clinica CT
                        </h1>
                    </div>
                    <h1 className="text-2xl md:text-5xl bg-white max-w-[95vw] md:max-w-[1200px] p-4 animate-typing text-primary rounded-md transition-all">
                        Somos uma clínica capacitada com diversas especialidades,
                        oferecendo cuidado especializado e excelência em cada consulta.
                    </h1>
                    <div className="w-full flex justify-center">
                        <CommentCarousel />
                    </div>
                    <Link href="/clinica" className="animate-fadeIn opacity-0">
                        <Button size={"lg"} className="bg-secondary  font-semibold text-white">
                            Ver mais
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );

    return (
      <div className="w-[100vw]">
        <Card2 />
      </div>
    );
}
