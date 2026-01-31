import { EchoVisionHeader } from "./components/echo/EchoVisionHeader"
import { EchoVisionHero } from "./components/echo/EchoVisionHero"
import { Capabilities } from "./components/echo/Capabilities"
import { ProductSpecs } from "./components/echo/ProductSpecs"
import { TechStack } from "./components/echo/TechStack"
import { SecurityPrivacy } from "./components/echo/SecurityPrivacy"
import { SustainabilityAccessibility } from "./components/echo/SustainabilityAccessibility"
import { CommunitySupport } from "./components/echo/CommunitySupport"
import { CallToAction } from "./components/echo/CallToAction"
import { ContactForm } from "./components/echo/ContactForm"
import { Footer } from "./components/generated/Footer"
import { Toaster } from "sonner"

function App() {
  return (
    <>
      <EchoVisionHeader />
      <EchoVisionHero />
      <Capabilities />
      <ProductSpecs />
      <TechStack />
      <SecurityPrivacy />
      <SustainabilityAccessibility />
      <CommunitySupport />
      <CallToAction />

      {/* Simple Top Divider Line */}
      <div className="w-full h-px bg-slate-200"></div>

      {/* Notify / Stay Updated Section - Separate from CTA */}
      <section id="prebook-form" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-slate-900/10 rounded-full text-sm font-semibold text-slate-700 mb-4">
              Stay Informed
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Get Notified About Echo Vision
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto leading-relaxed">
              Be notified about product launches, early access opportunities, and important announcements.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Simple Bottom Divider Line */}
      <div className="w-full h-px bg-slate-200"></div>

      <Footer />
      <Toaster />
    </>
  )
}

export default App
