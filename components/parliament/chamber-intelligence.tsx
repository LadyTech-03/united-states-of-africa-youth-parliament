"use client"

import { useState } from "react"
import { PARLIAMENT_SEATS, Seat, PARLIAMENT_PARTIES } from "@/lib/parliament-data"
import { ChamberSvg } from "./chamber-svg"
import { ChamberControls } from "./chamber-controls"
import { ChamberStatsPanel } from "./chamber-stats-panel"
import { ChamberDemographics } from "./chamber-demographics"
import { Card } from "@/components/ui/card"

export type ViewMode = "party" | "gender" | "attendance" | "seniority"

export function ChamberIntelligence() {
    const [viewMode, setViewMode] = useState<ViewMode>("party")
    const [hoveredSeatId, setHoveredSeatId] = useState<string | null>(null)
    const [selectedSeatId, setSelectedSeatId] = useState<string | null>(null)
    const [hoveredFilter, setHoveredFilter] = useState<string | null>(null)

    const selectedSeat = selectedSeatId ? PARLIAMENT_SEATS.find(s => s.id === selectedSeatId) || null : null

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

            {/* Left Main Visualization Area */}
            <div className="lg:col-span-3 flex flex-col gap-6">

                {/* Controls Toolbar */}
                <ChamberControls
                    viewMode={viewMode}
                    onModeChange={setViewMode}
                    onExport={() => alert("Exporting intelligence report...")}
                />

                {/* Main Chamber Card */}
                <Card className="flex-1 p-8 flex items-center justify-center bg-card/50 relative overflow-hidden">
                    <div className="absolute top-4 left-4 z-10">
                        <h3 className="text-lg font-bold font-serif opacity-50 uppercase tracking-widest">
                            Chamber Floor
                        </h3>
                    </div>

                    <div className="w-full max-w-4xl">
                        <ChamberSvg
                            seats={PARLIAMENT_SEATS}
                            viewMode={viewMode}
                            hoveredSeat={hoveredSeatId}
                            focusedSeat={selectedSeatId} // Use selected as focused for persistent highlight
                            hoveredFilter={hoveredFilter}
                            onHoverSeat={setHoveredSeatId}
                            onClickSeat={setSelectedSeatId}
                        />
                    </div>

                    {/* Floating Quick Info (when hovering but no selection) */}
                    {hoveredSeatId && !selectedSeatId && (
                        <div className="absolute bottom-8 bg-popover/90 backdrop-blur text-popover-foreground px-4 py-2 rounded-full shadow-lg border text-sm font-medium animate-in fade-in slide-in-from-bottom-2">
                            {PARLIAMENT_SEATS.find(s => s.id === hoveredSeatId)?.mpName}
                        </div>
                    )}
                </Card>
            </div>

            {/* Right Intelligence Panel */}
            <div className="lg:col-span-1 h-full overflow-hidden rounded-xl border bg-card shadow-sm my-4">
                <ChamberStatsPanel
                    viewMode={viewMode}
                    seats={PARLIAMENT_SEATS}
                    selectedSeat={selectedSeat}
                    hoveredFilter={setHoveredFilter}
                />
            </div>

            {/* Demographics Charts Row - Full Width */}
            <div className="col-span-1 lg:col-span-4 pb-8">
                <ChamberDemographics seats={PARLIAMENT_SEATS} />
            </div>

        </div>
    )
}
