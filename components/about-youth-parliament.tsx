import { ArrowRight, Minus } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

const AboutYouthParliament = () => {
    return (
        <section className="relative overflow-hidden bg-background py-24">
            {/* Diagonal Accent Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-32 top-0 h-full w-1/3 bg-primary/[0.02] transform skew-x-[-8deg]" />
                <div className="absolute left-1/4 bottom-0 h-2/3 w-px bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Asymmetric Grid Layout */}
                <div className="grid grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Column - Main Content */}
                    <div className="col-span-12 lg:col-span-7 space-y-12">
                        {/* Section Label */}
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-primary" />
                            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                                Foundation
                            </span>
                        </div>

                        {/* Main Heading - Editorial Style */}
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif leading-[0.95] tracking-tight">
                                What Is the
                                <span className="block text-primary mt-2">Youth Parliament?</span>
                            </h2>

                            {/* Lead Paragraph - Magazine Style */}
                            <div className="max-w-2xl">
                                <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-light">
                                    The Kingdom of Kush / United States of Africa Youth Parliament is a{" "}
                                    <span className="font-semibold text-primary border-b-2 border-primary/30">
                                        continental governance platform
                                    </span>{" "}
                                    designed to give African youth real legislative voice, policy authority, and leadership training.
                                </p>
                            </div>

                            {/* Statement Block - Bold Typography */}
                            <div className="relative pl-6 border-l-4 border-accent max-w-xl">
                                <div className="space-y-3">
                                    <p className="text-lg font-bold text-foreground leading-tight">
                                        It is not symbolic.
                                    </p>
                                    <p className="text-lg font-bold text-foreground leading-tight">
                                        It is structural.
                                    </p>
                                    <p className="text-lg font-bold text-primary leading-tight">
                                        It is preparatory governance for Africa's future.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                            <Link href="/about">
                                <Button size="lg" className="h-14 px-10 text-base group">
                                    Learn More About Our Mandate
                                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Why It Matters */}
                    <div className="col-span-12 lg:col-span-5 lg:pt-32">
                        {/* Elevated Card with Shadow */}
                        <div className="relative">
                            {/* Accent Shadow Block */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-none transform rotate-1" />

                            {/* Main Content Block */}
                            <div className="relative bg-background border-2 border-foreground p-8 md:p-10">
                                {/* Number Badge */}
                                <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white font-serif">5</span>
                                </div>

                                <div className="space-y-8">
                                    {/* Heading */}
                                    <div className="space-y-3">
                                        <h3 className="text-3xl font-bold font-serif leading-tight">
                                            Why It Matters Now
                                        </h3>
                                        <div className="h-1 w-20 bg-accent" />
                                    </div>

                                    {/* List - Editorial Style */}
                                    <ul className="space-y-5">
                                        {[
                                            "Africa is the youngest continent on Earth",
                                            "Youth remain excluded from real power",
                                            "Economic systems do not prioritize ownership",
                                            "Borders divide opportunity",
                                            "Leadership renewal is overdue"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-4 group">
                                                <Minus className="h-5 w-5 text-accent shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                                                <span className="text-base leading-relaxed font-medium text-foreground/90">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <div className="pt-4">
                                        <Link href="/about/why-youth-governance" className="group inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold">
                                            <span className="border-b-2 border-accent/30 group-hover:border-accent pb-0.5">
                                                Why Youth Governance Matters
                                            </span>
                                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutYouthParliament
