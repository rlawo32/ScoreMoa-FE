'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import type { PopularMovie } from '@/types/movie'
import { PopularPanel } from './PopularPanel'

interface Props {
  popularMovies: PopularMovie[]
}

export function HeroSearch({ popularMovies }: Props) {
  const router = useRouter()
  const [query, setQuery]             = useState('')
  const [showPopular, setShowPopular] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const doSearch = useCallback((id: string) => {
    if (!id.trim()) return
    setShowPopular(false)
    router.push(`/movie/${id.trim()}`)
  }, [router])

  const handleSelect = useCallback((movie: PopularMovie) => {
    doSearch(String(movie.id))
  }, [doSearch])

  // 외부 클릭 시 패널 닫기
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowPopular(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <section className="flex flex-col items-center w-full px-4 pt-20 pb-12">
      <h1 className="text-[52px] font-light tracking-[2px] text-[#e8eaf2] leading-none mb-1">
        Cine<span className="text-[#4f8ef7]">Score</span>
      </h1>
      <p className="text-[13px] text-[#4a5068] tracking-[0.5px] mb-9">
        왓챠 · CGV · 로튼토마토 · 팝콘 · 레터박스 · IMDb · TMDB · 메타크리틱
      </p>

      <div ref={containerRef} className="relative w-full max-w-[620px]">
        <div className={`flex items-center gap-2 bg-[#141824] rounded-full
                         px-5 py-[6px] border transition-all duration-200
                         ${showPopular
                           ? 'border-[rgba(79,138,247,0.45)] shadow-[0_0_0_3px_rgba(79,138,247,0.08)]'
                           : 'border-[rgba(79,138,247,0.22)]'
                         }`}>
          <svg className="w-[17px] h-[17px] text-[#4a5068] flex-shrink-0"
               fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>

          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && query.trim()) doSearch(query.trim())
            }}
            onFocus={() => { if (!query) setShowPopular(true) }}
            placeholder="영화 제목으로 검색하세요"
            className="flex-1 h-[42px] bg-transparent border-none outline-none
                       text-[16px] text-[#e8eaf2] placeholder:text-[#4a5068]"
          />

          {/* 인기 검색어 토글 */}
          {!query && (
            <button
              onClick={() => setShowPopular(v => !v)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5
                          rounded-full text-[11px] transition-all duration-150 whitespace-nowrap
                          ${showPopular
                            ? 'bg-[rgba(79,138,247,0.2)] text-[#7aaeff] border border-[rgba(79,138,247,0.45)]'
                            : 'bg-[rgba(79,138,247,0.08)] text-[#8b91a8] border border-[rgba(79,138,247,0.22)] hover:text-[#e8eaf2]'
                          }`}
            >
              <svg className="w-[13px] h-[13px]" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              인기 검색어
            </button>
          )}

          <button
            onClick={() => { if (query.trim()) doSearch(query.trim()) }}
            className="flex-shrink-0 h-[36px] px-[18px] bg-[#4f8ef7] hover:bg-[#7aaeff]
                       active:scale-95 text-white text-[13px] font-medium rounded-full
                       transition-all duration-150 whitespace-nowrap"
          >
            검색
          </button>
        </div>

        {showPopular && !query && (
          <PopularPanel movies={popularMovies} onSelect={handleSelect} />
        )}
      </div>
    </section>
  )
}
