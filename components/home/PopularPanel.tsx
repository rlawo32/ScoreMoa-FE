import type { PopularMovie } from '@/types/movie'

interface Props {
  movies: PopularMovie[]
  onSelect: (movie: PopularMovie) => void
}

export function PopularPanel({ movies, onSelect }: Props) {
  return (
    <div className="absolute top-[calc(100%+6px)] left-0 right-0 z-50
                    bg-[#141824] border border-[rgba(79,138,247,0.45)]
                    rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-2 px-4 pt-3 pb-2
                      border-b border-[rgba(79,138,247,0.15)]">
        <svg className="w-[13px] h-[13px] text-[#4f8ef7]" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <span className="text-[11px] text-[#4a5068] tracking-[0.8px] uppercase">
          많이 검색한 영화
        </span>
      </div>

      {movies.map((movie, idx) => (
        <button
          key={movie.id}
          onClick={() => onSelect(movie)}
          className="w-full flex items-center gap-3 px-4 py-[9px] text-left
                     hover:bg-[rgba(79,138,247,0.08)] transition-colors
                     border-b border-[rgba(79,138,247,0.07)] last:border-0"
        >
          <span className={`text-[12px] font-medium w-[18px] text-center font-mono
                            ${idx < 3 ? 'text-[#4f8ef7]' : 'text-[#4a5068]'}`}>
            {idx + 1}
          </span>
          <span className="text-xl w-6 text-center">{movie.emoji}</span>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-medium text-[#e8eaf2] truncate">{movie.title}</p>
            <p className="text-[11px] text-[#4a5068] mt-0.5">{movie.year} · {movie.genre}</p>
          </div>
          <span className="text-[12px] font-semibold text-[#4f8ef7] font-mono">
            {movie.score}
          </span>
        </button>
      ))}
    </div>
  )
}
