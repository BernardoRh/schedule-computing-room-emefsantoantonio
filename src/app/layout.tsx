import type { Metadata } from "next";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./components/StyledComponentsRegistry";

import { ptBR } from '@clerk/localizations'
import { Navigation } from "./components/Navigation";

const roboto = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agendar Sala de Informática",
  description: "Site para agendamento da sala de informática da escola Santo Antônio EMEF - Rolante, RS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider localization={ptBR} >
      <html lang="pt-br">
        <body className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
          <Navigation/>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </ClerkProvider>
  );
}

