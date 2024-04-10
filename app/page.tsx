import Footer from './components/Footer'
import LandingSection from './components/LandingSection'
import MapSection from './components/MapSection'

export default function Home() {
  return (
    <div className="w-full h-full snap-y snap-mandatory overflow-y-scroll scroll-py-10  scrollbar-hide">
      <LandingSection />
      <MapSection />
      <Footer />
    </div>
  )
}
