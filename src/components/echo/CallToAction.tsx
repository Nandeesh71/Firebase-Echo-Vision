"use client"

import { useState } from "react"

import "./CollaborateButton.css"
import CollaborateModal from "./CollaborateCard"

export function CallToAction() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 3000)
      setEmail("")
    }
  }

  return (
    <section id="prebook-form" className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          {/* Main Headline */}
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Reclaim
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Your Independence?
            </span>
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Join thousands of visually impaired individuals using Echo Vision to navigate the world with confidence,
            independence, and pride. Transform your life today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="continue-application" onClick={() => setShowModal(true)}>
              <div>
                <div className="pencil"></div>
                <div className="folder">
                  <div className="top">
                    <svg viewBox="0 0 24 27">
                      <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                    </svg>
                  </div>
                  <div className="paper"></div>
                </div>
              </div>
              Collaborate With Us
            </button>
            <CollaborateModal isOpen={showModal} onClose={() => setShowModal(false)} />

          </div>

          {/* Email Signup */}
        </div>
      </div>
    </section>
  )
}
