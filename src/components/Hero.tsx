import { COMPANY, STATS } from '../data/content'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[680px] flex-col justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d2040] to-[#0a2a3a] sm:min-h-[720px] lg:min-h-screen"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#38bdf8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating particles / ion migration lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400 opacity-20 animate-pulse"
            style={{
              width: `${4 + i * 3}px`,
              height: `${4 + i * 3}px`,
              top: `${10 + i * 11}%`,
              left: `${5 + i * 12}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2 + i * 0.5}s`,
            }}
          />
        ))}
        {/* Ion lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <line x1="70%" y1="10%" x2="85%" y2="40%" stroke="#22d3ee" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="80%" y1="20%" x2="90%" y2="60%" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 8" />
          <line x1="75%" y1="50%" x2="95%" y2="80%" stroke="#22d3ee" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>

      {/* Abstract crystal structure illustration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 max-w-lg opacity-30 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#38bdf8" strokeWidth="1" fill="none">
            <polygon points="200,40 320,120 320,280 200,360 80,280 80,120" stroke="#22d3ee" strokeWidth="1.5" opacity="0.6" />
            <polygon points="200,80 290,145 290,255 200,320 110,255 110,145" opacity="0.4" />
            <polygon points="200,120 260,165 260,235 200,280 140,235 140,165" opacity="0.3" />
            <line x1="200" y1="40" x2="200" y2="120" stroke="#60a5fa" />
            <line x1="320" y1="120" x2="260" y2="165" stroke="#60a5fa" />
            <line x1="320" y1="280" x2="260" y2="235" stroke="#60a5fa" />
            <line x1="200" y1="360" x2="200" y2="280" stroke="#60a5fa" />
            <line x1="80" y1="280" x2="140" y2="235" stroke="#60a5fa" />
            <line x1="80" y1="120" x2="140" y2="165" stroke="#60a5fa" />
            <circle cx="200" cy="200" r="20" fill="#22d3ee" fillOpacity="0.3" stroke="#22d3ee" />
            {[
              [200, 40], [320, 120], [320, 280], [200, 360], [80, 280], [80, 120],
              [200, 120], [260, 165], [260, 235], [200, 280], [140, 235], [140, 165],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="5" fill="#38bdf8" fillOpacity="0.7" />
            ))}
          </g>
        </svg>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex max-w-full items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            钠离子电池正极材料研发与产业化
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {COMPANY.name}
          </h1>
          <p className="text-lg sm:text-2xl text-cyan-400 font-semibold mb-5 sm:mb-6">
            {COMPANY.tagline}
          </p>
          <p className="text-gray-300 text-sm sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-2xl">
            {COMPANY.description}
          </p>

          <div className="flex max-w-md flex-col gap-3 min-[430px]:flex-row sm:gap-4">
            <button onClick={() => scrollTo('products')} className="btn-primary w-full justify-center min-[430px]:w-auto">
              了解产品技术
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button onClick={() => scrollTo('contact')} className="btn-outline w-full justify-center min-[430px]:w-auto">
              联系合作
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 lg:mt-20 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:bg-white/10 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-xs sm:text-sm leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 text-xs animate-bounce sm:flex">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
