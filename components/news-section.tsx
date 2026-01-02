import { ArrowRight } from "lucide-react"
import SectionWrapper from "./section-wrapper"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"
import Link from "next/link"

const NewsSection = () => {
    return (
        <SectionWrapper className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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
            <Card className="md:col-span-2 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-1 w-12 bg-accent" />
                  <CardTitle className="text-2xl font-serif">From the President</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row gap-6 items-start">
                <div className="relative w-48 h-56 shrink-0 rounded overflow-hidden border border-primary shadow-xl">
                  <Image src="/images/speaker.jpg" alt="Speaker Portrait" fill className="object-cover" />
                </div>
                <div className="space-y-4 flex-1">
                  <p className="text-base leading-relaxed italic text-foreground/90">
                    "Transparency is the cornerstone of our democracy. Through this digital platform, we invite all
                    citizens to engage with parliamentary proceedings, track legislation, and hold their representatives
                    accountable. Our commitment remains steadfast: to serve the people with integrity, openness, and
                    unwavering dedication to democratic principles."
                  </p>
                  <div className="pt-4 border-t border-primary/20">
                    <p className="text-lg font-bold text-primary font-serif">His Excellency AGBEGNIGAN Yaovi</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">
                        PRESIDENT
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
              The parliament is open to visitors all year round from Monday to Friday..
            </p>
            <Link href="/visit">
            <Button className="w-full bg-accent hover:bg-accent/90">
                Book a Tour
            </Button>
            </Link>
          </div>
        </aside>
      </SectionWrapper>
    )
}

export default NewsSection
