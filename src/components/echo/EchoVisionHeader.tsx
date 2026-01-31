"use client"

import { useState } from "react"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Logo } from "../generated/Logo";

export function EchoVisionHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer transform transition-all duration-300 hover:scale-105">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Features", "Specifications", "Technology", "Community & Support"].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(/ /g, "-").replace("&", "and")}`}
                className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors duration-200 relative group overflow-hidden"
              >
                <span className="relative">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-900 to-slate-700 group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            ))}
            <button
              className="bg-gradient-to-r from-slate-900 to-slate-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-900/30"
              onClick={() => {
                const form = document.getElementById('prebook-form');
                if (form) form.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Pre-order
            </button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 transition-colors duration-200"
              title={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-16 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg animate-in slide-in-from-top duration-300 z-50 overflow-y-auto">
            <nav className="flex flex-col gap-2 px-4 py-4">
              {['Features', 'Specifications', 'Technology', 'Community & Support'].map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase().replace(/ /g, '-').replace('&', 'and')}`}
                  className="px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                  onClick={e => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const el = document.getElementById(item.toLowerCase().replace(/ /g, '-').replace('&', 'and'));
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item}
                </a>
              ))}
              <button
                className="w-full mt-2 bg-gradient-to-r from-slate-900 to-slate-700 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-900/30"
                onClick={() => {
                  const form = document.getElementById('prebook-form');
                  if (form) form.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Pre-order
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
