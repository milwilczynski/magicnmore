import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";

export const fontKindAvenue = localFont({
  src: "../public/fonts/Kind-Avenue.woff2",
});

export const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
