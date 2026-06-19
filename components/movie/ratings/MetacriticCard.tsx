interface Props {
  criticScore:  number | null
  userScore:    number | null
  criticCount?: string
}

function metaBoxStyle(score: number) {
  if (score >= 61) return { background: '#6c3',    border: '2px solid #5a2', color: '#fff'    }
  if (score >= 40) return { background: '#ffcc33', border: '2px solid #f90', color: '#111'    }
  return                  { background: '#f33',    border: '2px solid #c00', color: '#fff'    }
}

export function MetacriticCard({ criticScore, userScore, criticCount = '41명' }: Props) {
  const boxStyle = criticScore != null
    ? metaBoxStyle(criticScore)
    : { background: '#1a2030', border: '2px solid #2a3040', color: '#4a5068' }

  return (
    <div className="p-[18px] rounded-2xl bg-[#141824]
                    border border-[rgba(102,204,51,0.22)]
                    hover:border-[rgba(102,204,51,0.5)] transition-colors">
      <div className="flex justify-between mb-3">
        <span className="text-[11px] font-medium text-[#4a5068]">Metacritic</span>
        <span className="text-[10px] text-[#4a5068]">평론가+관객</span>
      </div>

      {/* 메타스코어 */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-[52px] h-[52px] rounded-lg flex-shrink-0
                        flex items-center justify-center
                        text-[22px] font-bold font-mono"
             style={boxStyle}>
          {criticScore ?? '—'}
        </div>
        <div>
          <p className="text-[13px] text-[#e8eaf2]">메타스코어</p>
          <p className="text-[11px] text-[#4a5068] mt-0.5">
            {criticScore != null ? `평론가 ${criticCount}` : '데이터 없음'}
          </p>
        </div>
      </div>

      <div className="border-t border-white/5 my-2" />

      {/* 유저 스코어 */}
      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded flex-shrink-0
                        flex items-center justify-center
                        text-[11px] font-bold font-mono
                        bg-[#ffcc33] text-[#111]"
             style={{ border: '2px solid #f90' }}>
          {userScore?.toFixed(1) ?? '—'}
        </div>
        <div>
          <p className="text-[11px] text-[#8b91a8]">유저 스코어</p>
          <p className="text-[11px] text-[#4a5068]">
            {userScore?.toFixed(1) ?? '—'} / 10
          </p>
        </div>
      </div>
    </div>
  )
}
