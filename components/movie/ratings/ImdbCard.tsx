interface Props {
  score:    number | null
  ranking?: string
}

export function ImdbCard({ score, ranking }: Props) {
  return (
    <div className="p-[18px] rounded-2xl bg-[#141824]
                    border border-[rgba(245,197,24,0.22)]
                    hover:border-[rgba(245,197,24,0.5)] transition-colors">
      <div className="flex justify-between mb-3">
        <span className="text-[11px] font-medium text-[#4a5068]">IMDb</span>
        <span className="text-[10px] text-[#4a5068]">관객+평론가</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="px-[7px] py-[2px] bg-[#f5c518] rounded flex-shrink-0
                        text-[13px] font-bold text-black tracking-wide">
          IMDb
        </div>
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-[28px] font-medium font-mono text-[#f5c518]">
              {score?.toFixed(1) ?? '—'}
            </span>
            {score != null && <span className="text-[13px] text-[#4a5068]">/ 10</span>}
          </div>
          {ranking && <p className="text-[11px] text-[#4a5068] mt-0.5">{ranking}</p>}
        </div>
      </div>
    </div>
  )
}
