import { useState } from 'react'
import { COMPANY } from '../data/content'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', topic: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const topics = ['材料送样', '产品验证', '产业合作', '研发合作', '人才招聘', '其他']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            联系我们
          </div>
          <h2 className="section-title">开启合作，共建钠电生态</h2>
          <p className="section-subtitle">
            无论是材料送样、产品验证还是长期产业合作，欢迎与我们联系
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-4">公司信息</h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: '公司名称', value: COMPANY.name },
                  { label: '业务方向', value: '钠离子电池正极材料研发与产业化' },
                  { label: '地址', value: COMPANY.address },
                  { label: '邮箱', value: COMPANY.email },
                  { label: '电话', value: COMPANY.phone },
                ].map((row) => (
                  <div key={row.label} className="flex gap-3">
                    <span className="text-gray-400 flex-shrink-0 w-16">{row.label}</span>
                    <span className="text-gray-700">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card bg-gradient-to-br from-blue-600 to-cyan-500 text-white border-0">
              <h3 className="font-bold mb-2">合作方向</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {['材料送样', '产品验证', '产业合作', '研发合作', '人才招聘'].map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-white/20 rounded-full text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 card">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">信息已记录</h3>
                <p className="text-gray-500 text-sm max-w-sm">
                  此为演示页面，正式官网需接入后端服务。您的信息将不会被实际发送。
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', topic: '', message: '' }) }}
                  className="mt-6 btn-outline text-sm py-2"
                >
                  重新填写
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">公司 / 机构</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
                      placeholder="请输入公司或机构名称"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
                    placeholder="请输入您的邮箱"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">合作方向</label>
                  <select
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition bg-white"
                  >
                    <option value="">请选择合作方向</option>
                    {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">留言</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition resize-none"
                    placeholder="请简要描述您的需求或问题"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  提交信息
                </button>
                <p className="text-gray-400 text-xs text-center">
                  此为演示表单，提交后不会发送至任何服务器
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
