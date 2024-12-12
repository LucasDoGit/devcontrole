import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { AuthProvider } from "@/providers/auth";

export const metadata: Metadata = {
  title: "Dev Controle - seu sistema de gerenciamento",
  description: "Gerencie seus clientes e atendimentos de forma fácil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header/>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
