"use client"

import { useMemo } from "react"
import { Seat, Party, PARLIAMENT_PARTIES } from "@/lib/parliament-data"

export type ViewMode = "party" | "gender" | "attendance" | "seniority"

interface ChamberSvgProps {
    seats: Seat[]
    viewMode: ViewMode
    hoveredSeat: string | null
    focusedSeat: string | null
    hoveredFilter: string | null // e.g. Party ID or Gender key
    onHoverSeat: (seatId: string | null) => void
    onClickSeat: (seatId: string) => void
}

/**
 * Advanced SVG Chamber Visualization
 * Handles dynamic coloring logic based on ViewMode
 */
export function ChamberSvg({
    seats,
    viewMode,
    hoveredSeat,
    focusedSeat,
    hoveredFilter,
    onHoverSeat,
    onClickSeat
}: ChamberSvgProps) {

    // Pre-calculate positions (copy logic from parliament-overview or reuse common util)
    // For simplicity, reusing the logic here but cleaner
    const seatPositions = useMemo(() => {
        // Basic config
        const numRows = 9
        const baseRadius = 160
        const radiusIncrement = 28
        const centerX = 400
        const centerY = 380
        const seatsPerRow = [18, 22, 26, 30, 34, 38, 42, 46, 50]

        // Simple filling strategy for this "Intelligence" view
        // We want a stable layout so we can just recolor dots
        // We will use the same stable "Intelligent Grouping" logic to match the overview
        const sortedParties = [...PARLIAMENT_PARTIES].sort((a, b) => {
            const aCount = seats.filter(s => s.partyId === a.id).length
            const bCount = seats.filter(s => s.partyId === b.id).length
            return bCount - aCount
        })

        const seatsByParty = new Map<string, Seat[]>()
        sortedParties.forEach(p => seatsByParty.set(p.id, seats.filter(s => s.partyId === p.id)))

        const orderedSeats: Seat[] = []
        // Majority center, opposition flanks
        const largest = sortedParties[0]
        const others = sortedParties.slice(1)

        orderedSeats.push(...(seatsByParty.get(largest.id) || []))
        others.forEach(p => orderedSeats.push(...(seatsByParty.get(p.id) || [])))

        const calculatedPositions: { seat: Seat, x: number, y: number, row: number }[] = []
        let seatIndex = 0

        // Using the "Center Fill" Logic
        // We fill rows, but we need to re-sort row contents so Majority is in middle
        for (let row = 0; row < numRows; row++) {
            const radius = baseRadius + (row * radiusIncrement)
            const count = seatsPerRow[row]
            const rowSeats: Seat[] = []

            // Grab next chunk of seats
            for (let k = 0; k < count; k++) {
                if (seatIndex < orderedSeats.length) {
                    rowSeats.push(orderedSeats[seatIndex++])
                }
            }

            // Re-order rowSeats so Majority party is in the middle of the array
            // Logic: Split into [Majority] and [Others], put Majority in middle
            const rowMajority = rowSeats.filter(s => s.partyId === largest.id)
            const rowOthers = rowSeats.filter(s => s.partyId !== largest.id)

            // Interleave others: Left, Right, Left...
            const left: Seat[] = []
            const right: Seat[] = []
            rowOthers.forEach((s, idx) => {
                if (idx % 2 === 0) left.push(s)
                else right.push(s)
            })

            // Combined Row: [...Left, ...Majority, ...Right]
            // This puts Majority in center
            const finalRowOrder = [...left.reverse(), ...rowMajority, ...right] // reverse left to fill outward

            // Plot
            const angleStart = 0
            const angleEnd = 180
            const angleStep = (angleEnd - angleStart) / (count - 1 || 1)

            finalRowOrder.forEach((seat, idx) => {
                const angle = angleStart + (idx * angleStep)
                const rad = (angle * Math.PI) / 180
                const x = Math.round((centerX + radius * Math.cos(rad)) * 100) / 100
                const y = Math.round((centerY - radius * Math.sin(rad)) * 100) / 100
                calculatedPositions.push({ seat, x, y, row })
            })
        }
        return calculatedPositions
    }, [seats])

    // Helper to get color based on mode
    const getSeatColor = (seat: Seat) => {
        if (viewMode === "party") {
            return PARLIAMENT_PARTIES.find(p => p.id === seat.partyId)?.color || "#ccc"
        }
        if (viewMode === "gender") {
            return seat.gender === "Female" ? "#ec4899" : "#3b82f6" // Pink/Blue standard mapping
        }
        if (viewMode === "attendance") {
            if (seat.attendanceState === "Present") return "#16a34a" // Green
            if (seat.attendanceState === "Excused") return "#eab308" // Yellow
            return "#dc2626" // Red
        }
        if (viewMode === "seniority") {
            // Heatmap: darker = more senior
            // Base hue: Violet (270). Lightness varies.
            const maxYears = 40
            const intensity = Math.min(seat.seniority / maxYears, 1)
            // Simple RGB interpolation or HSL. Let's return a hex roughly.
            // Dark Purple for senior, Light Lavender for junior
            // Junior: #e9d5ff (233, 213, 255) | Senior: #581c87 (88, 28, 135)
            // Simple logic: <5 yrs (junior), 5-15 (mid), >15 (senior)
            if (seat.seniority < 5) return "#d8b4fe"
            if (seat.seniority < 15) return "#a855f7"
            return "#581c87"
        }
        return "#ccc"
    }

    return (
        <svg
            viewBox="0 0 800 480"
            className="w-full h-auto drop-shadow-md"
            role="img"
            onMouseLeave={() => onHoverSeat(null)}
        >
            <defs>
                <radialGradient id="floor-grad" cx="50%" cy="80%">
                    <stop offset="0%" stopColor="var(--background)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="var(--muted)" stopOpacity="0.3" />
                </radialGradient>
            </defs>

            {/* Floor */}
            <ellipse cx="400" cy="380" rx="390" ry="280" fill="url(#floor-grad)" />

            {/* Grid Lines */}
            {Array.from({ length: 9 }).map((_, i) => {
                const radius = 160 + i * 28
                return (
                    <path
                        key={i}
                        d={`M ${400 + radius} 380 A ${radius} ${radius} 0 0 1 ${400 - radius} 380`}
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.05"
                        strokeWidth="1"
                    />
                )
            })}

            {/* Seats */}
            {seatPositions.map(({ seat, x, y }) => {
                const isHovered = hoveredSeat === seat.id
                const isFocused = focusedSeat === seat.id

                let opacity = 0.9

                // Logic for dimming based on Filter Hover
                if (hoveredFilter) {
                    if (viewMode === "party" && seat.partyId !== hoveredFilter) opacity = 0.2
                    else if (viewMode === "gender" && seat.gender !== hoveredFilter) opacity = 0.2
                    else if (viewMode === "attendance" && seat.attendanceState !== hoveredFilter) opacity = 0.2
                } else if (hoveredSeat && hoveredSeat !== seat.id) {
                    opacity = 0.4 // dim others when hovering a seat
                }
                if (isHovered) opacity = 1

                return (
                    <circle
                        key={seat.id}
                        cx={x}
                        cy={y}
                        r={isHovered ? 8 : 6}
                        fill={getSeatColor(seat)}
                        opacity={opacity}
                        stroke={isFocused ? "var(--foreground)" : isHovered ? "var(--background)" : "none"}
                        strokeWidth={isFocused ? 2 : isHovered ? 2 : 0}
                        className="transition-all duration-200 cursor-pointer"
                        onMouseEnter={() => onHoverSeat(seat.id)}
                        onClick={() => onClickSeat(seat.id)}
                    />
                )
            })}
        </svg>
    )
}
