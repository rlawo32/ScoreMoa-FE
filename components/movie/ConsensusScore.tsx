interface Props {
  score: number
  description: string
}

function scoreColor(s: number) {
  if (s >= 85) return { text: 'text-emerald-400', bar: 'bg-emerald-400' }
  if (s >= 70) return { text: 'text-[#4f8ef7]',   bar: 'bg-[#4f8ef7]'   }
  if (s >= 55) return { text: 'text-amber-400',   bar: 'bg-amber-400'   }
  return              { text: 'text-red-400',     bar: 'bg-red-400'     }
}

export function ConsensusScore({ score, description }: Props) {
  const color = scoreColor(score)

  return (
    <div className="flex items-center gap-5 p-5 rounded-2xl mb-8
                    bg-[#141824] border border-[rgba(79,138,247,0.3)]">
      <div className="flex-shrink-0 text-center min-w-[72px]">
        <span className={`text-[60px] font-light leading-none font-mono ${color.text}`}>
          {score}
        </span>
        <p className="text-[11px] text-[#4a5068] mt-0.5">/ 100</p>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[10px] text-[#4a5068] tracking-[1.2px] uppercase mb-2">
          CineScore 종합 평점 · 8개 플랫폼
        </p>
        <div className="h-[4px] bg-white/5 rounded-full overflow-hidden mb-3">
          <div className={`h-full rounded-full transition-all duration-700 ${color.bar}`}
               style={{ width: `${score}%` }} />
        </div>
        <p className="text-[13px] text-[#8b91a8] leading-[1.7]">{description}</p>
      </div>
    </div>
  )
}
