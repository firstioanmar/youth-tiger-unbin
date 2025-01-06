import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import { useEffect } from 'react';
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pelatihan Sepak Bola Anak di Bogor - Youth Tiger Soccer School",
  description: "Pelatihan sepak bola terbaik untuk anak-anak dan remaja di Bogor. Kembangkan keterampilan sepak bola, fisik, dan mental dengan program kami.",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-L7NVYJ00WM');
  }, []);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" />
        {/* Google Tag Manager */}
        <Script
          id="gtag"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-L7NVYJ00WM`}
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L7NVYJ00WM');`}
        </Script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
