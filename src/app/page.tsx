import { Hero } from '@/components/sections/Hero'
import KPIMarquee from '@/components/sections/KPIMarquee'
import TimelineGrid from '@/components/sections/TimelineGrid'
import HowItWorks from '@/components/sections/HowItWorks'
import { Stats } from '@/components/sections/Stats'
import { Features } from '@/components/sections/Features'
import PressMentions from '@/components/sections/PressMentions'
import TrustBadges from '@/components/sections/TrustBadges'
import FAQ from '@/components/sections/FAQ'
import { Footer } from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen landing-bg dark:bg-gray-900">
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <KPIMarquee />
        <Stats />
        <TimelineGrid />
        <TrustBadges />
        <PressMentions />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
