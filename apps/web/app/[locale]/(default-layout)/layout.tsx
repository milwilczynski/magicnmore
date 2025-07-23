import React from "react";
import { NavbarSection } from "@/components/navigation";
import { AnnouncementBar } from "@workspace/ui/components/announcement-bar";
import FooterSection from "@workspace/ui/components/footer";
import { Logo } from "@/components/logo";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
    </>
  );
}
