import "@workspace/ui/styles/globals.css";
import { Providers } from "@/components/providers";
import "./global.css";
import { fontMono, fontSans } from "@/lib/font-loader";
import { NavbarSection } from "@/components/navigation";
import FooterSection from "@workspace/ui/components/footer";
import { Logo } from "@/components/logo";
import { AnnouncementBar } from "@workspace/ui/components/announcement-bar";
import { hasLocale } from "next-intl";
import { routing } from "@/lib/i18n/routing";
import { notFound } from "next/navigation";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <Providers locale={locale}>
          <NavbarSection />
          <AnnouncementBar />
          {children}
          <FooterSection>
            <Logo
              companyProps={{
                withCompany: true,
                companyClassNames: "text-base",
              }}
              size={64}
            />
          </FooterSection>
        </Providers>
      </body>
    </html>
  );
}
