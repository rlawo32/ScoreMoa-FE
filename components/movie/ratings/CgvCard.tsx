interface Props { score: number | null }

export function CgvCard({ score }: Props) {
  return (
    <div className="p-[18px] rounded-2xl bg-[#141824]
                    border border-[rgba(245,166,35,0.22)]
                    hover:border-[rgba(245,166,35,0.5)] transition-colors">
      <div className="flex justify-between mb-3">
        <span className="text-[11px] font-medium text-[#4a5068]">CGV 골든에그</span>
        <span className="text-[10px] text-[#4a5068]">관객 지수</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-[32px]">🥚</span>
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-[28px] font-medium font-mono text-[#f5a623]">
              {score != null ? score : '—'}
            </span>
            {score != null && <span className="text-[16px] text-[#f5a623]">%</span>}
          </div>
          <p className="text-[11px] text-[#4a5068] mt-0.5">
            {score != null ? '골든에그 달성' : '데이터 없음'}
          </p>
        </div>
      </div>
    </div>
  )
}
