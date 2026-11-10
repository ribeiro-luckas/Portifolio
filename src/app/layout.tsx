import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeToggle } from "@/components/theme-toggle";
import { initialThemeScript } from "@/lib/theme";
import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfólio profissional | Em preparação",
  description: "Fundação visual do portfólio profissional.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initialThemeScript }} />
      </head>
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
