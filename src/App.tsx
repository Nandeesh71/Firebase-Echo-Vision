import { EchoVisionHeader } from "./components/echo/EchoVisionHeader"
import { EchoVisionHero } from "./components/echo/EchoVisionHero"
import { ProductSpecs } from "./components/echo/ProductSpecs"
import { TechStack } from "./components/echo/TechStack"
import { SecurityPrivacy } from "./components/echo/SecurityPrivacy"
import { SustainabilityAccessibility } from "./components/echo/SustainabilityAccessibility"
import { CommunitySupport } from "./components/echo/CommunitySupport"
import { CallToAction } from "./components/echo/CallToAction"
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
      <Footer />
      <Toaster />
    </>
  )
}

export default App
