"use client"

import { Github, Users, ArrowRight } from "lucide-react"

export function CommunitySupport() {
  const supportChannels = [
    {
      Icon: Github,
      title: "Open Development",
      description: "Contribute to the project, report issues, and suggest improvements. We welcome developers, researchers, and accessibility advocates to participate.",
      action: "View Repository",
      color: "from-purple-50 to-violet-50",
      border: "border-purple-200"
    },
    {
      Icon: Users,
      title: "User Feedback",
      description: "Your experiences shape Echo Vision's evolution. We actively collect and incorporate user feedback to improve functionality and address real-world needs.",
      action: "Share Feedback",
      color: "from-orange-50 to-red-50",
      border: "border-orange-200"
    },
  ]

  return (
    <section id="community-support" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-8 duration-700">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4">Community & Support</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Echo Vision grows through collaboration, feedback, and shared commitment to accessibility
          </p>
        </div>

        {/* Support Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportChannels.map((channel, index) => {
            const Icon = channel.Icon
            const isRepo = channel.title === "Open Development"
            const href = isRepo
              ? "https://github.com/Nandeesh71/Firebase-Echo-Vision"
              : "mailto:echovision.helpdesk.in@gmail.com?subject=Echo%20Vision%20%E2%80%93%20User%20Feedback&body=Hello%20Echo%20Vision%20Team%2C%0AI%20would%20like%20to%20share%20the%20following%20feedback%3A"

            return (
              <div
                key={index}
                className={`group relative overflow-hidden p-8 rounded-2xl border ${channel.border} bg-gradient-to-br ${channel.color} md:hover:shadow-2xl transition-all duration-700 ease-out transform md:hover:scale-[1.02] md:hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-12 duration-1000`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 md:group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-white text-slate-900 md:group-hover:scale-110 md:group-hover:rotate-3 transition-all duration-500 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 md:group-hover:text-slate-800 transition-colors">{channel.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-4 md:group-hover:text-slate-600 transition-colors">{channel.description}</p>
                    <a
                      href={href}
                      target={isRepo ? "_blank" : undefined}
                      rel={isRepo ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:gap-3 transition-all duration-500 group-hover:text-slate-800"
                    >
                      {channel.action}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
                    </a>
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
