import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navigation, ScanFace, FileText, HeartPulse, X, Check } from "lucide-react"

interface FeatureData {
    id: string
    title: string
    icon: React.ReactNode
    shortDescription: string
    fullDescription: string
    keyPoints: string[]
    specs: string[]
    benefits: string
    tags: string[]
}

const features: FeatureData[] = [
    {
        id: "nav",
        title: "Real-time Navigation",
        icon: <Navigation className="w-6 h-6" />,
        shortDescription: "Advanced obstacle detection and GPS-based route guidance ensure safe mobility.",
        fullDescription: "Echo Vision’s real-time navigation system guides visually impaired users with precise, instant feedback. Using a combination of ultrasonic sensors, depth cameras, and AI-driven path prediction, the device detects obstacles, moving objects, and sudden hazards within seconds. The system provides clear voice instructions and gentle vibration alerts to help the user move confidently through crowded areas, narrow pathways, and unfamiliar environments. Whether indoors or outdoors, Echo Vision ensures safe, continuous navigation by adapting dynamically to surroundings and lighting conditions.",
        keyPoints: [
            "Obstacle detection using ultrasonic + depth sensors.",
            "Instant audio and vibration alerts for hazards.",
            "Works in all environments (stairs, corridors, open roads).",
            "AI predicts safe walking paths in real time.",
            "Low-latency response for fast decision-making.",
        ],
        specs: ["Depth Sensors", "GPS Module", "Real-time Processing", "Multi-language Support"],
        benefits: "Navigate streets safely with instant audio feedback.",
        tags: ["Depth Sensors", "GPS Module", "Real-time Processing", "Multi-language Support"]
    },
    {
        id: "obj",
        title: "AI Object Recognition",
        icon: <ScanFace className="w-6 h-6" />,
        shortDescription: "Instantly recognize everyday objects, faces, and surroundings with on-device AI.",
        fullDescription: "Echo Vision integrates a powerful AI object recognition engine capable of identifying everyday objects, vehicles, furniture, road signs, and even people. The system processes visual input using an optimized deep-learning model running on-device, ensuring fast and secure detection without relying on the internet. It provides highly descriptive audio feedback, allowing users to understand what is around them within seconds.",
        keyPoints: [
            "Real-time identification of objects, vehicles, and people.",
            "Runs locally for privacy and speed.",
            "Detects distance, direction, and movement.",
            "Enhances spatial awareness and confidence.",
            "Adaptive learning improves accuracy.",
        ],
        specs: ["Neural Networks", "Real-time Processing", "Facial Recognition", "Emotion Detection"],
        benefits: "Recognize people and surroundings instantly.",
        tags: ["Neural Networks", "Real-time Processing", "Facial Recognition", "Emotion Detection"]
    },
    {
        id: "ocr",
        title: "Text-to-Speech (OCR)",
        icon: <FileText className="w-6 h-6" />,
        shortDescription: "Convert printed text, signs, and screens into clear, natural-sounding audio.",
        fullDescription: "Echo Vision’s OCR module reads printed text, digital screens, labels, books, signboards, and handwritten notes with high accuracy. Using advanced optical character recognition and natural-sounding text-to-speech technology, the device converts any visible text into clear audio output.",
        keyPoints: [
            "High-precision OCR for printed and handwritten text.",
            "Supports multiple languages.",
            "Works in low-light with IR assistance.",
            "Reads documents, screens, and labels.",
            "Fast processing for instant audio output.",
        ],
        specs: ["Advanced OCR", "25+ Languages", "Natural Speech", "Offline Capability"],
        benefits: "Read any text in front of you instantly.",
        tags: ["Advanced OCR", "25+ Languages", "Natural Speech", "Offline Capability"]
    },
    {
        id: "health",
        title: "Health Monitoring",
        icon: <HeartPulse className="w-6 h-6" />,
        shortDescription: "Continuous tracking of vitals with automated SOS alerts for safety.",
        fullDescription: "Echo Vision continuously monitors heart rate, blood oxygen (SpO₂), body movement, and stress indicators using onboard sensors. If abnormal readings are detected, the system alerts the user and can trigger SOS notifications to caregivers or emergency contacts.",
        keyPoints: [
            "Continuous heart rate and SpO₂ monitoring.",
            "Alerts for abnormal health conditions.",
            "Automatic SOS triggers.",
            "Syncs with mobile health dashboards.",
            "Enhances safety during travel and outdoor use.",
        ],
        specs: ["Heart Rate Monitor", "SpO₂ Tracking", "Emergency Alerts", "Health Dashboard"],
        benefits: "Monitor vital signs 24/7.",
        tags: ["Heart Rate Monitor", "SpO₂ Tracking", "Emergency Alerts", "Health Dashboard"]
    },
]

export function Capabilities() {
    const [selectedId, setSelectedId] = useState("nav")
    const [isModalOpen, setIsModalOpen] = useState(false)

    const selectedFeature = features.find((f) => f.id === selectedId) || features[0]

    return (
        <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-block mb-3">
                        <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold uppercase tracking-wider">
                            Powerful Features
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Extraordinary Capabilities
                    </h2>
                    <p className="text-lg text-slate-600">
                        Everything you need for independent navigation
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left: Feature List */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {features.map((feature) => {
                            const isActive = selectedId === feature.id
                            return (
                                <button
                                    key={feature.id}
                                    onClick={() => setSelectedId(feature.id)}
                                    className={`group relative text-left p-4 rounded-xl transition-all duration-300 border-2 w-full flex items-center gap-4
                    ${isActive
                                            ? "bg-white border-slate-900 shadow-md scale-[1.02]"
                                            : "bg-white/50 border-transparent hover:bg-white hover:border-slate-200 hover:shadow-sm"
                                        }
                  `}
                                >
                                    <div
                                        className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300
                      ${isActive ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700"}
                    `}
                                    >
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-lg transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-700"}`}>
                                            {feature.title}
                                        </h3>
                                        <p className={`text-sm transition-colors duration-300 ${isActive ? "text-slate-600" : "text-slate-500"}`}>
                                            Click to explore
                                        </p>
                                    </div>
                                </button>
                            )
                        })}
                    </div>

                    {/* Right: Preview Card */}
                    <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedFeature.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-[#0f172a] rounded-3xl p-8 md:p-12 text-white h-full shadow-2xl relative overflow-hidden"
                            >
                                {/* Subtle Grain/Texture overlay could go here */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-700/20 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>

                                <div className="relative z-10 flex flex-col items-start h-full">
                                    <div className="w-14 h-14 bg-slate-800/50 rounded-2xl flex items-center justify-center mb-6 text-blue-400 border border-slate-700">
                                        {selectedFeature.icon}
                                    </div>

                                    <h3 className="text-3xl font-bold mb-4 text-white">
                                        {selectedFeature.title}
                                    </h3>

                                    <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-xl">
                                        {selectedFeature.shortDescription}
                                    </p>

                                    <div className="mb-8">
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Features</div>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedFeature.tags.slice(0, 3).map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300 font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-auto w-full">
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Why It Matters</div>
                                        <p className="text-slate-300 mb-8 italic">
                                            {selectedFeature.benefits}
                                        </p>

                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="w-full bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-slate-100 transition-colors active:scale-95 duration-200"
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-white sticky top-0 z-10">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-slate-100 rounded-lg text-slate-900">
                                        {selectedFeature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">{selectedFeature.title}</h3>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="p-6 overflow-y-auto custom-scrollbar">
                                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                                    {selectedFeature.fullDescription}
                                </p>

                                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-slate-900 rounded-full"></span>
                                    Key Points
                                </h4>
                                <ul className="space-y-3 mb-8">
                                    {selectedFeature.keyPoints.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                                            <span className="text-slate-700">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="grid grid-cols-2 bg-slate-50 rounded-2xl p-6 gap-6 mb-8">
                                    {selectedFeature.specs.map((spec, i) => (
                                        <div key={i}>
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Spec {i + 1}</div>
                                            <div className="font-semibold text-slate-900">{spec}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-slate-900 text-white p-6 rounded-2xl flex items-start gap-4">
                                    <div className="p-2 bg-white/10 rounded-full shrink-0">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm text-slate-300 uppercase tracking-widest mb-1">Benefit</div>
                                        <div className="text-lg font-medium">
                                            {selectedFeature.benefits}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </section>
    )
}
