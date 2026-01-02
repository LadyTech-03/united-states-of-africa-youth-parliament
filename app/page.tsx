import { CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, FileText, Users, MessageSquare, Calendar, Building2, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { VideoCarousel } from "@/components/video-carousel"
import { MPCard } from "@/components/mp-card"
import { InsightCard } from "@/components/insight-card"
import { ParliamentPowerBalancePreview } from "@/components/parliament-power-balance-preview"
import { PROCEEDING_VIDEOS, FEATURED_MPS, INSIGHT_CARDS } from "@/lib/constants"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-primary">
        <Image
          src="/parliament-building-official.jpg"
          alt="Parliament Building"
          fill
          className="object-cover opacity-30 grayscale"
          priority
        />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider uppercase bg-accent text-accent-foreground">
            5th Parliament – 2024–2028 Session
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 text-balance font-serif">
            The National Parliament
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90 mb-10 text-pretty">
            Access official records, track ongoing legislation, and engage with your elected representatives. Ensuring
            transparency and accountability in governance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="h-12 px-8">
              Track Bills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              Find your MP
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white shadow-2xl border-t-4 border-accent">
          <div className="grid grid-cols-2 md:grid-cols-6 divide-x divide-white/10">
            <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
              <Building2 className="h-6 w-6 mb-3 text-accent" />
              <div className="text-3xl md:text-4xl font-bold font-serif mb-1">250</div>
              <div className="text-xs uppercase tracking-wider text-white/80">Members</div>
            </div>
            <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
              <FileText className="h-6 w-6 mb-3 text-accent" />
              <div className="text-3xl md:text-4xl font-bold font-serif mb-1">42</div>
              <div className="text-xs uppercase tracking-wider text-white/80">Bills Proposed</div>
            </div>
            <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
              <Scale className="h-6 w-6 mb-3 text-accent" />
              <div className="text-3xl md:text-4xl font-bold font-serif mb-1">18</div>
              <div className="text-xs uppercase tracking-wider text-white/80">Acts Passed</div>
            </div>
            <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
              <MessageSquare className="h-6 w-6 mb-3 text-accent" />
              <div className="text-3xl md:text-4xl font-bold font-serif mb-1">127</div>
              <div className="text-xs uppercase tracking-wider text-white/80">Debates</div>
            </div>
            <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
              <Calendar className="h-6 w-6 mb-3 text-accent" />
              <div className="text-3xl md:text-4xl font-bold font-serif mb-1">31</div>
              <div className="text-xs uppercase tracking-wider text-white/80">Committees</div>
            </div>
            <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
              <Users className="h-6 w-6 mb-3 text-accent" />
              <div className="text-3xl md:text-4xl font-bold font-serif mb-1">95%</div>
              <div className="text-xs uppercase tracking-wider text-white/80">Attendance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Parliamentary Power Balance Visualization */}
      <section className="container mx-auto px-4 py-12">
        <ParliamentPowerBalancePreview />
      </section>

      {/* Proceedings Section */}
      <section className="container mx-auto px-4 py-8">
        <VideoCarousel
          title="Recent Proceedings"
          description="Watch live and archived sessions of parliamentary debates and committee hearings."
          videos={PROCEEDING_VIDEOS}
        />
      </section>

      {/* Highlights & News */}
      <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-3xl font-bold border-b-2 border-primary w-fit pb-2 mb-6 uppercase tracking-tight font-serif">
              Current Highlights
            </h2>
            <div className="space-y-4">
              {[
                { title: "Environment Protection Act (Amendment) 2026", status: "In Committee", date: "Jan 1, 2026" },
                { title: "National Budget Framework 2026/27", status: "Second Reading", date: "Dec 28, 2025" },
                { title: "Digital Infrastructure Bill", status: "Passed", date: "Dec 20, 2025" },
              ].map((bill, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="space-y-1">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{bill.title}</h3>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span className="uppercase font-medium text-accent">{bill.status}</span>
                      <span>Last action: {bill.date}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="md:col-span-2 bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-primary shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-1 w-12 bg-accent" />
                  <CardTitle className="text-2xl font-serif">From the Speaker</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row gap-6 items-start">
                <div className="relative w-48 h-56 shrink-0 rounded overflow-hidden border-4 border-primary shadow-xl">
                  <Image src="/official-portrait.png" alt="Speaker Portrait" fill className="object-cover" />
                </div>
                <div className="space-y-4 flex-1">
                  <p className="text-base leading-relaxed italic text-foreground/90">
                    "Transparency is the cornerstone of our democracy. Through this digital platform, we invite all
                    citizens to engage with parliamentary proceedings, track legislation, and hold their representatives
                    accountable. Our commitment remains steadfast: to serve the people with integrity, openness, and
                    unwavering dedication to democratic principles."
                  </p>
                  <div className="pt-4 border-t border-primary/20">
                    <p className="text-lg font-bold text-primary font-serif">Rt. Hon. Jane Doe</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">
                      Speaker of the National Parliament
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-white border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-serif">Upcoming Sittings</CardTitle>
                <CardDescription className="text-primary-foreground/70">Next 7 days</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                  <span>Plenary Session</span>
                  <span className="font-mono">Jan 05, 10:00</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                  <span>Finance Committee</span>
                  <span className="font-mono">Jan 06, 09:30</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Public Hearing: Bill 22</span>
                  <span className="font-mono">Jan 08, 14:00</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* News Sidebar */}
        <aside className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold border-b-2 border-primary w-fit pb-2 mb-6 uppercase tracking-tight font-serif">
              Latest News
            </h2>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-2 group cursor-pointer">
                  <div className="text-xs text-muted-foreground uppercase font-medium">
                    Press Release • Jan 01, 2026
                  </div>
                  <h3 className="font-bold leading-tight group-hover:text-primary transition-colors underline-offset-4 decoration-primary/30 group-hover:underline">
                    Parliament hosts international delegation for governance summit
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    A high-level delegation from the United Nations visited the Parliament today to discuss advancements
                    in digital transparency...
                  </p>
                </div>
              ))}
              <Button variant="link" className="px-0 text-primary font-bold">
                View all news
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="p-6 bg-accent/10 rounded border border-accent/30 space-y-4 shadow-md">
            <h3 className="font-bold text-accent text-lg font-serif">Visit Parliament</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tours are available Monday to Friday. Book your visit to witness democracy in action.
            </p>
            <Button className="w-full bg-accent hover:bg-accent/90">Book a Tour</Button>
          </div>
        </aside>
      </section>

      {/* Parliamentary Insights Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight uppercase mb-4 italic">Insights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Official alerts, legislative highlights, and parliamentary updates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {INSIGHT_CARDS.map((card) => (
              <InsightCard key={card.id} data={card} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured MPs Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tight font-serif">Featured MPs</h2>
            <p className="text-muted-foreground">Leadership and members of the current parliamentary session.</p>
          </div>
          <Button variant="outline">
            View All Members
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_MPS.map((mp) => (
            <MPCard key={mp.id} data={mp} />
          ))}
        </div>
      </section>

      {/* Parliamentary Mandate - formal institutional section */}
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

      {/* Stay Informed Section */}
      <section className="container mx-auto px-4">
        <Card className="border-none shadow-2xl bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
          <CardContent className="p-12 text-center relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-serif">
                Stay Informed. Stay Engaged. Stay Connected.
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
                Subscribe to receive updates on legislation, committee meetings, and parliamentary activities directly
                to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="max-w-md bg-white text-foreground"
                />
                <Button size="lg" variant="secondary" className="px-8">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
