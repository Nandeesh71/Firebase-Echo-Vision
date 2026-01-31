"use client"

import { Check, Leaf, ShieldCheck, Users } from "lucide-react"

export function ProductSpecs() {
  const ProcessorIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 2C8.45 2 8 2.45 8 3v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-4V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2V3c0-.55-.45-1-1-1zm7 12h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </svg>
  )

  const CameraIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
    </svg>
  )

  const SensorIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  )

  const ConnectivityIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
    </svg>
  )

  const BatteryIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M15 4h-2V2h-2v2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H9V6h6v12z" />
    </svg>
  )

  const ClockIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.99 5C7.04 5 3 9.04 3 14s4.04 9 8.99 9C17.94 23 21 18.96 21 14S16.94 5 11.99 5zM12 20c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm.5-10H11v6h1.5z" />
    </svg>
  )

  const WeightIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41l7.5 7.5c.79.79 2.05.79 2.84 0l7.5-7.5c.79-.79.79-2.05 0-2.84l-7.5-7.5C13 2.19 12.5 2 12 2zm0 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
  )

  const LanguageIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.87 15.07L10.33 12.56h2.52l1.39-1.39H10.33V9.5h2.16L12.98 8h-1.47c.28-.35.48-.75.48-1.45 0-1.97-1.6-3.57-3.57-3.57S4.3 4.58 4.3 6.55s1.6 3.57 3.57 3.57c.71 0 1.38-.23 1.97-.63l2.51 2.51c-.52 1.77-2.23 3.08-4.2 3.08-2.52 0-4.57-2.05-4.57-4.57S5.88 5.1 8.4 5.1c3.39 0 6.14 2.75 6.14 6.14 0 1.59-.62 3.06-1.67 4.13Z" />
    </svg>
  )

  const specs = [
    { label: "Processing Unit", value: "Raspberry Pi 5 (8GB RAM)", Icon: ProcessorIcon },
    { label: "Camera System", value: "Intel RealSense Depth D435i", Icon: CameraIcon },
    { label: "Sensors", value: "3× Ultrasonic + MAX30102 Health", Icon: SensorIcon },
    { label: "Connectivity", value: "WiFi 6 + Bluetooth 5.0 (ESP32)", Icon: ConnectivityIcon },
    { label: "Battery Capacity", value: "10,000 mAh Lithium-ion", Icon: BatteryIcon },
    { label: "Battery Life", value: "12+ Hours Continuous Use", Icon: ClockIcon },
    { label: "Weight", value: "790g (Ultra-portable)", Icon: WeightIcon },
    { label: "Languages Supported", value: "25+ Languages for OCR", Icon: LanguageIcon },
  ]

  return (
    <section id="specifications" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-8 duration-700">
          <span className="text-sm font-bold text-slate-600 uppercase tracking-widest bg-slate-100 px-4 py-2 rounded-full inline-block mb-4">
            Technical Excellence
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Technical Specifications
          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Premium components designed for performance, reliability, and accessibility
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {specs.map((spec, index) => {
            const Icon = spec.Icon

            return (
              <div
                key={index}
                className="group p-6 rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 hover:border-slate-900 hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-slate-900 group-hover:text-slate-700 transition-colors duration-300 transform group-hover:scale-110">
                    <Icon />
                  </span>

                  <Check className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors duration-300 group-hover:scale-110 transform" />
                </div>

                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  {spec.label}
                </p>

                <p className="text-slate-900 font-semibold text-lg leading-tight">
                  {spec.value}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in delay-500 duration-700">
          {[
            {
              Icon: () => <Leaf className="w-10 h-10 text-green-600" />,
              title: "Eco-Friendly",
              desc: "Sustainable design with recyclable components and minimal environmental impact",
            },
            {
              Icon: () => <ShieldCheck className="w-10 h-10 text-blue-600" />,
              title: "Secure & Private",
              desc: "Military-grade encryption protects all personal data and health information",
            },
            {
              Icon: () => <Users className="w-10 h-10 text-violet-600" />,
              title: "Community Support",
              desc: "Join our active community of users and get help whenever you need it",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 hover:border-slate-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white rounded-full shadow group-hover:scale-110 transition-transform duration-300">
                <item.Icon />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
