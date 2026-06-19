import { StarRating } from './StarRating'

interface Props {
  score:        number | null
  reviewCount?: string
}

export function LetterboxdCard({ score, reviewCount = '520만명 평가' }: Props) {
  return (
    <div className="p-[18px] rounded-2xl bg-[#141824]
                    border border-[rgba(0,176,32,0.22)]
                    hover:border-[rgba(0,176,32,0.5)] transition-colors">
      <div className="flex justify-between mb-3">
        <span className="text-[11px] font-medium text-[#4a5068]">Letterboxd</span>
        <span className="text-[10px] text-[#4a5068]">관객 평점</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-lg bg-[#00b020] flex-shrink-0
                        flex items-center justify-center text-[12px] font-bold text-white">
          LB
        </div>
        <div>
          <StarRating value={score ?? 0} color="#00b020" emptyColor="rgba(0,176,32,0.12)" />
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-[22px] font-medium font-mono text-[#00b020]">
              {score?.toFixed(2) ?? '—'}
            </span>
            {score != null && <span className="text-[13px] text-[#4a5068]">/ 5</span>}
          </div>
          <p className="text-[11px] text-[#4a5068]">
            {score != null ? reviewCount : '데이터 없음'}
          </p>
        </div>
      </div>
    </div>
  )
}
