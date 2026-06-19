import { StarRating } from './StarRating'

interface Props {
  score:        number | null
  reviewCount?: string
}

export function WatchaCard({ score, reviewCount = '42만명 평가' }: Props) {
  return (
    <div className="p-[18px] rounded-2xl bg-[#141824]
                    border border-[rgba(233,69,96,0.22)]
                    hover:border-[rgba(233,69,96,0.5)] transition-colors">
      <div className="flex justify-between mb-3">
        <span className="text-[11px] font-medium text-[#4a5068]">왓챠피디아</span>
        <span className="text-[10px] text-[#4a5068]">관객 평점</span>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <StarRating value={score ?? 0} color="#e94560" emptyColor="rgba(233,69,96,0.18)" />
          <p className="text-[11px] text-[#4a5068] mt-1">
            {score != null ? reviewCount : '데이터 없음'}
          </p>
        </div>
        <div className="ml-auto">
          <span className="text-[28px] font-medium font-mono text-[#e94560]">
            {score?.toFixed(1) ?? '—'}
          </span>
          {score != null && <span className="text-[13px] text-[#4a5068] ml-1">/ 5</span>}
        </div>
      </div>
    </div>
  )
}
