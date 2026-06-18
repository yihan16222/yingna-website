import { NEWS } from '../data/content'

export default function News() {
  return (
    <section id="news" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            新闻动态
          </div>
          <h2 className="section-title">企业动态</h2>
          <p className="section-subtitle text-yellow-600 bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-2 inline-block mt-2 text-sm">
            以下为占位示例新闻，具体内容、日期、数据请由公司内部提供并确认后替换
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS.map((item, i) => (
            <div key={i} className="card hover:border-blue-200 hover:-translate-y-1 flex flex-col">
              {/* Placeholder image */}
              <div className="w-full h-36 rounded-xl bg-gradient-to-br from-blue-600/10 to-cyan-500/10 border border-blue-100 flex items-center justify-center mb-4 flex-shrink-0">
                <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
              </div>
              <div className="text-xs text-gray-400 mb-2">{item.date}</div>
              <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-3 flex-1">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
