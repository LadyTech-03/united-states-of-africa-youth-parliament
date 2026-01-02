import { Building2, Calendar, FileText, MessageSquare, NotebookPen, Scale, Users } from "lucide-react"

const HeroStats = () => {
    return (
        <>
            <section className="container mx-auto px-4 -mt-20 relative z-20">
                <div className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white shadow-2xl border-t-4 border-accent">
                <div className="grid grid-cols-2 md:grid-cols-6 divide-x divide-white/10">
                    <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
                    <Users className="h-6 w-6 mb-3 text-accent" />
                    <div className="text-3xl md:text-4xl font-bold font-serif mb-1">250</div>
                    <div className="text-xs uppercase tracking-wider text-white/80">Members</div>
                    </div>
                    <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
                    <FileText className="h-6 w-6 mb-3 text-accent" />
                    <div className="text-3xl md:text-4xl font-bold font-serif mb-1">42</div>
                    <div className="text-xs uppercase tracking-wider text-white/80">Bills Proposed</div>
                    </div>
                    <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
                    <Scale className="h-6 w-6 mb-3 text-accent" />
                    <div className="text-3xl md:text-4xl font-bold font-serif mb-1">18</div>
                    <div className="text-xs uppercase tracking-wider text-white/80">Acts Passed</div>
                    </div>
                    <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
                    <MessageSquare className="h-6 w-6 mb-3 text-accent" />
                    <div className="text-3xl md:text-4xl font-bold font-serif mb-1">127</div>
                    <div className="text-xs uppercase tracking-wider text-white/80">Debates</div>
                    </div>
                    <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
                    <Calendar className="h-6 w-6 mb-3 text-accent" />
                    <div className="text-3xl md:text-4xl font-bold font-serif mb-1">31</div>
                    <div className="text-xs uppercase tracking-wider text-white/80">Committees</div>
                    </div>
                    <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
                    <NotebookPen className="h-6 w-6 mb-3 text-accent" />
                    <div className="text-3xl md:text-4xl font-bold font-serif mb-1">95%</div>
                    <div className="text-xs uppercase tracking-wider text-white/80">Attendance</div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default HeroStats