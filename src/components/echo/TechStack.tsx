"use client"

export function TechStack() {
    const ProcessingIcon = () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 2C8.45 2 8 2.45 8 3v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-4V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2V3c0-.55-.45-1-1-1zm7 12h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
        </svg>
    )

    const SensorIcon = () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
    )

    const PowerIcon = () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.56 5.44l1.45 1.45C23.16 9.56 23.16 14.44 17.01 20.59C11.35 26.25 2.75 26.25 1.04 24.54C0.63 24.13 0.63 23.5 1.04 23.09l1.45 1.45C4.37 25.53 7.02 26 9.5 26c2.5 0 5.15-.47 7.07-2.38c5.79-5.79 6.15-14.6 1.25-20.82l-1.2 1.2c.9 1.97 1.38 4.17 1.38 6.5 0 3.04-1.23 5.97-3.4 8.15-2.17 2.17-5.1 3.4-8.15 3.4-2.33 0-4.52-.48-6.5-1.38l-1.45-1.45c-.41-.41-.41-1.04 0-1.45l1.45-1.45c-.9-1.97-1.38-4.17-1.38-6.5 0-3.04 1.23-5.97 3.4-8.15 2.17-2.17 5.1-3.4 8.15-3.4 2.33 0 4.52.48 6.5 1.38z" />
        </svg>
    )

    const components = [
        {
            name: "Dual Processing Architecture",
            Icon: ProcessingIcon,
            items: [
                "Dual-compute system enables parallel processing of vision and navigation tasks",
                "On-device AI acceleration for real-time inference without cloud dependency",
                "Optimized workload distribution ensures responsive user experience",
                "Seamless coordination between processing units for complex multi-modal analysis"
            ],
            color: "from-orange-50 to-red-50",
            border: "border-orange-200",
        },
        {
            name: "Multi-Sensor Fusion",
            Icon: SensorIcon,
            items: [
                "Depth perception combines with ultrasonic ranging for comprehensive spatial awareness",
                "Continuous health monitoring integrated into daily navigation workflows",
                "Sensor fusion algorithms create unified environmental understanding",
                "Redundant sensing pathways ensure reliability across diverse conditions"
            ],
            color: "from-blue-50 to-cyan-50",
            border: "border-blue-200",
        },
        {
            name: "Power & Communication",
            Icon: PowerIcon,
            items: [
                "Extended battery life supports full-day operation without interruption",
                "Dual-band wireless connectivity enables real-time updates and remote assistance",
                "Efficient power management extends device longevity",
                "Seamless integration with assistive technology ecosystems"
            ],
            color: "from-green-50 to-emerald-50",
            border: "border-green-200",
        },
    ]

    return (
        <section id="technology" className="py-24 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 animate-in fade-in slide-in-from-top-8 duration-700">
                    <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4">System Architecture</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        A thoughtfully integrated system where each component works in harmony to deliver seamless assistive experiences
                    </p>
                </div>

                {/* Components Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {components.map((category, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-2xl border ${category.border} bg-gradient-to-br ${category.color} p-8 hover:shadow-2xl transition-all duration-700 ease-out transform hover:scale-[1.02] hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-12 duration-1000`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="relative flex items-center gap-3 mb-6">
                                <span className="text-slate-900 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                    <category.Icon />
                                </span>
                                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">{category.name}</h3>
                            </div>
                            <ul className="space-y-3">
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start gap-3 group/item">
                                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-sm text-xs font-bold text-slate-900 flex-shrink-0 group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-500">
                                            ✓
                                        </span>
                                        <span className="text-slate-700 font-medium group-hover/item:text-slate-900 transition-colors duration-500">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Integration Benefits */}
                <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white animate-in fade-in duration-1000">
                    <h3 className="text-2xl font-bold mb-4 text-center">Unified System Design</h3>
                    <p className="text-lg text-white/80 text-center max-w-3xl mx-auto leading-relaxed">
                        Our architecture prioritizes seamless integration over isolated components. Each subsystem communicates
                        efficiently, sharing data and processing resources to minimize latency and maximize reliability. This
                        holistic approach ensures that navigation assistance, object recognition, text reading, and health
                        monitoring work together as a cohesive assistive technology platform, rather than separate features
                        competing for resources.
                    </p>
                </div>
            </div>
        </section>
    )
}
