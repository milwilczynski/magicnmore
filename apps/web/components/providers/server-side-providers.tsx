import React from "react";
import { IntlConfig, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export async function ServerSideProviders({
  children,
  intlSettings,
}: {
  children: React.ReactNode;
  intlSettings: IntlConfig;
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={intlSettings.locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
