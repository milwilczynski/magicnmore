import { Mona_Sans, Montserrat } from "next/font/google";

// export const fontKindAvenue = localFont({
//   src: "../public/fonts/Kind-Avenue.woff2",
// });

export const fontSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

//Figtree, DM Sans, Mona Sans, Sen

export const fontMono = Montserrat({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontBase = Montserrat({
  subsets: ["latin"],
  variable: "--font-base",
});
