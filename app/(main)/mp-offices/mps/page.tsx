import { Metadata } from "next"
import { SectionHero } from "@/components/section-hero"
import { MpsDirectory } from "@/components/mps/mps-directory"

export const metadata: Metadata = {
    title: "Members of Parliament | United States of Africa Youth Parliament",
    description: "Directory of all sitting Members of Parliament (MPs) sorted by constituency and party.",
}

export default function MpsPage() {
    return (
        <div className="min-h-screen bg-background">
            <SectionHero
                indicator="Directory"
                title="Members of Parliament"
            />

            <div className="container mx-auto px-4 py-12 -mt-8">
                <div className="bg-background rounded-xl p-6 md:p-10 border shadow-sm min-h-[500px]">
                    <MpsDirectory />
                </div>
            </div>
        </div>
    )
}
