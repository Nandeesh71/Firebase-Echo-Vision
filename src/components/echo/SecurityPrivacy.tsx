"use client"

import { Shield, Lock, Eye, Database } from "lucide-react"

export function SecurityPrivacy() {
  const securityFeatures = [
    {
      Icon: Lock,
      title: "Local Processing",
      description: "All AI inference and sensitive data processing occur on-device, ensuring that personal information, health metrics, and navigation patterns never leave your control.",
      color: "from-blue-50 to-cyan-50",
      border: "border-blue-200"
    },
    {
      Icon: Database,
      title: "Data Minimization",
      description: "The system collects only essential data required for functionality. Health monitoring data, location information, and usage patterns are processed locally with minimal external transmission.",
      color: "from-green-50 to-emerald-50",
      border: "border-green-200"
    },
    {
      Icon: Eye,
      title: "Transparent Privacy",
      description: "Users maintain full visibility into what data is collected and how it's used. No hidden data collection, no unexpected sharing, and clear opt-in controls for any optional features.",
      color: "from-purple-50 to-violet-50",
      border: "border-purple-200"
    },
    {
      Icon: Shield,
      title: "Secure Communication",
      description: "When connectivity features are used, all data transmission employs standard encryption protocols to protect information in transit between the device and authorized services.",
      color: "from-orange-50 to-red-50",
      border: "border-orange-200"
    },
  ]

  return (
    <section id="security" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-8 duration-700">
          <span className="text-sm font-bold text-slate-600 uppercase tracking-widest bg-slate-100 px-4 py-2 rounded-full inline-block mb-4">
            Privacy First
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4">Security & Privacy</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Your data, your control. Privacy is fundamental to assistive technology, not an afterthought.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.Icon
            return (
              <div
                key={index}
                className={`group relative overflow-hidden p-8 rounded-2xl border ${feature.border} bg-gradient-to-br ${feature.color} hover:shadow-2xl transition-all duration-700 ease-out transform hover:scale-[1.02] hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-12 duration-1000`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white text-slate-900 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">{feature.title}</h3>
                    <p className="text-slate-700 leading-relaxed group-hover:text-slate-600 transition-colors">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
