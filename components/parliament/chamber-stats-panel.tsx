"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Seat, Party, PARLIAMENT_PARTIES } from "@/lib/parliament-data"
import { ViewMode } from "./chamber-intelligence"
import { UserCircle, MapPin, Briefcase, Award } from "lucide-react"

interface ChamberStatsPanelProps {
    viewMode: ViewMode
    seats: Seat[]
    selectedSeat: Seat | null
    hoveredFilter: (id: string | null) => void
}

export function ChamberStatsPanel({ viewMode, seats, selectedSeat, hoveredFilter }: ChamberStatsPanelProps) {
    const totalSeats = seats.length

    // Stats Logic
    const renderStats = () => {
        if (viewMode === "party") {
            // Calculate party splits
            const sortedParties = [...PARLIAMENT_PARTIES].sort((a, b) => {
                return seats.filter(s => s.partyId === b.id).length - seats.filter(s => s.partyId === a.id).length
            })

            return (
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground my-4">Composition Analysis</h3>
                    <div className="space-y-3">
                        {sortedParties.map(party => {
                            const count = seats.filter(s => s.partyId === party.id).length
                            const pct = (count / totalSeats) * 100

                            return (
                                <div
                                    key={party.id}
                                    className="group cursor-pointer p-2 rounded hover:bg-muted/50 transition-colors"
                                    onMouseEnter={() => hoveredFilter(party.id)}
                                    onMouseLeave={() => hoveredFilter(null)}
                                >
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-medium">{party.name}</span>
                                        <span className="font-mono text-muted-foreground">{count}</span>
                                    </div>
                                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full"
                                            style={{ width: `${pct}%`, backgroundColor: party.color }}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }

        if (viewMode === "attendance") {
            const present = seats.filter(s => s.attendanceState === "Present").length
            const absent = seats.filter(s => s.attendanceState === "Absent").length
            const excused = seats.filter(s => s.attendanceState === "Excused").length

            return (
                <div className="space-y-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground my-4">Attendance Record</h3>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20 text-center" onMouseEnter={() => hoveredFilter("Present")}>
                            <div className="text-2xl font-bold text-green-700">{present}</div>
                            <div className="text-xs text-green-600 font-medium">Present</div>
                        </div>
                        <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20 text-center" onMouseEnter={() => hoveredFilter("Absent")}>
                            <div className="text-2xl font-bold text-red-700">{absent}</div>
                            <div className="text-xs text-red-600 font-medium">Absent</div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Quorum Status</span>
                            <span>{Math.round((present / totalSeats) * 100)}% Present</span>
                        </div>
                        <Progress value={(present / totalSeats) * 100} className="h-2" />
                        <p className="text-[10px] text-muted-foreground">Quorum threshold: 50% + 1</p>
                    </div>
                </div>
            )
        }

        if (viewMode === "seniority") {
            const junior = seats.filter(s => s.seniority < 5).length
            const mid = seats.filter(s => s.seniority >= 5 && s.seniority < 15).length
            const senior = seats.filter(s => s.seniority >= 15).length

            return (
                <div className="space-y-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground my-4">Tenure Distribution</h3>
                    <div className="space-y-4">
                        <div className="bg-purple-900/10 p-3 rounded border border-purple-900/20" onMouseEnter={() => hoveredFilter("Senior")}> {/* Need logic in SVG to handle this string filter if implementing fully, simplifying for now */}
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-purple-900">Senior (15+ yrs)</span>
                                <span className="font-bold">{senior}</span>
                            </div>
                            <div className="h-1.5 bg-purple-200 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-900 w-[var(--w)]" style={{ "--w": `${(senior / totalSeats) * 100}%` } as any} />
                            </div>
                        </div>

                        <div className="bg-purple-500/10 p-3 rounded border border-purple-500/20">
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-purple-600">Mid-Level (5-15 yrs)</span>
                                <span className="font-bold">{mid}</span>
                            </div>
                            <div className="h-1.5 bg-purple-200 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-600 w-[var(--w)]" style={{ "--w": `${(mid / totalSeats) * 100}%` } as any} />
                            </div>
                        </div>

                        <div className="bg-purple-300/10 p-3 rounded border border-purple-300/20">
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-purple-400">Junior (0-5 yrs)</span>
                                <span className="font-bold">{junior}</span>
                            </div>
                            <div className="h-1.5 bg-purple-200 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-400 w-[var(--w)]" style={{ "--w": `${(junior / totalSeats) * 100}%` } as any} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        // Gender default
        const male = seats.filter(s => s.gender === "Male").length
        const female = seats.filter(s => s.gender === "Female").length
        return (
            <div className="space-y-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground my-4">Gender Balance</h3>
                <div className="flex items-center gap-4">
                    <div className="flex-1 bg-blue-500/10 p-4 rounded border border-blue-500/20 text-center" onMouseEnter={() => hoveredFilter("Male")}>
                        <div className="text-3xl font-bold text-blue-600">{male}</div>
                        <div className="text-xs uppercase font-bold text-blue-400">Male MPs</div>
                    </div>
                    <div className="flex-1 bg-pink-500/10 p-4 rounded border border-pink-500/20 text-center" onMouseEnter={() => hoveredFilter("Female")}>
                        <div className="text-3xl font-bold text-pink-600">{female}</div>
                        <div className="text-xs uppercase font-bold text-pink-400">Female MPs</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="h-full border-l bg-card/50 p-6 flex flex-col">
            <h2 className="text-xl font-bold font-serif mb-6 border-b pb-4">
                Analytics & Insights
            </h2>

            {/* Selected MP Profile */}
            <div className="h-72">
                {selectedSeat ? (
                    <div className="fade-in duration-200 mb-8 bg-background border rounded-lg p-5 shadow-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center border-2 border-primary text-2xl font-serif">
                                {selectedSeat.mpName[0]}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg leading-tight">{selectedSeat.mpName}</h3>
                                <p className="text-sm text-muted-foreground">{selectedSeat.constituency}</p>
                            </div>
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3">
                                <Award className="h-4 w-4 text-primary" />
                                <span>{PARLIAMENT_PARTIES.find(p => p.id === selectedSeat.partyId)?.name}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span>{selectedSeat.region} Region</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Briefcase className="h-4 w-4 text-muted-foreground" />
                                <span>{selectedSeat.seniority} years in service</span>
                            </div>

                            <div className="mt-4 pt-4 border-t flex justify-between items-center">
                                <span className="text-xs font-bold uppercase text-muted-foreground">Attendance</span>
                                <span className={`text-xs font-bold px-2 py-0.5 rounded ${selectedSeat.attendanceState === "Present" ? "bg-green-100 text-green-700" :
                                        selectedSeat.attendanceState === "Absent" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                                    }`}>
                                    {selectedSeat.attendanceState}
                                </span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="mb-8 p-6 border border-dashed rounded-lg text-center text-muted-foreground bg-muted/20">
                        <UserCircle className="h-10 w-10 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">Select a seat to view MP profile metrics</p>
                    </div>
                )}
            </div>

            {/* Dynamic Charts */}
            <div className="flex-1">
                {renderStats()}
            </div>
        </div>
    )
}
