// import "./globals.css";
import "./globals.css";

import { IBM_Plex_Sans_Arabic } from "next/font/google";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-arabic",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexSansArabic.className}>
      <body dir="rtl" className={`${ibmPlexSansArabic.variable} font-arabic`}>
        {children}
      </body>
    </html>
  );
}
