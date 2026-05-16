import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MZTH Estudio | Estudio de Streaming y Podcast Profesional',
  description: 'Estudio profesional equipado para podcasts, streaming y creación de contenido. Micrófonos profesionales, cámaras Full HD, iluminación y operador técnico incluido.',
  keywords: ['estudio streaming', 'podcast', 'MZTH', 'contenido', 'streaming', 'twitch', 'youtube'],
  authors: [{ name: 'MZTH Estudio' }],
  openGraph: {
    title: 'MZTH Estudio | Streaming & Podcast',
    description: 'Creamos el espacio. Vos creás el contenido.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable} bg-[#050505]`}>
      <body suppressHydrationWarning className="font-sans antialiased bg-[#050505] text-[#F5F5F5] overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
