import { MovieHero }      from '@/components/movie/MovieHero'
import { ConsensusScore } from '@/components/movie/ConsensusScore'
import { RatingsGrid }    from '@/components/movie/RatingsGrid'
import type { MovieDetail } from '@/types/movie'

// 실제 서비스에서는 params.id 로 DB 조회
async function getMovieDetail(_id: string): Promise<MovieDetail> {
  return {
    id: 157336,
    title: '인터스텔라',
    originalTitle: 'Interstellar',
    year: 2014,
    genres: ['SF', '드라마'],
    director: '크리스토퍼 놀란',
    cast: ['매튜 맥커너히', '앤 해서웨이', '제시카 차스테인', '마이클 케인'],
    runtime: 169,
    synopsis:
      '지구 종말의 위기에서 인류를 구하기 위해 전직 NASA 파일럿 쿠퍼는 비밀 우주 탐사에 합류한다. 웜홀을 통해 미지의 은하로 향하는 여정 속에서 그는 시간, 중력, 그리고 사랑의 의미를 다시 마주하게 된다.',
    posterPath: null,
    backdropPath: null,
    releaseDate: '2014-11-06',
    totalScore: 87,
    description:
      '완성도 높은 SF 작품으로 평론가와 관객 모두 만족스러운 반응을 보였습니다. 장르 팬이라면 충분히 즐길 수 있는 세계관과 이야기를 갖추고 있습니다.',
    scores: {
      watcha:         4.1,
      cgv:            97,
      rt:             73,
      rtAudience:     86,
      popcorn:        85,
      letterboxd:     4.2,
      imdb:           8.7,
      tmdb:           8.4,
      metacritic:     74,
      metacriticUser: 8.7,
    },
  }
}

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movie = await getMovieDetail(params.id)

  return (
    <main className="min-h-screen pt-[52px]">
      <MovieHero movie={movie} />
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <ConsensusScore score={movie.totalScore} description={movie.description} />
        <RatingsGrid scores={movie.scores} />
      </div>
    </main>
  )
}
