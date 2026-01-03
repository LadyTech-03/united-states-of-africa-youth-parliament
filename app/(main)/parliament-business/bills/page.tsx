import { Metadata } from "next"
import { SectionHero } from "@/components/section-hero"
import { ParliamentDocsTable } from "@/components/docs-table"
import { BILLS } from "@/lib/bills-data"

export const metadata: Metadata = {
    title: "Parliamentary Acts | United States of Africa Youth Parliament",
    description: "Official schedule of parliamentary sessions, bill discussions, and committee meetings.",
}

export default function BillsPage() {
    return (
        <div className="min-h-screen bg-background">
            <SectionHero
                title="Bills"
            />

            <div className="container mx-auto px-4 py-12 -mt-8">
                <div className="bg-background rounded-xl p-6 md:p-10 border shadow-sm">
                    <ParliamentDocsTable
                        data={BILLS}
                        showDate={false}
                        showStatus={false}
                        showTypeFilter={false}
                        showLaidBy={true}
                        showLaidOn={true}
                        showGazettedOn={true}
                        showDateOfAssent={true}
                        emptyMessage="No acts."
                    />
                </div>
            </div>
        </div>
    )
}
