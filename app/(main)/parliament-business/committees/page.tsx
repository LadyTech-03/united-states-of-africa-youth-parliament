import { Metadata } from "next"
import { CommitteesList } from "@/components/committees-list"
import { SectionHero } from "@/components/section-hero"

export const metadata: Metadata = {
    title: "Parliamentary Committees | United States of Africa Youth Parliament",
    description: "Official standing committees of the Youth Parliament.",
}

export default function CommitteesPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Simple Header */}
            <SectionHero
                indicator="Legislative Body"
                title="Parliamentary Committees"
            />

            {/* Main Content Area */}
            <section className="container mx-auto px-4 py-12 -mt-8">
                <div className="bg-background rounded-xl p-6 md:p-8 border shadow-xl">
                    <CommitteesList />
                </div>
            </section>
        </div>
    )
}
