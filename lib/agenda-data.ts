/**
 * Parliamentary Agenda Data
 */

export type AgendaType = "Plenary Session" | "Bill Discussion" | "Committee Meeting" | "Motion Vote" | "Special Event"
export type AgendaStatus = "Upcoming" | "In Progress" | "Completed" | "Postponed"

export interface AgendaItem {
    id: string
    date: string
    title: string
    type: AgendaType
    status: AgendaStatus
    pdfUrl: string
    committee?: string
}

export const AGENDA_ITEMS: AgendaItem[] = [
    {
        id: "agenda-001",
        date: "2026-01-08",
        title: "Opening of the First Ordinary Session 2026",
        type: "Plenary Session",
        status: "Upcoming",
        pdfUrl: "/documents/agenda/Relations_Functions_and_Mappings.pdf"
    },
    {
        id: "agenda-002",
        date: "2026-01-10",
        title: "Youth Employment Framework Bill - First Reading",
        type: "Bill Discussion",
        status: "Upcoming",
        pdfUrl: "/documents/agenda/2026-01-10-employment-bill.pdf",
        committee: "Economic Development"
    },
    {
        id: "agenda-003",
        date: "2026-01-12",
        title: "Digital Sovereignty Act - Committee Review",
        type: "Committee Meeting",
        status: "Upcoming",
        pdfUrl: "/documents/agenda/2026-01-12-digital-sovereignty.pdf",
        committee: "Digital Sovereignty"
    },
    {
        id: "agenda-004",
        date: "2026-01-15",
        title: "Motion on Continental Free Trade Implementation",
        type: "Motion Vote",
        status: "Upcoming",
        pdfUrl: "/documents/agenda/2026-01-15-trade-motion.pdf"
    },
    {
        id: "agenda-005",
        date: "2026-01-17",
        title: "Education Reform Bill - Second Reading",
        type: "Bill Discussion",
        status: "Upcoming",
        pdfUrl: "/documents/agenda/2026-01-17-education-reform.pdf",
        committee: "Education & Innovation"
    },
    {
        id: "agenda-006",
        date: "2026-01-20",
        title: "State of Youth Address",
        type: "Special Event",
        status: "Upcoming",
        pdfUrl: "/documents/agenda/2026-01-20-youth-address.pdf"
    },
    {
        id: "agenda-007",
        date: "2026-01-22",
        title: "Climate Action Framework - Committee Hearing",
        type: "Committee Meeting",
        status: "Upcoming",
        pdfUrl: "/documents/agenda/2026-01-22-climate-hearing.pdf",
        committee: "Climate & Agriculture"
    },
    {
        id: "agenda-008",
        date: "2026-01-24",
        title: "Pan-African Integration Bill - Third Reading",
        type: "Bill Discussion",
        status: "Upcoming",
        pdfUrl: "/documents/agenda/2026-01-24-integration-bill.pdf",
        committee: "Pan-African Integration"
    },
    {
        id: "agenda-009",
        date: "2025-12-20",
        title: "Budget Appropriation Vote",
        type: "Motion Vote",
        status: "Completed",
        pdfUrl: "/documents/agenda/2025-12-20-budget-vote.pdf"
    },
    {
        id: "agenda-010",
        date: "2025-12-15",
        title: "Anti-Corruption Bill - Final Vote",
        type: "Bill Discussion",
        status: "Completed",
        pdfUrl: "/documents/agenda/2025-12-15-corruption-bill.pdf",
        committee: "Governance & Ethics"
    }
]
