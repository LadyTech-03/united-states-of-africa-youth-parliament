import { Metadata } from "next"
import { SectionHero } from "@/components/section-hero"
import { ParliamentDocsTable } from "@/components/docs-table"
import { VOTES_PROCEEDINGS } from "@/lib/votes-proceedings"

export const metadata: Metadata = {
    title: "Parliamentary Votes and Proceedings | United States of Africa Youth Parliament",
    description: "Official schedule of parliamentary sessions, bill discussions, and committee meetings.",
}

export default function VotesProceedingsPage() {
    return (
        <div className="min-h-screen bg-background">
            <SectionHero
                title="Votes and Proceedings"
            />

            <div className="container mx-auto px-4 py-12 -mt-8">
                <div className="bg-background rounded-xl p-6 md:p-10 border shadow-sm">
                    <ParliamentDocsTable
                        data={VOTES_PROCEEDINGS}
                        showStatus={false}
                        showTypeFilter={false}
                        emptyMessage="No votes and proceedings."
                    />
                </div>
            </div>
        </div>
    )
}
