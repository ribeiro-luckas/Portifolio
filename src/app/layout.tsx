import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeToggle } from "@/components/theme-toggle";
import { seo } from "@/content/seo";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";
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

const siteUrl = getSiteUrl();
const socialImageUrl = siteUrl
  ? new URL("/social-image", siteUrl).href
  : undefined;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  applicationName: site.name,
  metadataBase: siteUrl ?? undefined,
  alternates: siteUrl ? { canonical: siteUrl.origin } : undefined,
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: seo.title,
    description: seo.description,
    url: siteUrl?.origin,
    images: socialImageUrl
      ? [
          {
            url: socialImageUrl,
            width: 1200,
            height: 630,
            alt: `Cartão do portfólio de ${site.name}`,
          },
        ]
      : undefined,
  },
  twitter: {
    card: socialImageUrl ? "summary_large_image" : "summary",
    title: seo.title,
    description: seo.description,
    images: socialImageUrl ? [socialImageUrl] : undefined,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  description: seo.description,
  sameAs: [site.githubUrl],
  ...(siteUrl ? { url: siteUrl.origin } : {}),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
