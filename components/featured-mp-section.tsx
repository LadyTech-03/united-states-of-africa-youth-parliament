import { ArrowRight } from "lucide-react"
import SectionWrapper from "./section-wrapper"
import { Button } from "./ui/button"
import { FEATURED_MPS } from "@/lib/constants"
import { MPCard } from "@/components/mp-card"



const FeaturedMpSection = () => {
    return (
        <SectionWrapper>
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
        </SectionWrapper>
    )
}

export default FeaturedMpSection
