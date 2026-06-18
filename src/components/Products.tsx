import React from 'react'
import { PRODUCTS, TECH_HIGHLIGHTS } from '../data/content'

const iconMap: Record<string, React.ReactElement> = {
  crystal: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  lab: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15m-6.8-11.9c.25.023.499.05.75.082M5 14.5l-.75.75A2.25 2.25 0 004.5 17.25v.75a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25v-.75a2.25 2.25 0 00-.75-1.75L17.5 14.5M5 14.5h14.5" />
    </svg>
  ),
  customize: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
}

export default function Products() {
  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            技术与产品
          </div>
          <h2 className="section-title">以聚阴离子材料为核心<br />构建完整产品体系</h2>
          <p className="section-subtitle">
            围绕钠离子电池正极材料研发与产业化需求，提供覆盖基础材料到定制方案的产品服务体系
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {PRODUCTS.map((p) => (
            <div key={p.title} className="card group hover:border-blue-200 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                {iconMap[p.icon]}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <span
                    key={f}
                    className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Highlights */}
        <div className="bg-gradient-to-br from-[#0a1628] to-[#0d2040] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12">
          <h3 className="text-xl font-bold text-white mb-2 text-center">技术亮点</h3>
          <p className="text-gray-400 text-center mb-6 sm:mb-10 text-sm">聚阴离子型正极材料核心优势</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {TECH_HIGHLIGHTS.map((h) => (
              <div key={h.label} className="flex items-start gap-4 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold text-sm mb-1">{h.label}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
