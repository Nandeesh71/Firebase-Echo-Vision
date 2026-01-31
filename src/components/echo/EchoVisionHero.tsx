"use client"

import React from "react";

import { useState } from "react"
import { ShoppingCart, Play } from "lucide-react"

export function EchoVisionHero() {
    const [quantity, setQuantity] = useState(1)
    const [showVideoModal, setShowVideoModal] = useState(false)
    const [isAdded, setIsAdded] = useState(false)
    const price = 24999

    type TrustBadgeType = 'money' | 'shield' | 'truck';

    const TrustBadgeIcon = ({ type }: { type: TrustBadgeType }) => {
        const icons: Record<TrustBadgeType, React.ReactElement> = {
            money: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            shield: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            truck: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
            ),
        };
        return icons[type] || null;
    }

    const handleAddToCart = () => {
        setIsAdded(true)
        setTimeout(() => setIsAdded(false), 2000)
    }

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-50 flex items-center justify-center pt-24 pb-20 overflow-hidden">
            <div className="absolute top-20 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-slate-100 rounded-full blur-3xl opacity-15 animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-left-8 duration-1000">
                        <div className="inline-block max-w-fit">
                            <span className="text-sm font-bold text-slate-600 uppercase tracking-widest bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200/50 px-4 py-2 rounded-full transition-all duration-500 hover:border-slate-300 cursor-default">
                                Advanced Vision Technology
                            </span>
                        </div>

                        <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                            Echo{" "}
                            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                                Vision
                            </span>
                        </h1>


                        <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-light">
                            Revolutionary AI-powered assistive device for visually impaired individuals. Navigate confidently,
                            recognize faces and objects, read any text, and monitor your health—all in one intelligent device.
                        </p>

                        {/* Price Section removed for professional appearance */}

                        <div className="flex flex-row items-center gap-4 pt-4 animate-in fade-in duration-1000 delay-300">
                            <button
                                onClick={() => {
                                    const form = document.getElementById('prebook-form');
                                    if (form) form.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-md hover:shadow-xl transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-900/30"
                            >
                                Pre-order Now
                            </button>
                            <button
                                onClick={() => setShowVideoModal(true)}
                                className="px-8 py-4 rounded-xl font-bold text-lg bg-white text-slate-900 shadow-md hover:shadow-xl transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-900/30 border border-slate-200"
                            >
                                Watch
                            </button>
                        </div>

                    </div>

                    {/* Right Product Image */}
                    <div className="flex items-center justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
                        <div className="relative w-full h-full flex items-center justify-center group">
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-300 rounded-3xl blur-3xl opacity-15 group-hover:opacity-30 transition-opacity duration-700 animate-pulse"></div>

                            {/* Image Container */}
                            <div className="relative transform transition-all duration-700 group-hover:scale-110">
                                <img
                                    src="/images/demo-echo-vision.png"
                                    alt="Echo Vision Device"
                                    className="w-full max-w-md h-auto drop-shadow-2xl"
                                />
                            </div>

                            {/* Floating badge */}
                            <div className="absolute top-10 right-0 bg-white border border-slate-200 shadow-sm rounded-xl p-3 transform translate-x-6 transition-all duration-300">
                                <div className="text-center">

                                    {/* Smaller Professional Icon */}
                                    <div className="flex items-center justify-center mb-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-slate-800"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6l4 2m6-2A10 10 0 1 1 2 12a10 10 0 0 1 20 0Z"
                                            />
                                        </svg>
                                    </div>

                                    <div className="text-[12px] font-semibold text-slate-900 tracking-wide">
                                        Limited Pre-Order
                                    </div>

                                    <div className="text-[10px] text-slate-500 mt-[2px]">
                                        Stay tuned for the official launch
                                    </div>

                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {showVideoModal && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={() => setShowVideoModal(false)}
                >
                    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full animate-in scale-in-95 duration-300">
                        <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center relative overflow-hidden group">
                            <video
                                src=""
                                controls
                                playsInline
                                className="w-full h-full object-contain rounded-3xl bg-black"
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="p-8 text-center">
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Echo Vision</h3>
                            <p className="text-slate-600 mb-6">Experience the power of AI-assisted vision technology</p>
                            <button
                                onClick={() => setShowVideoModal(false)}
                                className="px-8 py-3 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-lg hover:shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-300 font-semibold"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
