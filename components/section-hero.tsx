interface SectionHeroProps {
    indicator?: string
    title: string
    subtitle?: string
}

export function SectionHero({ indicator, title, subtitle }: SectionHeroProps) {
    return (
        <section className="bg-primary text-white py-16 md:py-20 border-b">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl">
                    <span className="text-xs uppercase tracking-[0.3em] text-white/80 font-semibold mb-4 block">
                        {indicator}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-6 text-white">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-lg text-white/80">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}