import { PRODUCTION_FLOW, PRODUCTION_CARDS } from '../data/content'

export default function Production() {
  return (
    <section id="production" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            产业化能力
          </div>
          <h2 className="section-title">从实验室到规模化<br />完整产业化工艺体系</h2>
          <p className="section-subtitle">
            围绕正极材料产业化需求，持续推进从研发样品到中试验证、再到规模化生产的工艺体系建设
          </p>
        </div>

        {/* Flow chart */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex items-stretch lg:items-start justify-center gap-3 lg:gap-2 lg:flex-wrap">
            {PRODUCTION_FLOW.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className="flex w-full items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 lg:w-auto lg:flex-col lg:gap-0 lg:border-0 lg:bg-transparent lg:p-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="text-sm font-medium text-gray-700 lg:mt-2 lg:text-center lg:whitespace-nowrap">
                    {step}
                  </div>
                </div>
                {i < PRODUCTION_FLOW.length - 1 && (
                  <svg className="hidden lg:block w-5 h-5 text-gray-300 flex-shrink-0 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Capability Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {PRODUCTION_CARDS.map((c) => (
            <div key={c.title} className="card hover:border-cyan-200 hover:-translate-y-1 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
