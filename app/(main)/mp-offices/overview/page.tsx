import { Metadata } from "next"
import { SectionHero } from "@/components/section-hero"
import { ChamberIntelligence } from "@/components/parliament/chamber-intelligence"

export const metadata: Metadata = {
    title: "Parliamentary Intelligence | United States of Africa Youth Parliament",
    description: "Interactive chamber visualization and parliamentary analytics.",
}

export default function OverviewPage() {
    return (
        <div className="min-h-screen bg-background">
            <SectionHero
                indicator="Overview"
                title="MPs & Offices"
            />

            <div className="container mx-auto px-4 py-8 -mt-8">
                <ChamberIntelligence />
            </div>
        </div>
    )
}
