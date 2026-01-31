"use client"

import { Leaf, Heart, Users, Recycle } from "lucide-react"

export function SustainabilityAccessibility() {
  const sustainabilityFeatures = [
    {
      Icon: Leaf,
      title: "Eco-Conscious Design",
      description: "Modular architecture enables component replacement and repair, extending device lifespan and reducing electronic waste. Materials are selected with environmental impact in mind.",
      color: "from-green-50 to-emerald-50",
      border: "border-green-200"
    },
    {
      Icon: Recycle,
      title: "Repairability Focus",
      description: "Design choices prioritize long-term usability over planned obsolescence. Users and service providers can maintain and upgrade components independently.",
      color: "from-blue-50 to-cyan-50",
      border: "border-blue-200"
    },
    {
      Icon: Heart,
      title: "Inclusive by Default",
      description: "Accessibility isn't a feature—it's the foundation. Every design decision prioritizes usability for visually impaired users, ensuring the device serves its primary purpose effectively.",
      color: "from-purple-50 to-violet-50",
      border: "border-purple-200"
    },
    {
      Icon: Users,
      title: "Community-Centered",
      description: "Development is guided by real user feedback and accessibility expertise. We build with the community, not just for it, ensuring solutions address actual needs.",
      color: "from-orange-50 to-red-50",
      border: "border-orange-200"
    },
  ]

  return (
    <section id="sustainability" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-8 duration-700">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4">Sustainability & Accessibility</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Building assistive technology that respects both people and the planet
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sustainabilityFeatures.map((feature, index) => {
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
