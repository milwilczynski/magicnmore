import { Mona_Sans, Montserrat } from "next/font/google";

export const fontSans = Mona_Sans({
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
