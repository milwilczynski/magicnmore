"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ClientSideProviders({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <SessionProvider session={session}>{children}</SessionProvider>
    </NextThemesProvider>
  );
}
