"use client"

import Folder from "./Folder"

export function ProductSpecs() {
  const processingUnitPaper = (
    <div className="p-4 h-full flex flex-col justify-center">
      <h3 className="text-sm font-bold text-slate-900 mb-2">Processing Unit</h3>
      <p className="text-xs text-slate-700 leading-relaxed">Raspberry Pi 5 (8GB RAM)</p>
    </div>
  )

  const aiAcceleratorPaper = (
    <div className="p-4 h-full flex flex-col justify-center">
      <h3 className="text-sm font-bold text-slate-900 mb-2">AI Accelerator</h3>
      <p className="text-xs text-slate-700 leading-relaxed">NVIDIA Jetson Nano</p>
    </div>
  )

  const depthCameraPaper = (
    <div className="p-4 h-full flex flex-col justify-center">
      <h3 className="text-sm font-bold text-slate-900 mb-2">Depth Camera</h3>
      <p className="text-xs text-slate-700 leading-relaxed">Intel RealSense Depth D435i</p>
    </div>
  )

  const ultrasonicSensorsPaper = (
    <div className="p-4 h-full flex flex-col justify-center">
      <h3 className="text-sm font-bold text-slate-900 mb-2">Ultrasonic Sensors</h3>
      <p className="text-xs text-slate-700 leading-relaxed">HC-SR04 (×3)</p>
    </div>
  )

  const healthSensorPaper = (
    <div className="p-4 h-full flex flex-col justify-center">
      <h3 className="text-sm font-bold text-slate-900 mb-2">Health Sensor</h3>
      <p className="text-xs text-slate-700 leading-relaxed">MAX30102</p>
    </div>
  )

  const connectivityPaper = (
    <div className="p-4 h-full flex flex-col justify-center">
      <h3 className="text-sm font-bold text-slate-900 mb-2">Connectivity Module</h3>
      <p className="text-xs text-slate-700 leading-relaxed">ESP32 (WiFi + Bluetooth)</p>
    </div>
  )

  const batteryPaper = (
    <div className="p-4 h-full flex flex-col justify-center">
      <h3 className="text-sm font-bold text-slate-900 mb-2">Battery Capacity</h3>
      <p className="text-xs text-slate-700 leading-relaxed">10,000 mAh Lithium-ion</p>
    </div>
  )

  return (
    <section id="specifications" className="pt-28 pb-24 sm:pt-24 sm:pb-24 md:pt-24 md:pb-24 lg:pt-24 lg:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-8 duration-700">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4">Technical Specifications</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Precision-engineered hardware components working in harmony to deliver reliable assistive technology
          </p>
        </div>

        <div className="relative w-full overflow-x-hidden flex items-center justify-center pb-20 mt-24 sm:mt-20 md:mt-16 lg:mt-12 h-[440px] md:h-[540px] lg:h-[600px]">
          <div className="transform origin-center scale-[0.9] sm:scale-100 md:scale-[1.5] lg:scale-[2.2]">
            <Folder size={1} color="#0f172a" className="custom-folder" items={[processingUnitPaper, aiAcceleratorPaper, depthCameraPaper, ultrasonicSensorsPaper, healthSensorPaper, connectivityPaper, batteryPaper]} />
          </div>
        </div>
      </div>
    </section>
  )
}
