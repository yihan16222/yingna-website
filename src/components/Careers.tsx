import { JOBS } from '../data/content'

export default function Careers() {
  return (
    <section id="careers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
              加入我们
            </div>
            <h2 className="section-title">共同推动钠电材料<br />走向规模化应用</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              我们欢迎对新能源材料、钠离子电池和产业化制造充满热情的人才加入，共同推动下一代储能材料走向规模化应用。
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              无论你是聚焦材料研发的科研人才，还是专注工艺开发的工程师，或是对新能源产业充满热情的应届生，英钠新能源都期待与你一起成长。
            </p>
            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="font-semibold text-gray-900 mb-2">简历投递方式</div>
              <div className="text-gray-500 text-sm leading-relaxed">
                投递邮箱：<span className="text-blue-600">待公司确认</span>
              </div>
              <div className="text-gray-400 text-xs mt-2">
                请在邮件主题中注明应聘岗位及姓名，我们将在收到简历后尽快回复。
              </div>
            </div>
          </div>

          {/* Right: Job list */}
          <div>
            <div className="font-semibold text-gray-900 mb-4">当前招聘方向</div>
            <div className="space-y-3">
              {JOBS.map((job) => (
                <div
                  key={job.title}
                  className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200 group"
                >
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {job.title}
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5">{job.dept}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                      {job.type}
                    </span>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-4">
              以上岗位为占位示例，具体职位要求请以公司发布的正式 JD 为准。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
