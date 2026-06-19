'use client'

import Link from 'next/link'
import { useState } from 'react'

const NAV = [
  { href: '/genre',       label: '장르별 최고 평점' },
  { href: '/now-playing', label: '지금 상영중'       },
  { href: '/platforms',   label: '플랫폼 안내'       },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[52px]
                       flex items-center justify-between px-7
                       bg-[#07080f]/88 backdrop-blur-md
                       border-b border-[rgba(79,138,247,0.18)]">
      <Link href="/" className="text-lg font-medium tracking-wider text-[#e8eaf2]">
        Cine<span className="text-[#4f8ef7]">Score</span>
      </Link>

      {/* 데스크톱 */}
      <nav className="hidden md:flex gap-7">
        {NAV.map(n => (
          <Link key={n.href} href={n.href}
            className="text-[13px] text-[#8b91a8] hover:text-[#e8eaf2] transition-colors">
            {n.label}
          </Link>
        ))}
      </nav>

      {/* 모바일 햄버거 */}
      <button
        className="md:hidden text-[#8b91a8] hover:text-[#e8eaf2]"
        onClick={() => setOpen(v => !v)}
        aria-label="메뉴"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth={1.8}>
          {open
            ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          }
        </svg>
      </button>

      {/* 모바일 드롭다운 */}
      {open && (
        <div className="absolute top-[52px] left-0 right-0 md:hidden
                        bg-[#0e1118] border-b border-[rgba(79,138,247,0.18)]
                        flex flex-col py-1">
          {NAV.map(n => (
            <Link key={n.href} href={n.href}
              className="px-7 py-3 text-[13px] text-[#8b91a8]
                         hover:text-[#e8eaf2] hover:bg-[rgba(79,138,247,0.06)]"
              onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
