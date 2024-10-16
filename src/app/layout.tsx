import type { Metadata } from 'next'
import {Poppins} from 'next/font/google'
import './globals.css'
import { Navbar } from '@/shared/components/Navbar/Navbar'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '500']
})

export const metadata: Metadata = {
  title: 'Mi primera app con nextjs',
  description: 'Mi primer sitio web generado con NextJS en su version 14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
