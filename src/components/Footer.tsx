import { COMPANY, NAV_ITEMS } from '../data/content'

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0a1628] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 inline-flex h-14 w-[180px] items-center overflow-hidden rounded-lg border border-white/10 bg-white px-3 shadow-sm">
              <img
                src="/logo-yingna.png"
                alt={`${COMPANY.name} ${COMPANY.nameEn}`}
                className="block h-auto w-full"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              专注于钠离子电池聚阴离子型正极材料研发与产业化，推动新能源材料走向规模化应用。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-white font-semibold mb-4 text-sm">快速导航</div>
            <div className="space-y-2">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block min-h-9 text-left text-sm text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-white font-semibold mb-4 text-sm">更多</div>
            <div className="space-y-2">
              {NAV_ITEMS.slice(5).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block min-h-9 text-left text-sm text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-600">
          <div>© 2026 {COMPANY.name}. All rights reserved. 具体公司主体待确认。</div>
          <div className="text-gray-700 text-xs sm:text-right">本页面为演示原型，所有信息仅供参考，请以公司官方发布为准</div>
        </div>
      </div>
    </footer>
  )
}
