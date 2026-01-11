import "../public/assets/css/default.css";
import "../public/assets/css/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { barlowCondensed, hankenGrotesk } from "@/lib/font";
import type { ReactNode } from "react";
import Preloader from "@/components/elements/Preloader";

export const metadata = {
  title: "Rani Food Industries Ltd.",
  description: "Leading food and beverage company dedicated to delivering high-quality products ",
  keywords: [
    "Rani Food Industries",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${hankenGrotesk.variable}`}>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}