import { RD_CAPABILITIES } from '../data/content'

const iconColors = [
  'from-blue-500 to-blue-600',
  'from-cyan-500 to-teal-500',
  'from-indigo-500 to-blue-500',
  'from-teal-500 to-cyan-400',
]

export default function RD() {
  return (
    <section id="rd" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            研发实力
          </div>
          <h2 className="section-title">全链条研发能力<br />支撑材料持续迭代</h2>
          <p className="section-subtitle">
            从材料结构设计到测试评价，再到产业转化，构建完整的正极材料研发技术体系
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {RD_CAPABILITIES.map((cap, i) => (
            <div key={cap.title} className="card hover:border-blue-200 hover:-translate-y-1">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${iconColors[i]} flex items-center justify-center text-white font-bold text-sm mb-4`}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-bold text-gray-900 mb-4">{cap.title}</h3>
              <ul className="space-y-2">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-500 text-sm">
                    <span className="text-cyan-500 mt-0.5 flex-shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Decorative bottom */}
        <div className="mt-10 sm:mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-px">
          <div className="rounded-2xl bg-white px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-bold text-gray-900 mb-1">持续构建材料研发与评价平台</div>
              <div className="text-gray-500 text-sm">支持从结构表征到电化学评价的全链条能力，推动材料体系快速迭代</div>
            </div>
            <div className="flex-shrink-0 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              R&amp;D
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
