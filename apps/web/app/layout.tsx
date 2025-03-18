import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import "./global.css";
import { fontMono, fontSans } from "@/lib/font-loader";
import { Navbar1 } from "@/components/navigation";

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
          <Navbar1 />
          {children}
        </Providers>
        {/*</div>*/}
      </body>
    </html>
  );
}
