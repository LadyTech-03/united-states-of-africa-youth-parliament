import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

const focusAreas = [
    "Youth Employment & Ownership",
    "Education for the Future Economy",
    "Digital & Data Sovereignty",
    "Ethical Governance & Anti-Corruption",
    "Pan-African Unity & Mobility",
    "Climate, Food & Sustainability"
]

const ContinentalFocusAreas = () => {
    return (
        <section className="relative bg-foreground text-background py-24 md:py-32 overflow-hidden">
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                                      linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left: Header */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-px w-16 bg-background/40" />
                                <span className="text-xs uppercase tracking-[0.3em] text-background/60 font-semibold">
                                    Six Pillars
                                </span>
                            </div>

                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif leading-[0.95] tracking-tight">
                                Our Continental
                                <span className="block mt-3">Focus Areas</span>
                            </h2>
                        </div>

                        <p className="text-lg md:text-xl text-background/70 leading-relaxed max-w-lg">
                            Strategic pillars driving youth-led transformation across Africa's governance, economy, and future.
                        </p>

                        <div className="pt-6">
                            <Link href="/policy-areas">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-14 px-10 text-base group bg-transparent border-2 border-background text-background hover:bg-background hover:text-foreground"
                                >
                                    Explore Policy Areas
                                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Focus Areas List */}
                    <div className="space-y-0 border-l-2 border-background/20 pl-8 md:pl-12">
                        {focusAreas.map((area, index) => (
                            <div
                                key={index}
                                className="group py-6 border-b border-background/10 last:border-b-0 hover:border-background/30 transition-all duration-300"
                            >
                                <div className="flex items-start gap-6">
                                    {/* Number */}
                                    <span className="text-5xl md:text-6xl font-bold font-mono text-background/20 group-hover:text-background/40 transition-colors leading-none pt-1 shrink-0">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-bold font-serif leading-tight pt-2 group-hover:translate-x-2 transition-transform duration-300">
                                        {area}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContinentalFocusAreas
