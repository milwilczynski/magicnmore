import React from "react";
import "@workspace/ui/styles/globals.css";
import "./global.css";
import { fontMono, fontSans } from "@/lib/font-loader";
import { NavbarSection } from "@/components/navigation";
import FooterSection from "@workspace/ui/components/footer";
import { Logo } from "@/components/logo";
import { AnnouncementBar } from "@workspace/ui/components/announcement-bar";
import { hasLocale } from "next-intl";
import { routing } from "@/lib/i18n/routing";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getMessages } from "next-intl/server";
import {
  ClientSideProviders,
  ServerSideProviders,
} from "@/components/providers";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const session = await getServerSession(authOptions);
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <ServerSideProviders
          intlSettings={{
            locale: locale,
            messages: messages,
          }}
        >
          <ClientSideProviders session={session}>
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
          </ClientSideProviders>
        </ServerSideProviders>
      </body>
    </html>
  );
}
