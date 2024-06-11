'use client'
import Link from 'next/link';
 import { Menubar, MenubarMenu, MenubarTrigger,   } from '@/components/ui/menubar';
import {     MenuIcon, X } from 'lucide-react';
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export default function MenuMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className="p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <MenuIcon className="h-6 w-6 text-secondary" />
      </button>
      {isMenuOpen && (
        <div className="absolute left-0 top-0   bg-white w-screen h-screen shadow-md">
          <button
            className="p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <X className="h-6 w-6 text-secondary" />
          </button>
          <Menubar className="flex font-bold text-white flex-col gap-4 items-center ">
            <MenubarMenu>
              <Link href={"/"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenubarTrigger href={"/"}>Home</MenubarTrigger>
              </Link>
            </MenubarMenu>

            <MenubarMenu>
              <Link href={"/equipe"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenubarTrigger href={"/equipe"}>Nossa Equipe</MenubarTrigger>
              </Link>{" "}
            </MenubarMenu>
            <MenubarMenu>
              <Link
                href={"/clinica"}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <MenubarTrigger href={"/clinica"}>A Clinica</MenubarTrigger>
              </Link>{" "}
            </MenubarMenu>

            <MenubarMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <MenubarTrigger href="/exames-tratamentos/tratamento">
                    Procedimentos
                  </MenubarTrigger>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex gap-4 flex-col">
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={"/exames-tratamentos/tratamentos/restauracao"}
                  >
                    <DropdownMenuItem>Restauração</DropdownMenuItem>
                  </Link>

                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={"/exames-tratamentos/tratamentos/implante"}
                  >
                    <DropdownMenuItem>Implante</DropdownMenuItem>
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={"/exames-tratamentos/tratamentos/proteses"}
                  >
                    <DropdownMenuItem>Proteses</DropdownMenuItem>
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={"/exames-tratamentos/tratamentos/harmonizacao"}
                  >
                    <DropdownMenuItem>Harmonizacao</DropdownMenuItem>
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={"/exames-tratamentos/tratamentos/exodontia"}
                  >
                    <DropdownMenuItem>Exodontia</DropdownMenuItem>
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={"/exames-tratamentos/tratamentos/clareamento"}
                  >
                    <DropdownMenuItem>Clareamento</DropdownMenuItem>
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={"/exames-tratamentos/tratamentos/limpeza"}                  >
                    <DropdownMenuItem>Limpeza</DropdownMenuItem>
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    href={"/exames-tratamentos/tratamentos/cirurgia-oral-menor"}                  >
                    <DropdownMenuItem>Cirurgia Oral Menor</DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </MenubarMenu>
          </Menubar>
        </div>
      )}
    </div>
  );
}
