'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { TMDB_IMAGE_BASE } from '@/constants/platforms'
import type { NowPlayingMovie } from '@/types/movie'

interface Props {
  movies: NowPlayingMovie[]
}

const CARD_W = 120

export function NowPlayingCarousel({ movies }: Props) {
  const [pos, setPos]   = useState(0)
  const outerRef        = useRef<HTMLDivElement>(null)

  const slide = (dir: number) => {
    if (!outerRef.current) return
    const visible = Math.floor(outerRef.current.offsetWidth / CARD_W)
    const max     = Math.max(0, movies.length - visible)
    setPos(p => Math.max(0, Math.min(p + dir, max)))
  }

  return (
    <section className="w-full max-w-[720px] px-4 pb-20">
      <div className="flex items-center justify-between mb-[14px] px-0.5">
        <span className="text-[11px] text-[#4a5068] tracking-[1.5px] uppercase">
          지금 상영중
        </span>
        <Link href="/now-playing"
          className="text-[12px] text-[#4f8ef7] hover:text-[#7aaeff] transition-colors">
          전체 보기 →
        </Link>
      </div>

      <div ref={outerRef} className="overflow-hidden">
        <div
          className="flex gap-3 transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ transform: `translateX(-${pos * CARD_W}px)` }}
        >
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

      <div className="flex gap-2 justify-center mt-3">
        {([[-1, '이전', 'M15 19l-7-7 7-7'], [1, '다음', 'M9 5l7 7-7 7']] as const).map(
          ([dir, label, d]) => (
            <button key={label} onClick={() => slide(dir)} aria-label={label}
              className="w-7 h-7 rounded-full flex items-center justify-center
                         border border-[rgba(79,138,247,0.22)] bg-[#0e1118]
                         text-[#8b91a8] hover:bg-[#1a2030] hover:text-[#e8eaf2]
                         transition-colors">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d={d} />
              </svg>
            </button>
          )
        )}
      </div>
    </section>
  )
}

function MovieCard({ movie }: { movie: NowPlayingMovie }) {
  const posterUrl = movie.posterPath
    ? `${TMDB_IMAGE_BASE}/w185${movie.posterPath}`
    : null

  return (
    <Link href={`/movie/${movie.id}`}
      className="flex-shrink-0 w-[108px] group cursor-pointer">
      <div className="w-[108px] h-[158px] rounded-lg overflow-hidden relative
                      bg-[#141824] border border-[rgba(79,138,247,0.22)]
                      group-hover:border-[rgba(79,138,247,0.5)] transition-all duration-200
                      flex items-center justify-center text-4xl">
        {posterUrl
          ? <img src={posterUrl} alt={movie.title}
              className="w-full h-full object-cover
                         group-hover:scale-105 transition-transform duration-300" />
          : <span>{movie.emoji ?? '🎬'}</span>
        }
        <div className="absolute bottom-[5px] right-[5px]
                        bg-[rgba(7,8,15,0.82)] rounded px-[6px] py-[2px]
                        text-[11px] font-semibold text-[#7aaeff] font-mono">
          {movie.score}
        </div>
      </div>
      <p className="mt-[7px] text-[11px] text-[#8b91a8] truncate leading-snug
                    group-hover:text-[#e8eaf2] transition-colors">
        {movie.title}
      </p>
      <p className="text-[11px] text-[#4a5068] mt-0.5">{movie.year}</p>
    </Link>
  )
}
