import { INSIGHT_CARDS } from "@/lib/constants"
import SectionWrapper from "./section-wrapper"
import { InsightCard } from "@/components/insight-card"

const InsightsSection = () => {
    return (
        <>
            <SectionWrapper className="bg-muted/30 py-16">
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
            </SectionWrapper>
        </>
    )
}

export default InsightsSection;