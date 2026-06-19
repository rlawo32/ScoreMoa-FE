import type { PlatformScores }  from '@/types/movie'
import { WatchaCard }           from './ratings/WatchaCard'
import { CgvCard }              from './ratings/CgvCard'
import { RottenTomatoesCard }   from './ratings/RottenTomatoesCard'
import { PopcornCard }          from './ratings/PopcornCard'
import { LetterboxdCard }       from './ratings/LetterboxdCard'
import { ImdbCard }             from './ratings/ImdbCard'
import { TmdbCard }             from './ratings/TmdbCard'
import { MetacriticCard }       from './ratings/MetacriticCard'

interface Props { scores: PlatformScores }

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] text-[#4a5068] tracking-[1.5px] uppercase
                  pb-[10px] border-b border-[rgba(79,138,247,0.12)] mb-[14px]">
      {children}
    </p>
  )
}

export function RatingsGrid({ scores }: Props) {
  return (
    <div>
      <SectionLabel>국내 플랫폼</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
        <WatchaCard score={scores.watcha} />
        <CgvCard    score={scores.cgv} />
      </div>

      <SectionLabel>해외 플랫폼</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <RottenTomatoesCard criticScore={scores.rt} audienceScore={scores.rtAudience} />
        <PopcornCard        score={scores.popcorn} />
        <LetterboxdCard     score={scores.letterboxd} />
        <ImdbCard           score={scores.imdb} ranking="Top 250 #27위" />
        <TmdbCard           score={scores.tmdb} />
        <MetacriticCard     criticScore={scores.metacritic} userScore={scores.metacriticUser} />
      </div>
    </div>
  )
}
