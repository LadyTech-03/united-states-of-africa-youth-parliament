import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

const HeroSection = () => {
    return (
        <>
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
                <Image
                    src="/images/hero.jpg"
                    alt="Parliament Building"
                    fill
                    className="object-cover opacity-30 grayscale"
                    priority
                />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider uppercase bg-accent text-accent-foreground">
                        Kingdom of Kush
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 text-balance font-serif">
                        Africa's Youth Governing the Future of a United Continent
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90 mb-10 text-pretty">
                        A continental youth-led parliamentary institution shaping Africa's political, economic and civilizational destiny
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" variant="secondary" className="h-12 px-8">
                            Join the Youth Parliament
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-12 px-8 bg-white/10 text-white border-white/20 hover:bg-white/20"
                        >
                            View Our Policy Agenda
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection