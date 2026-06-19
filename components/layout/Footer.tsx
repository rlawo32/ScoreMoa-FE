import Link from 'next/link'

const SERVICE = [
  { href: '/genre',       label: '장르별 최고 평점' },
  { href: '/now-playing', label: '지금 상영중'       },
  { href: '/platforms',   label: '플랫폼 안내'       },
  { href: '/updates',     label: '최근 업데이트'     },
]

const POLICY = [
  { href: '/privacy',   label: '개인정보처리방침' },
  { href: '/terms',     label: '이용약관'         },
  { href: '/about',     label: '서비스 소개'      },
  { href: '/advertise', label: '광고 문의'        },
  { href: '/contact',   label: '문의 / 피드백'   },
]

export function Footer() {
  return (
    <footer className="bg-[#07080f] border-t border-[rgba(79,138,247,0.15)] mt-20">

      {/* 광고 슬롯 */}
      <div className="flex justify-center py-5 border-b border-[rgba(79,138,247,0.1)]">
        <div className="w-[728px] max-w-full mx-4 h-[90px] rounded-lg
                        border border-dashed border-[rgba(79,138,247,0.2)]
                        bg-[#0e1118] flex items-center justify-center">
          <span className="text-[10px] text-[#4a5068] tracking-[2px] uppercase">
            Advertisement
          </span>
        </div>
      </div>

      {/* 본문 */}
      <div className="max-w-4xl mx-auto px-6 py-10
                      grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 브랜드 */}
        <div>
          <p className="text-base font-medium tracking-wider text-[#e8eaf2] mb-3">
            Cine<span className="text-[#4f8ef7]">Score</span>
          </p>
          <p className="text-[12px] text-[#4a5068] leading-relaxed">
            왓챠피디아, CGV 골든에그, 로튼 토마토, 팝콘 지수,
            레터박스, IMDb, TMDB, 메타크리틱 평점을 한 화면에서 비교하세요.
          </p>
          <p className="text-[11px] text-[#4a5068] mt-4">
            Powered by <span className="text-[#7aaeff]">TMDB</span>
          </p>
        </div>

        {/* 서비스 */}
        <div>
          <p className="text-[10px] font-medium text-[#4a5068] tracking-[1.2px]
                        uppercase mb-4">서비스</p>
          <ul className="space-y-[10px]">
            {SERVICE.map(s => (
              <li key={s.href}>
                <Link href={s.href}
                  className="text-[13px] text-[#4a5068] hover:text-[#8b91a8] transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 정책 */}
        <div>
          <p className="text-[10px] font-medium text-[#4a5068] tracking-[1.2px]
                        uppercase mb-4">정책 및 정보</p>
          <ul className="space-y-[10px]">
            {POLICY.map(p => (
              <li key={p.href}>
                <Link href={p.href}
                  className="text-[13px] text-[#4a5068] hover:text-[#8b91a8] transition-colors">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 카피라이트 */}
      <div className="max-w-4xl mx-auto px-6 py-4
                      border-t border-[rgba(79,138,247,0.08)]
                      flex flex-col sm:flex-row justify-between gap-2">
        <p className="text-[11px] text-[#4a5068]">© 2025 CineScore. All rights reserved.</p>
        <p className="text-[11px] text-[#4a5068]">
          평점 데이터는 각 플랫폼에서 수집되며 실제 수치와 차이가 있을 수 있습니다.
        </p>
      </div>
    </footer>
  )
}
