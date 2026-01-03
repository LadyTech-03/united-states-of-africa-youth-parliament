import { Metadata } from "next"
import { SectionHero } from "@/components/section-hero"
import { ParliamentDocsTable } from "@/components/docs-table"
import { BUSINESS_STATEMENTS } from "@/lib/business-statements-data"

export const metadata: Metadata = {
    title: "Business Statements | United States of Africa Youth Parliament",
    description: "Weekly business statements outlining the upcoming parliamentary schedule.",
}

export default function BusinessStatementsPage() {
    return (
        <div className="min-h-screen bg-background">
            <SectionHero
                indicator="Parliamentary Business"
                title="Business Statements"
            />

            <div className="container mx-auto px-4 py-12 -mt-8">
                <div className="bg-background rounded-xl p-6 md:p-10 border shadow-sm">
                    <ParliamentDocsTable
                        data={BUSINESS_STATEMENTS}
                        showStatus={false}
                        showTypeFilter={true}
                        emptyMessage="No specific business statements available."
                        types={["Finance Issues", "Business Statement", "Other Statements"]}
                    />
                </div>
            </div>
        </div>
    )
}
