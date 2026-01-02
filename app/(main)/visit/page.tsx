import { Metadata } from "next"
import { SectionHero } from "@/components/section-hero"
import { VisitApplicationForm } from "@/components/forms/visit-application-form"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, CheckCircle2, Clock, Info, ShieldAlert } from "lucide-react"

export const metadata: Metadata = {
    title: "Visit Parliament | United States of Africa Youth Parliament",
    description: "Plan your visit to the parliament, view opening hours, and rules of conduct.",
}

export default function VisitPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <SectionHero
                indicator="Public Engagement"
                title="Visit Parliament"
            />

            <div className="container mx-auto px-4 py-16 -mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Information & Rules */}
                    <div className="lg:col-span-7 space-y-12">

                        {/* General Info */}
                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold font-serif border-l-4 border-primary pl-4">
                                General Information
                            </h2>
                            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                                <p className="lead text-xl text-foreground font-medium">
                                    The Youth Parliament is open to visitors all year round from <span className="text-primary font-bold">Monday to Friday</span>.
                                </p>
                                <p>
                                    Visitors are welcome to watch proceedings from the public gallery. The gallery is usually open to the public from Tuesday to Friday when the House sits. You can, on most days, just turn up and wait for entry to the public gallery on the day.
                                </p>
                                <div className="bg-muted/50 p-6 rounded-lg border border-primary/10 my-6">
                                    <div className="flex items-start gap-3">
                                        <Info className="h-6 w-6 text-primary shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground mb-2 mt-0">No Advance Permission Needed</h3>
                                            <p className="text-sm m-0">
                                                It is not necessary for individuals who wish to observe the proceedings of Parliament to seek advance permission in writing. Individual visitors are just required to come with some form of identification (Passport, National ID, etc.). After passing through the security screens, they are allowed in.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    However, those who wish to visit Parliament in groups or to embark on educational tours are required to put their request in writing to the Director of Public Engagement or complete this <strong className="text-foreground">Online Application Form</strong> below.
                                </p>
                                <p className="text-sm italic">
                                    There is adequate vehicle parking space for visitors in front of the main entrance to Parliament.
                                </p>
                            </div>
                        </section>

                        <Separator />

                        {/* Rules of Conduct */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold font-serif flex items-center gap-3">
                                <ShieldAlert className="text-destructive h-6 w-6" />
                                Rules for Observing Debates
                            </h2>
                            <div className="space-y-4 text-muted-foreground bg-card border rounded-xl p-8 shadow-sm">
                                <p className="mb-4">
                                    Visitors are only allowed to observe the proceedings in the chamber. They are strictly prohibited from involving themselves in the business of the chamber by means of:
                                </p>
                                <ul className="grid gap-3">
                                    {[
                                        "Loud commentary",
                                        "Clapping or cheering",
                                        "Demonstrations",
                                        "Unruly behaviour"
                                    ].map((rule) => (
                                        <li key={rule} className="flex items-center gap-2">
                                            <AlertCircle className="h-4 w-4 text-destructive" />
                                            <span>{rule}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="my-6 space-y-4">
                                    <h4 className="font-bold text-foreground">Important Regulations:</h4>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>
                                            <strong>Photographs & Electronics:</strong> Photographs may not be taken without permission. All packages, binoculars, photographic equipment, recording equipment, and other electronic devices must be checked in at the entry point. Cellular phones must be switched off.
                                        </li>
                                        <li>
                                            <strong>Dress Code:</strong> Visitors are required to dress formally and in a manner befitting the dignity of the House.
                                        </li>
                                        <li>
                                            <strong>Conduct:</strong> Visitors are to refrain from any actions which may interrupt proceedings. Visitors must stand each time the Speaker's procession enters or leaves the chamber.
                                        </li>
                                        <li>
                                            <strong>Security Compliance:</strong> Visitors must abide by any instructions given by the gallery attendants, the Speaker, or security personnel.
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-destructive text-sm font-medium bg-destructive/10 p-4 rounded border border-destructive/20">
                                    Failure to observe these conditions may result in the removal of the visitor(s) from the gallery and referral of the incident to police investigation.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Application Form */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-24">
                            <div className="bg-card border rounded-xl shadow-xl overflow-hidden">
                                <div className="bg-primary p-6 text-primary-foreground">
                                    <h3 className="text-2xl font-bold font-serif mb-2">Apply as a Group</h3>
                                    <p className="text-primary-foreground/80 text-sm">
                                        Schools, organizations, and groups must apply in advance. Please fill out the form below.
                                    </p>
                                </div>
                                <div className="p-6 md:p-8">
                                    <VisitApplicationForm />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
