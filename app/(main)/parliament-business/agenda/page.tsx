import { Metadata } from "next"
import { SectionHero } from "@/components/section-hero"
import { AgendaTable } from "@/components/agenda-table"

export const metadata: Metadata = {
    title: "Parliamentary Agenda | United States of Africa Youth Parliament",
    description: "Official schedule of parliamentary sessions, bill discussions, and committee meetings.",
}

export default function AgendaPage() {
    return (
        <div className="min-h-screen bg-background">
            <SectionHero
                indicator="Legislative Schedule"
                title="Parliamentary Agenda"
            />

            {/* Main Content Area */}
            <section className="container mx-auto px-4 py-12 -mt-8">
                <div className="bg-background rounded-xl p-6 md:p-8 border shadow-xl">
                    <AgendaTable />
                </div>
            </section>
        </div>
    )
}
