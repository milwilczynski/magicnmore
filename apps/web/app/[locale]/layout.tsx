import React from "react";
import "@workspace/ui/styles/globals.css";
import "./global.css";
import { fontMono, fontSans } from "@/lib/font-loader";
import { hasLocale } from "next-intl";
import { routing } from "@/lib/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import {
  ClientSideProviders,
  ServerSideProviders,
} from "@/components/providers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

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
            {children}
          </ClientSideProviders>
        </ServerSideProviders>
      </body>
    </html>
  );
}
