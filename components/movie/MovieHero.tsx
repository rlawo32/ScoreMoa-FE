import { TMDB_IMAGE_BASE } from '@/constants/platforms'
import type { MovieDetail } from '@/types/movie'

interface Props { movie: MovieDetail }

export function MovieHero({ movie }: Props) {
  const posterUrl   = movie.posterPath   ? `${TMDB_IMAGE_BASE}/w500${movie.posterPath}`    : null
  const backdropUrl = movie.backdropPath ? `${TMDB_IMAGE_BASE}/w1280${movie.backdropPath}` : null

  const badges = [
    movie.director,
    movie.genres.join(' · '),
    `${movie.runtime}분`,
    `${movie.releaseDate.slice(0, 7).replace('-', '.')} 개봉`,
  ]

  return (
    <div className="relative overflow-hidden border-b border-[rgba(79,138,247,0.15)]">
      {/* 배경 블러 */}
      {(backdropUrl ?? posterUrl) && (
        <div className="absolute inset-0 z-0">
          <img src={backdropUrl ?? posterUrl!} alt=""
            className="w-full h-full object-cover blur-3xl scale-110 opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b
                          from-[#07080f]/60 via-[#07080f]/80 to-[#07080f]" />
          <div className="absolute inset-0 bg-gradient-to-r
                          from-[#07080f]/90 to-transparent" />
        </div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 py-10
                      flex gap-6 md:gap-8 items-start">
        {/* 포스터 */}
        <div className="flex-shrink-0 w-[120px] md:w-[150px] rounded-xl overflow-hidden
                        border border-[rgba(79,138,247,0.22)] bg-[#141824]
                        flex items-center justify-center aspect-[2/3] text-5xl
                        shadow-xl shadow-black/40">
          {posterUrl
            ? <img src={posterUrl} alt={movie.title} className="w-full h-auto" />
            : <span>🎬</span>
          }
        </div>

        {/* 정보 */}
        <div className="flex-1 min-w-0 pt-1">
          <h1 className="text-[28px] md:text-[32px] font-medium text-[#e8eaf2]
                         leading-tight mb-1">
            {movie.title}
          </h1>
          <p className="text-[14px] text-[#4a5068] mb-5">
            {movie.originalTitle}, {movie.year}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {badges.map(label => (
              <span key={label}
                className="text-[11px] px-3 py-1 rounded-full
                           bg-[rgba(79,138,247,0.08)] border border-[rgba(79,138,247,0.2)]
                           text-[#8b91a8]">
                {label}
              </span>
            ))}
          </div>

          <p className="text-[13px] text-[#8b91a8] leading-[1.8] max-w-lg mb-5">
            {movie.synopsis}
          </p>

          <div className="flex flex-wrap gap-2">
            {movie.cast.map(name => (
              <span key={name}
                className="text-[12px] px-3 py-1.5 rounded-full
                           bg-[rgba(79,138,247,0.07)] border border-[rgba(79,138,247,0.25)]
                           text-[#7aaeff]">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
