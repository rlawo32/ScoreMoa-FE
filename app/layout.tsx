import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CineScore — 영화 평점 종합',
  description:
    '왓챠, CGV, 로튼토마토, 팝콘, 레터박스, IMDb, TMDB, 메타크리틱 평점을 한 화면에서',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-[#07080f] text-[#e8eaf2] antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
