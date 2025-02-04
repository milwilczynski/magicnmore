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
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>
          <Navbar1 />
          {children}
        </Providers>
      </body>
    </html>
  );
}
