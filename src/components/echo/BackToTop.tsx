"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, animate } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        // High-precision smooth scroll using framer-motion animate
        // Provides a much calmer and more professional feel than the native jump
        const initialY = window.scrollY;

        animate(initialY, 0, {
            type: "tween",
            duration: 1.2, // Slightly slower for a more professional feel
            ease: [0.6, 0.01, -0.05, 0.9], // Calm easing curve
            onUpdate: (latest) => window.scrollTo(0, latest)
        });
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-slate-900 text-white shadow-2xl hover:bg-slate-800 transition-all duration-300 group ring-4 ring-white/10"
                >
                    <ArrowUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
