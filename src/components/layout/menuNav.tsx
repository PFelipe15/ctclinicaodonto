import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function MenuNav() {
  return (
    <Menubar>
      <MenubarMenu>
        <Link href={"/"}>
          <MenubarTrigger href={"/"}>Home</MenubarTrigger>
        </Link>
      </MenubarMenu>
      {/* <MenubarMenu>
        <Link href={"/about-me"}>
          <MenubarTrigger href={"/about-me"}>Quem Somos</MenubarTrigger>
        </Link>
      </MenubarMenu> */}
      <MenubarMenu>
        <Link href={"/equipe"}>
          <MenubarTrigger href={"/equipe"}>Nossa Equipe</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href={"/clinica"}>
          <MenubarTrigger href={"/clinica"}>A Clínica</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger href="/exames-tratamentos" className="flex gap-2">
          Exames e Tratamentos <ArrowDown size={20} />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Procedimentos</MenubarSubTrigger>
            <MenubarSubContent>
              <Link href={"/exames-tratamentos/tratamentos/restauracao"}>
                <MenubarItem>Restauração</MenubarItem>
              </Link>
              <Link href={"/exames-tratamentos/tratamentos/endodontia"}>
                <MenubarItem>Endodontia</MenubarItem>
              </Link>
              <Link href={"/exames-tratamentos/tratamentos/implante"}>
                <MenubarItem>Implante</MenubarItem>
              </Link>
              <Link href={"/exames-tratamentos/tratamentos/proteses"}>
                <MenubarItem>Próteses</MenubarItem>
              </Link>
              <Link href={"/exames-tratamentos/tratamentos/harmonizacao"}>
                <MenubarItem>Harmonização</MenubarItem>
              </Link>
              <Link href={"/exames-tratamentos/tratamentos/exodontia"}>
                <MenubarItem>Exodontia</MenubarItem>
              </Link>
              <Link href={"/exames-tratamentos/tratamentos/clareamento"}>
                <MenubarItem>Clareamento</MenubarItem>
              </Link>
              <Link href={"/exames-tratamentos/tratamentos/limpeza"}>
                <MenubarItem>Limpeza</MenubarItem>
              </Link>
              <Link href={"/exames-tratamentos/tratamentos/cirurgia-oral-menor"}>
                <MenubarItem>Cirurgia Oral Menor</MenubarItem>
              </Link>
            </MenubarSubContent>
          </MenubarSub>
        
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
