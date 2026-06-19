export interface Movie {
  id: number
  title: string
  originalTitle: string
  year: number
  genres: string[]
  director: string
  cast: string[]
  runtime: number
  synopsis: string
  posterPath: string | null
  backdropPath: string | null
  releaseDate: string
}

export interface PlatformScores {
  watcha: number | null
  cgv: number | null
  rt: number | null
  rtAudience: number | null
  popcorn: number | null
  letterboxd: number | null
  imdb: number | null
  tmdb: number | null
  metacritic: number | null
  metacriticUser: number | null
}

export interface MovieDetail extends Movie {
  totalScore: number
  description: string
  scores: PlatformScores
}

export interface NowPlayingMovie {
  id: number
  title: string
  year: number
  score: number
  posterPath: string | null
  emoji?: string
}

export interface PopularMovie {
  id: number
  title: string
  year: number
  genre: string
  score: number
  emoji: string
}
