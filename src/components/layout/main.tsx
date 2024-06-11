import * as React from "react"
import Link from "next/link"
import { Button } from "../ui/button"
 
import {   procedimentosPopulares } from "@/app/_services/services"
import Image from "next/image"
import  Tratamentos  from "./tratamentos"
import BlogMain from "./blogMain"
import CarrouselBannerMain from "./carrousel-main"
 
export function Main() { 
     return (
       <div className="flex flex-col justify-center items-center   ">
         <CarrouselBannerMain />

         <div className="flex  bg-secondary my-10 p-4 items-center flex-coll w-full justify-center     ">
           <Tratamentos />
         </div>

         <div className="max-w-[100vw] h-[400px] w-[720px]  relative flex-col    bg-banner2 bg-cover  flex items-center  justify-center  ">
           <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
           <h1 className="relative m-4 font-bold p-2 rounded-md text-center text-primary text-3xl">
             Na <span className="text-white bg-primary p-1">CLINICA CT</span>,
             seu sorriso é nossa prioridade. Cuidamos da sua saúde bucal com
             dedicação e excelência.
           </h1>
           <Link href="/clinica" className="animate-fadeIn opacity-0">
             <Button className="bg-primary font-semibold text-white">
               Ver mais
             </Button>
           </Link>{" "}
         </div>

         <div className="flex container bg-secondary text-white flex-col py-10 my-10 rounded-md items-center w-full justify-center">
           <div className="mb-4">
             <h2 className="text-4xl font-bold text-center ">
               Tratamentos Populares
             </h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full  ">
             {procedimentosPopulares.map((tratamento, index) => (
               <Link href={tratamento.link} key={index}>
                 <div
                   key={index}
                   className="flex flex-col bg-white min-h-[560px]  justify-between shadow-lg rounded-lg hover:border-2 overflow-hidden transform hover:scale-105 transition-transform duration-300 p-6"
                 >
                   <h3 className="text-2xl font-bold text-gray-800">
                     {tratamento.title}
                   </h3>
                   <p className="text-gray-600 my-4   ">
                     {tratamento.descricao}
                   </p>
                   <div className="relative   ">
                     <Image
                       src={tratamento.imagem}
                       alt="Tratamento"
                       className="rounded-lg h-full object-cover "
                     />
                   </div>
                 </div>
               </Link>
             ))}
           </div>
         </div>
       </div>
     );
  }
  