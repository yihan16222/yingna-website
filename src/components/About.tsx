export default function About() {
  const pillars = [
    { icon: '🔬', title: '研发驱动', desc: '以材料科学为核心，持续推进聚阴离子型正极材料的结构设计与性能优化。' },
    { icon: '⚗️', title: '中试放大', desc: '建立从实验室配方到中试验证的完整工艺路径，确保性能与工艺的可扩展性。' },
    { icon: '🏭', title: '规模化制造', desc: '面向产业化需求，推进正极材料从中试到批量生产的工艺体系建设。' },
    { icon: '🤝', title: '产业合作', desc: '深入理解客户电芯体系，提供材料适配、送样验证和稳定供货的完整服务。' },
  ]

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
              关于英钠
            </div>
            <h2 className="section-title">
              聚焦钠离子电池<br />正极材料核心技术
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              英钠新能源专注于钠离子电池正极材料的研发、生产和产业化应用，围绕<strong className="text-gray-800">聚阴离子型正极材料</strong>构建从实验室研发、中试验证到规模化生产的技术体系。
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              公司以材料研发为核心驱动力，持续推进材料性能优化与工艺放大验证，面向储能、两轮车、低速动力等应用场景提供高安全性、长循环寿命、低成本的材料解决方案。
            </p>
            <p className="text-gray-500 text-sm leading-relaxed bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              ⚠️ 公司成立时间、融资情况、核心团队背景等详细信息请以公司官方确认为准，当前为演示占位内容。
            </p>
          </div>

          {/* Right: Pillars */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div key={p.title} className="card hover:border-blue-200 hover:-translate-y-1">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
