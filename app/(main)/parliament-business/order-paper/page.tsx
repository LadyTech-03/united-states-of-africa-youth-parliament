import { Metadata } from "next"
import { SectionHero } from "@/components/section-hero"
import { ParliamentDocsTable } from "@/components/docs-table"
import { ORDER_PAPERS } from "@/lib/order-papers"

export const metadata: Metadata = {
    title: "Parliamentary Order Papers | United States of Africa Youth Parliament",
    description: "Official schedule of parliamentary sessions, bill discussions, and committee meetings.",
}

export default function OrderPaperPage() {
    return (
        <div className="min-h-screen bg-background">
            <SectionHero
                title="Order Papers"
            />

            <div className="container mx-auto px-4 py-12 -mt-8">
                <div className="bg-background rounded-xl p-6 md:p-10 border shadow-sm">
                    <ParliamentDocsTable
                        data={ORDER_PAPERS}
                        showStatus={false}
                        showTypeFilter={false}
                        emptyMessage="No order papers."
                    />
                </div>
            </div>
        </div>
    )
}
