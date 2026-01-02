import { CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, FileText, Users, MessageSquare, Calendar, Building2, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { VideoCarousel } from "@/components/video-carousel"
import { MPCard } from "@/components/mp-card"
import { InsightCard } from "@/components/insight-card"
import { ParliamentOverview } from "@/components/parliament-overview"
import { PROCEEDING_VIDEOS, FEATURED_MPS, INSIGHT_CARDS } from "@/lib/constants"
import HeroSection from "@/components/hero"
import HeroStats from "@/components/hero-stats"
import AboutYouthParliament from "@/components/about-youth-parliament"
import ContinentalFocusAreas from "@/components/continental-focus-areas"
import NewsSection from "@/components/news-section"
import InsightsSection from "@/components/insights-section"
import FeaturedMpSection from "@/components/featured-mp-section"
import HomeCtaSection from "@/components/home-cta"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-16">
      <HeroSection />
      <HeroStats />
      <AboutYouthParliament />
      <ContinentalFocusAreas />
      <ParliamentOverview />
      <VideoCarousel
        title="Recent Proceedings"
        description="Watch sessions of parliamentary debates and committee hearings."
        videos={PROCEEDING_VIDEOS}
      />
      <NewsSection />
      <InsightsSection />
      <FeaturedMpSection />
      <section className="bg-gradient-to-b from-muted/30 to-muted/50 py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight uppercase mb-4 font-serif">Parliamentary Mandate</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The core constitutional functions that define our role in upholding democracy, representing citizens, and
              ensuring accountable governance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-border">
            <div className="bg-background p-8 hover:bg-primary hover:text-white group transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary group-hover:bg-white rounded flex items-center justify-center shrink-0">
                  <Scale className="h-6 w-6 text-white group-hover:text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-serif">Legislative Function</h3>
                  <p className="text-sm leading-relaxed opacity-90">
                    Debate, amend, and pass laws that govern the nation. Review bills through committee stages and
                    ensure legislation serves the public interest.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background p-8 hover:bg-primary hover:text-white group transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary group-hover:bg-white rounded flex items-center justify-center shrink-0">
                  <FileText className="h-6 w-6 text-white group-hover:text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-serif">Oversight & Accountability</h3>
                  <p className="text-sm leading-relaxed opacity-90">
                    Scrutinize government actions, review public expenditure, and hold the executive accountable through
                    questions, debates, and committee inquiries.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background p-8 hover:bg-primary hover:text-white group transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary group-hover:bg-white rounded flex items-center justify-center shrink-0">
                  <Users className="h-6 w-6 text-white group-hover:text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-serif">Representation</h3>
                  <p className="text-sm leading-relaxed opacity-90">
                    Voice the concerns, interests, and aspirations of constituents. Bridge the gap between government
                    and citizens through democratic participation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            >
              Learn About Parliamentary Procedures
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      <HomeCtaSection />
    </div>
  )
}
