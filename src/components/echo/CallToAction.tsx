"use client"

import { useState } from "react"
import { ShoppingCart, MessageCircle, ArrowRight } from "lucide-react"

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
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="group relative inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-bold text-lg shadow-md hover:shadow-xl transition-all duration-300 active:scale-95 overflow-hidden focus:outline-none focus:ring-2 focus:ring-slate-900/30"
            >
              <span className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <MessageCircle className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Collaborate With Us</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative animate-in fade-in duration-300">
                  <button className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 text-xl font-bold focus:outline-none" onClick={() => setShowModal(false)}>&times;</button>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">Collaborate With Us</h3>
                  <p className="mb-6 text-slate-700 text-lg">
                    We welcome innovators, researchers, organizations, and partners who share our mission of empowering visually impaired individuals with intelligent assistive technology.<br /><br />
                    Whether you’re exploring AI integration, accessibility research, hardware collaboration, pilot testing, or investment opportunities. Echo - Vision invites you to join us in advancing a more inclusive future.<br /><br />
                    Thanks for joining us.
                  </p>
                  <button
                    onClick={() => {
                      window.location.href = "mailto:echovision.helpdesk.in@gmail.com?subject=Echo%20Vision%20Collaboration%20Inquiry&body=Hello%20Echo%20Vision%20Team%2C%0D%0A%0D%0AI%20am%20interested%20in%20collaborating%20with%20Echo%20Vision.%20Please%20let%20me%20know%20how%20we%20can%20work%20together.%0D%0A%0D%0AThank%20you!%0D%0A";
                    }}
                    className="w-full mt-4 px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Proceed to Mail
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Email Signup */}
        </div>
      </div>
    </section>
  )
}
