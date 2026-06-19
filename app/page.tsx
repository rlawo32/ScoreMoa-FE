import { HeroSearch }         from '@/components/home/HeroSearch'
import { NowPlayingCarousel } from '@/components/home/NowPlayingCarousel'
import type { NowPlayingMovie, PopularMovie } from '@/types/movie'

// 실제 서비스에서는 DB / API fetch로 교체
const MOCK_NOW_PLAYING: NowPlayingMovie[] = [
  { id: 1, title: '미키 17',                          year: 2025, score: 82, posterPath: null, emoji: '🚀' },
  { id: 2, title: '28년 후',                          year: 2025, score: 88, posterPath: null, emoji: '🧟' },
  { id: 3, title: '미션 임파서블 8',                  year: 2025, score: 91, posterPath: null, emoji: '💼' },
  { id: 4, title: '썬더볼츠',                         year: 2025, score: 68, posterPath: null, emoji: '⚡' },
  { id: 5, title: '에이리언: 로물루스',               year: 2024, score: 79, posterPath: null, emoji: '👾' },
  { id: 6, title: '발렛',                             year: 2025, score: 74, posterPath: null, emoji: '🌹' },
  { id: 7, title: '캡틴 아메리카: 브레이브 뉴 월드', year: 2025, score: 63, posterPath: null, emoji: '🛡️' },
  { id: 8, title: '듄: 파트 2',                       year: 2024, score: 85, posterPath: null, emoji: '🏜️' },
]

const MOCK_POPULAR: PopularMovie[] = [
  { id: 101, title: '인터스텔라',          year: 2014, genre: 'SF',    score: 87, emoji: '🎬' },
  { id: 102, title: '기생충',             year: 2019, genre: '드라마', score: 94, emoji: '🏠' },
  { id: 103, title: '오펜하이머',          year: 2023, genre: '드라마', score: 89, emoji: '☢️' },
  { id: 104, title: '듄: 파트 2',         year: 2024, genre: 'SF',    score: 85, emoji: '🏜️' },
  { id: 105, title: '어벤져스: 엔드게임', year: 2019, genre: '액션',  score: 78, emoji: '🦸' },
  { id: 106, title: '파묘',               year: 2024, genre: '공포',  score: 76, emoji: '⛏️' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen pt-[52px] flex flex-col items-center">
      <HeroSearch popularMovies={MOCK_POPULAR} />
      <NowPlayingCarousel movies={MOCK_NOW_PLAYING} />
    </main>
  )
}
