interface Props {
  value:      number
  max?:       number
  color:      string
  emptyColor: string
}

export function StarRating({ value, max = 5, color, emptyColor }: Props) {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: max }).map((_, i) => {
        const fill = Math.min(Math.max(value - i, 0), 1)
        return (
          <span key={i} className="relative inline-block w-[15px] h-[15px]"
            style={{ clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }}>
            <span className="absolute inset-0" style={{ background: emptyColor }} />
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                <span className="absolute inset-0" style={{ background: color }} />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}
