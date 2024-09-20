import type { Metadata } from "next";
import { Inter_Tight } from 'next/font/google';
import "./index.scss";

export const metadata: Metadata = {
  title: "Legaplant To-Do List",
  description: "Este projeto é uma aplicação de lista de tarefas (To-Do List) desenvolvida como parte de um processo seletivo para a empresa Legaplan. A aplicação foi construída utilizando Next.js 13+ com TypeScript e SCSS para estilização.",
  icons: {
    icon: './favicon.ico',
  },
};

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={interTight.className}>
        {children}
      </body>
    </html>
  );
}
