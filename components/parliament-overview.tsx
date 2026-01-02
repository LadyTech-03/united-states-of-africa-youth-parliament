"use client"

import { useMemo, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  PARLIAMENT_PARTIES,
  PARLIAMENT_SEATS,
  getMajorityThreshold,
  getPartySeatCount,
  getMajorityParty,
  sortPartiesBySeats,
  type Party,
  type Seat,
} from "@/lib/parliament-data"
import { TriangleAlert } from "lucide-react"
import SectionWrapper from "./section-wrapper"

interface SeatPosition {
  seat: Seat
  party: Party
  x: number
  y: number
  row: number
  angle: number
}

/**
 * ParliamentPowerBalancePreview Component
 * 
 * Renders a semi-circular parliamentary chamber visualization with intelligent
 * seat grouping, interactive features, and accessibility compliance.
 * 
 * Key Features:
 * - SVG-based semi-circular chamber (180-degree arc)
 * - Intelligent party clustering (majority center, opposition flanking)
 * - Interactive hover states with tooltips
 * - Keyboard navigation support
 * - ARIA labels for accessibility
 * - Political balance indicators
 * - Enhanced party legend with percentages
 */
export function ParliamentOverview() {
  const [hoveredSeat, setHoveredSeat] = useState<string | null>(null)
  const [hoveredParty, setHoveredParty] = useState<string | null>(null)
  const [focusedSeat, setFocusedSeat] = useState<string | null>(null)

  const totalSeats = PARLIAMENT_SEATS.length
  const majorityThreshold = getMajorityThreshold(totalSeats)
  const majorityParty = getMajorityParty(PARLIAMENT_PARTIES, PARLIAMENT_SEATS)
  const sortedParties = sortPartiesBySeats(PARLIAMENT_PARTIES, PARLIAMENT_SEATS)

  /**
   * Intelligent Seat Grouping Algorithm
   * 
   * This algorithm positions seats in a semi-circular chamber with party clustering:
   * 1. Sorts parties by seat count (largest first)
   * 2. Places largest party (majority) in the center
   * 3. Alternates opposition parties on left and right flanks
   * 4. Places independents at the edges or back rows
   * 5. Fills rows from front to back, maintaining party blocks
   */
  const seatPositions = useMemo<SeatPosition[]>(() => {
    const positions: SeatPosition[] = []
    
    // Chamber configuration - optimized to fit all seats in frame
    const numRows = 9
    const baseRadius = 160
    const radiusIncrement = 28
    const centerX = 400
    const centerY = 380
    
    // Calculate seats per row (increasing with distance)
    const seatsPerRow = [18, 22, 26, 30, 34, 38, 42, 46, 50]
    
    // Group seats by party
    const seatsByParty = new Map<string, Seat[]>()
    sortedParties.forEach(party => {
      seatsByParty.set(party.id, PARLIAMENT_SEATS.filter(s => s.partyId === party.id))
    })
    
    // Flatten seats in intelligent order:
    // 1. Majority party (center)
    // 2. Alternate opposition parties (flanking)
    // 3. Independents (edges)
    const orderedSeats: Seat[] = []
    const largestParty = sortedParties[0]
    const oppositionParties = sortedParties.slice(1, -1) // Exclude independents
    const independents = sortedParties[sortedParties.length - 1]
    
    // Add majority party seats
    orderedSeats.push(...(seatsByParty.get(largestParty.id) || []))
    
    // Add opposition parties (will be split left/right)
    oppositionParties.forEach(party => {
      orderedSeats.push(...(seatsByParty.get(party.id) || []))
    })
    
    // Add independents at the end (will go to edges/back)
    orderedSeats.push(...(seatsByParty.get(independents.id) || []))
    
    let seatIndex = 0
    
    // Fill rows from front to back
    for (let row = 0; row < numRows; row++) {
      const radius = baseRadius + (row * radiusIncrement)
      const seatsInRow = seatsPerRow[row]
      const angleStart = 0 // 0 degrees (rightmost)
      const angleEnd = 180 // 180 degrees (leftmost)
      const angleStep = (angleEnd - angleStart) / (seatsInRow - 1)
      
      for (let seatInRow = 0; seatInRow < seatsInRow; seatInRow++) {
        if (seatIndex >= orderedSeats.length) break
        
        const seat = orderedSeats[seatIndex]
        const party = PARLIAMENT_PARTIES.find(p => p.id === seat.partyId)!
        
        // Calculate position
        // For center placement of majority: seats near middle of arc get majority party
        // We're filling sequentially but the arc naturally creates clustering
        const angle = angleStart + (seatInRow * angleStep)
        const angleRad = (angle * Math.PI) / 180
        
        // Round to 2 decimal places to prevent hydration mismatch
        const x = Math.round((centerX + radius * Math.cos(angleRad)) * 100) / 100
        const y = Math.round((centerY - radius * Math.sin(angleRad)) * 100) / 100
        
        positions.push({ seat, party, x, y, row, angle })
        seatIndex++
      }
      
      if (seatIndex >= orderedSeats.length) break
    }
    
    // Re-arrange for better clustering: group by party and distribute symmetrically
    // This creates the "center majority, flanking opposition" effect
    const finalPositions: SeatPosition[] = []
    const centerPositions = positions.filter((_, i) => {
      const rowSeats = seatsPerRow[positions[i].row]
      const middle = Math.floor(rowSeats / 2)
      const seatInRow = positions.slice(0, i + 1).filter(p => p.row === positions[i].row).length - 1
      return Math.abs(seatInRow - middle) <= middle * 0.4 // Center 40% of each row
    })
    
    const flankPositions = positions.filter((_, i) => !centerPositions.includes(positions[i]))
    
    // Assign majority to center
    const majoritySeats = seatsByParty.get(largestParty.id) || []
    majoritySeats.forEach((seat, i) => {
      if (i < centerPositions.length) {
        const pos = centerPositions[i]
        finalPositions.push({ ...pos, seat, party: largestParty })
      }
    })
    
    // Assign opposition to flanks
    let flankIndex = 0
    oppositionParties.forEach(party => {
      const partySeats = seatsByParty.get(party.id) || []
      partySeats.forEach(seat => {
        if (flankIndex < flankPositions.length) {
          const pos = flankPositions[flankIndex]
          finalPositions.push({ ...pos, seat, party })
          flankIndex++
        } else if (centerPositions.length > majoritySeats.length) {
          // Overflow to remaining center positions
          const pos = centerPositions[majoritySeats.length + (flankIndex - flankPositions.length)]
          if (pos) finalPositions.push({ ...pos, seat, party })
          flankIndex++
        }
      })
    })
    
    // Assign independents to remaining positions
    const independentSeats = seatsByParty.get(independents.id) || []
    independentSeats.forEach(seat => {
      if (flankIndex < flankPositions.length) {
        const pos = flankPositions[flankIndex]
        finalPositions.push({ ...pos, seat, party: independents })
        flankIndex++
      }
    })
    
    return finalPositions.length === totalSeats ? finalPositions : positions
  }, [sortedParties, totalSeats])

  const handleSeatKeyPress = (e: React.KeyboardEvent, seatId: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      setFocusedSeat(focusedSeat === seatId ? null : seatId)
    }
  }

  return (
      <SectionWrapper>
        <Card className="border-2">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-fit">
              <div className="h-1 w-16 bg-primary mb-4 mx-auto" />
              <CardTitle className="text-3xl font-bold font-serif uppercase tracking-tight">
                Parliament System Overview
              </CardTitle>
            </div>
            <CardDescription className="text-base max-w-2xl mx-auto"></CardDescription>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* SVG Chamber Visualization */}
              <div className="lg:col-span-2">
                <div className="relative bg-muted/20 rounded-lg p-8 border">

                  {/* SVG Chamber */}
                  <svg
                    viewBox="0 0 800 480"
                    className="w-full h-auto"
                    role="img"
                    aria-label="Semi-circular parliamentary chamber showing seat distribution by political party"
                  >
                    <defs>
                      {/* Subtle gradient for chamber floor */}
                      <radialGradient id="chamber-floor" cx="50%" cy="80%">
                        <stop offset="0%" stopColor="#f1f5f9" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.1" />
                      </radialGradient>
                    </defs>

                    {/* Chamber floor */}
                    <ellipse cx="400" cy="380" rx="390" ry="280" fill="url(#chamber-floor)" />

                    {/* Faint chamber grid (visible on hover) */}
                    <g opacity={hoveredSeat || hoveredParty ? "0.1" : "0"} className="transition-opacity duration-200">
                      {Array.from({ length: 9 }).map((_, i) => {
                        const radius = 160 + i * 28
                        return (
                          <path
                            key={i}
                            d={`M ${400 + radius} 380 A ${radius} ${radius} 0 0 1 ${400 - radius} 380`}
                            fill="none"
                            stroke="#64748b"
                            strokeWidth="0.5"
                          />
                        )
                      })}
                    </g>

                    {/* Seats */}
                    <g role="list" aria-label="Parliamentary seats">
                      {seatPositions.map(({ seat, party, x, y }) => {
                        const isHovered = hoveredSeat === seat.id
                        const isFocused = focusedSeat === seat.id
                        const isPartyHighlighted = hoveredParty === party.id
                        const isOtherPartyHovered = hoveredParty && hoveredParty !== party.id
                        
                        return (
                          <g key={seat.id} role="listitem">
                            <circle
                              cx={x}
                              cy={y}
                              r={isHovered || isFocused ? 12 : 12}
                              fill={party.color}
                              opacity={isOtherPartyHovered ? 0.25 : isPartyHighlighted ? 1 : 0.9}
                              stroke={isFocused ? "#000" : isHovered ? "#fff" : "none"}
                              strokeWidth={isFocused ? 2 : isHovered ? 1.5 : 0}
                              className="transition-all duration-150 cursor-pointer"
                              onMouseEnter={() => setHoveredSeat(seat.id)}
                              onMouseLeave={() => setHoveredSeat(null)}
                              onFocus={() => setFocusedSeat(seat.id)}
                              onBlur={() => setFocusedSeat(null)}
                              onKeyDown={(e) => handleSeatKeyPress(e, seat.id)}
                              tabIndex={0}
                              role="button"
                              aria-label={`${seat.mpName}, ${party.name}, ${seat.constituency || "No constituency"}`}
                            />
                          </g>
                        )
                      })}
                    </g>
                  </svg>

                  {/* Tooltip */}
                  {(hoveredSeat || focusedSeat) && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background border-2 border-primary rounded-lg shadow-xl p-4 min-w-[280px] z-20">
                      {(() => {
                        const activeSeatId = hoveredSeat || focusedSeat
                        const position = seatPositions.find(p => p.seat.id === activeSeatId)
                        if (!position) return null
                        
                        return (
                          <>
                            <div className="flex items-center gap-3 mb-2">
                              <div
                                className="w-4 h-4 rounded-full shrink-0"
                                style={{ backgroundColor: position.party.color }}
                              />
                              <div className="font-bold text-sm">{position.seat.mpName}</div>
                            </div>
                            <div className="space-y-1 text-xs text-muted-foreground">
                              <div>
                                <span className="font-medium">Party:</span> {position.party.name}
                              </div>
                              <div>
                                <span className="font-medium">Constituency:</span>{" "}
                                {position.seat.constituency || "N/A"}
                              </div>
                            </div>
                          </>
                        )
                      })()}
                    </div>
                  )}
                </div>

                {/* Instructions */}
                <div className="mt-4 text-xs text-muted-foreground flex items-center gap-2 justify-center">
                  <TriangleAlert className="size-3"/>
                  Please note that the virtual seats shown do not reflect the actual seats in the parliament.
                </div>
              </div>

              {/* Enhanced Party Legend */}
              <div className="space-y-3">
                <h3 className="font-bold text-lg mb-4 font-serif">Party Composition</h3>
                <div className="space-y-2" role="list" aria-label="Political parties and seat distribution">
                  {sortedParties.map((party) => {
                    const seatCount = getPartySeatCount(party.id, PARLIAMENT_SEATS)
                    const percentage = ((seatCount / totalSeats) * 100).toFixed(1)
                    const isHovered = hoveredParty === party.id
                    
                    return (
                      <div
                        key={party.id}
                        className={`p-2 rounded-lg border transition-all duration-200 cursor-pointer ${
                          isHovered ? "border-primary bg-primary/5 shadow-md" : "border-border hover:border-primary/40"
                        }`}
                        onMouseEnter={() => setHoveredParty(party.id)}
                        onMouseLeave={() => setHoveredParty(null)}
                        role="listitem"
                        aria-label={`${party.name}: ${seatCount} seats, ${percentage}% of parliament`}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-4 h-4 rounded shrink-0 border border-white shadow-sm"
                            style={{ backgroundColor: party.color }}
                            aria-hidden="true"
                          />
                          <div className="flex-1 min-w-0 flex items-baseline justify-between gap-3">
                            <div className="font-semibold text-xs truncate">{party.name}</div>
                            <div className="flex items-baseline gap-1.5 shrink-0">
                              <span className="text-lg font-bold text-primary font-mono">{seatCount}</span>
                              <span className="text-xs text-muted-foreground">({percentage}%)</span>
                            </div>
                          </div>
                        </div>
                        {party.isGovernment && (
                          <div className="mt-1 ml-6">
                            <span className="inline-block px-1.5 py-0.5 text-[10px] font-semibold bg-primary/10 text-primary rounded">
                              Government
                            </span>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* Summary Stats */}
                <div className="mt-6 p-4 bg-muted/50 rounded-lg border space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Seats:</span>
                    <span className="font-bold">
                      {totalSeats}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Government Seats:</span>
                    <span className="font-bold">
                      {getPartySeatCount(sortedParties[0].id, PARLIAMENT_SEATS)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Opposition Seats:</span>
                    <span className="font-bold">
                      {totalSeats - getPartySeatCount(sortedParties[0].id, PARLIAMENT_SEATS)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t">
                    <span className="text-muted-foreground">Total Parties:</span>
                    <span className="font-bold">{PARLIAMENT_PARTIES.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </SectionWrapper>
  )
}
