interface Props {
  score:        number | null
  reviewCount?: string
}

export function TmdbCard({ score, reviewCount = '3만 3천명' }: Props) {
  const pct           = score != null ? Math.round(score * 10) : 0
  const circumference = 2 * Math.PI * 20
  const offset        = circumference - (pct / 100) * circumference

  return (
    <div className="p-[18px] rounded-2xl bg-[#141824]
                    border border-[rgba(1,180,228,0.22)]
                    hover:border-[rgba(1,180,228,0.5)] transition-colors">
      <div className="flex justify-between mb-3">
        <span className="text-[11px] font-medium text-[#4a5068]">TMDB</span>
        <span className="text-[10px] text-[#4a5068]">관객 평점</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative w-[52px] h-[52px] flex-shrink-0">
          <svg width="52" height="52" viewBox="0 0 52 52">
            <circle cx="26" cy="26" r="20" fill="none"
              stroke="rgba(1,180,228,0.15)" strokeWidth="4" />
            {score != null && (
              <circle cx="26" cy="26" r="20" fill="none"
                stroke="#01b4e4" strokeWidth="4" strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                transform="rotate(-90 26 26)"
                style={{ transition: 'stroke-dashoffset 0.7s' }} />
            )}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center
                          text-[13px] font-semibold font-mono text-[#01b4e4]">
            {score != null ? pct : '—'}
          </div>
        </div>
        <div>
          <p className="text-[13px] text-[#e8eaf2]">사용자 점수</p>
          <p className="text-[11px] text-[#4a5068] mt-0.5">
            {score?.toFixed(1) ?? '—'} / 10
            {score != null && ` · ${reviewCount}`}
          </p>
        </div>
      </div>
    </div>
  )
}
