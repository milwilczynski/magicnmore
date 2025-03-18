import { Montserrat } from "next/font/google";

// export const fontKindAvenue = localFont({
//   src: "../public/fonts/Kind-Avenue.woff2",
// });

export const fontSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = Montserrat({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontBase = Montserrat({
  subsets: ["latin"],
  variable: "--font-base",
});
