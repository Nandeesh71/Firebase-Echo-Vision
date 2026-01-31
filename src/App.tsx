import { EchoVisionHeader } from "./components/echo/EchoVisionHeader"
import { EchoVisionHero } from "./components/echo/EchoVisionHero"
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
      <ProductSpecs />
      <TechStack />
      <SecurityPrivacy />
      <SustainabilityAccessibility />
      <CommunitySupport />
      <CallToAction />

      {/* Dedicate Contact Section for separation */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <Footer />
      <Toaster />
    </>
  )
}

export default App
