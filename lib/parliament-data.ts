/**
 * Parliamentary Data Model
 * 
 * This file contains the data structure for parliamentary representation,
 * including political parties and seat assignments for MPs.
 */

export interface Party {
    id: string
    name: string
    color: string
    isGovernment?: boolean
}

export interface Seat {
    id: string
    mpName: string
    partyId: string
    constituency?: string
}

export interface ParliamentData {
    parties: Party[]
    seats: Seat[]
}

/**
 * Political parties in the current parliament
 * Using neutral, institutional colors appropriate for government websites
 */
export const PARLIAMENT_PARTIES: Party[] = [
    {
        id: "progressive-alliance",
        name: "Progressive Alliance",
        color: "#2563eb", // Blue - institutional
        isGovernment: true,
    },
    {
        id: "national-coalition",
        name: "National Coalition",
        color: "#dc2626", // Red - traditional opposition
        isGovernment: false,
    },
    {
        id: "peoples-movement",
        name: "People's Movement",
        color: "#16a34a", // Green
        isGovernment: false,
    },
    {
        id: "reform-party",
        name: "Reform Party",
        color: "#ea580c", // Orange
        isGovernment: false,
    },
    {
        id: "democratic-union",
        name: "Democratic Union",
        color: "#7c3aed", // Purple
        isGovernment: false,
    },
    {
        id: "independent",
        name: "Independent",
        color: "#64748b", // Gray
        isGovernment: false,
    },
]

/**
 * Generate realistic parliamentary seat data
 * Distribution: Progressive Alliance (130), National Coalition (65), 
 * People's Movement (30), Reform Party (15), Democratic Union (7), Independent (3)
 */
export const PARLIAMENT_SEATS: Seat[] = generateSeats()

function generateSeats(): Seat[] {
    const seats: Seat[] = []
    let seatId = 1

    // Progressive Alliance - 130 seats (Majority party)
    const paConstituencies = [
        "Central District", "Harbor Bay", "Eastside", "Western Hills", "Northgate",
        "Riverside", "Lakeside", "Mountain View", "Greenfield", "Sunset Valley",
        "Oak Grove", "Pine Ridge", "Cedar Park", "Maple Heights", "Birch Falls",
        "Willow Creek", "Elm Street", "Aspen Meadows", "Redwood City", "Cypress Bay",
    ]
    for (let i = 0; i < 130; i++) {
        seats.push({
            id: `seat-${seatId++}`,
            mpName: generateMPName(i),
            partyId: "progressive-alliance",
            constituency: paConstituencies[i % paConstituencies.length] + (i >= paConstituencies.length ? ` ${Math.floor(i / paConstituencies.length) + 1}` : ""),
        })
    }

    // National Coalition - 65 seats (Main opposition)
    const ncConstituencies = [
        "Northern Region", "Southern Plains", "Eastern Shore", "Highland District", "Valley View",
        "Coastal Region", "Hilltop", "Brookside", "Meadowland", "Forestville",
    ]
    for (let i = 0; i < 65; i++) {
        seats.push({
            id: `seat-${seatId++}`,
            mpName: generateMPName(i + 130),
            partyId: "national-coalition",
            constituency: ncConstituencies[i % ncConstituencies.length] + (i >= ncConstituencies.length ? ` ${Math.floor(i / ncConstituencies.length) + 1}` : ""),
        })
    }

    // People's Movement - 30 seats
    const pmConstituencies = [
        "Urban Center", "Suburbia", "Metro West", "City East", "Downtown",
    ]
    for (let i = 0; i < 30; i++) {
        seats.push({
            id: `seat-${seatId++}`,
            mpName: generateMPName(i + 195),
            partyId: "peoples-movement",
            constituency: pmConstituencies[i % pmConstituencies.length] + (i >= pmConstituencies.length ? ` ${Math.floor(i / pmConstituencies.length) + 1}` : ""),
        })
    }

    // Reform Party - 15 seats
    const rpConstituencies = ["New Town", "Old Quarter", "Market District", "Port Area", "Industrial Zone"]
    for (let i = 0; i < 15; i++) {
        seats.push({
            id: `seat-${seatId++}`,
            mpName: generateMPName(i + 225),
            partyId: "reform-party",
            constituency: rpConstituencies[i % rpConstituencies.length] + (i >= rpConstituencies.length ? ` ${Math.floor(i / rpConstituencies.length) + 1}` : ""),
        })
    }

    // Democratic Union - 7 seats
    const duConstituencies = ["University District", "Tech Hub", "Arts Quarter"]
    for (let i = 0; i < 7; i++) {
        seats.push({
            id: `seat-${seatId++}`,
            mpName: generateMPName(i + 240),
            partyId: "democratic-union",
            constituency: duConstituencies[i % duConstituencies.length] + (i >= duConstituencies.length ? ` ${Math.floor(i / duConstituencies.length) + 1}` : ""),
        })
    }

    // Independent - 3 seats
    const indConstituencies = ["Rural District", "Remote Region", "Island Territory"]
    for (let i = 0; i < 3; i++) {
        seats.push({
            id: `seat-${seatId++}`,
            mpName: generateMPName(i + 247),
            partyId: "independent",
            constituency: indConstituencies[i],
        })
    }

    return seats
}

/**
 * Generate diverse MP names
 */
function generateMPName(index: number): string {
    const firstNames = [
        "Sarah", "James", "Amara", "David", "Maria", "John", "Fatima", "Michael",
        "Aisha", "Robert", "Priya", "Daniel", "Mei", "Thomas", "Zainab", "William",
        "Yuki", "Richard", "Adanna", "Charles", "Leila", "Joseph", "Noor", "Christopher",
        "Chioma", "Matthew", "Aaliyah", "Andrew", "Sakura", "Mark", "Chiamaka", "Paul",
    ]
    const lastNames = [
        "Mitchell", "Chen", "Okonkwo", "Kimani", "Garcia", "Smith", "Hassan", "Johnson",
        "Ali", "Williams", "Sharma", "Brown", "Wong", "Jones", "Ahmed", "Miller",
        "Tanaka", "Davis", "Adeyemi", "Wilson", "Mansour", "Moore", "Khan", "Taylor",
        "Nwankwo", "Anderson", "Abdullah", "Thomas", "Yamamoto", "Jackson", "Eze", "White",
    ]

    return `Hon. ${firstNames[index % firstNames.length]} ${lastNames[index % lastNames.length]}`
}

/**
 * Calculate majority threshold (half + 1)
 */
export function getMajorityThreshold(totalSeats: number): number {
    return Math.floor(totalSeats / 2) + 1
}

/**
 * Get seat count by party
 */
export function getPartySeatCount(partyId: string, seats: Seat[]): number {
    return seats.filter(seat => seat.partyId === partyId).length
}

/**
 * Get majority party (if any)
 */
export function getMajorityParty(parties: Party[], seats: Seat[]): Party | null {
    const threshold = getMajorityThreshold(seats.length)

    for (const party of parties) {
        const seatCount = getPartySeatCount(party.id, seats)
        if (seatCount >= threshold) {
            return party
        }
    }

    return null
}

/**
 * Sort parties by seat count (descending)
 */
export function sortPartiesBySeats(parties: Party[], seats: Seat[]): Party[] {
    return [...parties].sort((a, b) => {
        const aCount = getPartySeatCount(a.id, seats)
        const bCount = getPartySeatCount(b.id, seats)
        return bCount - aCount
    })
}
