import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils"
import { Header } from "@/components/layout/header";
import { Raleway } from 'next/font/google'
import Map from "@/components/layout/map/map";
import Footer from "@/components/layout/footer";
import BackButton from "@/components/layout/backButton";
import { NavigationUrls } from "@/components/layout/navigationurls";

export const metadata: Metadata = {
  title: "Clinica CT",
  description: "Gerenciando seu sorriso.",
 
 
};
const poetsen = Raleway ({weight:[ '400', '700', '200', '500', '600'],subsets:['latin']})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen min-w-[300px]  flex flex-col   ", poetsen.className)}
      >
        <Header />
        <main className="flex flex-col container items-center  animate-fadeIn ">
          {children}
          <BackButton />
        </main>

        <Map />
        <Footer />
      </body>
    </html>
  );
}
