interface Props {
  criticScore:   number | null
  audienceScore: number | null
}

export function RottenTomatoesCard({ criticScore, audienceScore }: Props) {
  return (
    <div className="p-[18px] rounded-2xl bg-[#141824]
                    border border-[rgba(250,50,10,0.22)]
                    hover:border-[rgba(250,50,10,0.5)] transition-colors">
      <div className="flex justify-between mb-3">
        <span className="text-[11px] font-medium text-[#4a5068]">Rotten Tomatoes</span>
      </div>

      {/* 토마토미터 */}
      <div className="flex items-center gap-3 mb-2">
        <span className="text-[28px]">🍅</span>
        <div>
          <p className="text-[11px] text-[#4a5068]">토마토미터 · 평론가</p>
          <div className="flex items-baseline gap-1">
            <span className="text-[24px] font-medium font-mono text-[#fa320a]">
              {criticScore != null ? criticScore : '—'}
            </span>
            {criticScore != null && <span className="text-[13px] text-[#fa320a]">%</span>}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 my-2" />

      {/* 팝콘 */}
      <div className="flex items-center gap-3">
        <span className="text-[22px]">🍿</span>
        <div>
          <p className="text-[11px] text-[#4a5068]">팝콘 · 관객</p>
          <div className="flex items-baseline gap-1">
            <span className="text-[20px] font-medium font-mono text-[rgba(250,50,10,0.7)]">
              {audienceScore != null ? audienceScore : '—'}
            </span>
            {audienceScore != null && (
              <span className="text-[13px] text-[rgba(250,50,10,0.7)]">%</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
