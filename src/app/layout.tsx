import type { Metadata } from 'next';
import { Inter } from "next/font/google";

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const font = Inter({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for Camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
