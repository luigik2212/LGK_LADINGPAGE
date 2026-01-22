import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LGK Locadora | Aluguel de carros rápido e seguro",
  description:
    "LGK Locadora oferece reservas online, contrato digital e frota nova para viagens e trabalho. Alugue seu carro em minutos.",
  openGraph: {
    title: "LGK Locadora | Aluguel de carros rápido e seguro",
    description:
      "Reserva online, contrato digital e retirada rápida com frota revisada e suporte 24/7.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
