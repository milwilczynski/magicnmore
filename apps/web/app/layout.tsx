import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import "./global.css";
import { fontMono, fontSans } from "@/lib/font-loader";
import { NavbarSection } from "@/components/navigation";
import FooterSection from "@workspace/ui/components/footer";
import { Logo } from "@/components/logo";
import { AnnouncementBar } from "@workspace/ui/components/announcement-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        {/*<div className={"w-full h-full bg-gradient-local absolute"} />*/}
        {/*<div className={"contain-layout absolute w-full min-h-full"}>*/}
        <Providers>
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
