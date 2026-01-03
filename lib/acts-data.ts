/**
 * Parliamentary Business Statements Data
 */

export interface ActItem {
    id: string
    date: string
    title: string
    pdfUrl: string
    laidBy?: string
    laidOn?: string
    gazettedOn?: string
    dateOfAssent?: string
}

export const ACTS: ActItem[] = [
    {
        id: "act-001",
        date: "2025-12-19",
        title: "Act - Friday 19th December, 2025",
        pdfUrl: "/documents/statements/act-dec-19.pdf",
        laidBy: "Speaker of the House of Representatives",
        laidOn: "2025-12-19",
        gazettedOn: "2025-12-19",
        dateOfAssent: "2025-12-19",
    },
    {
        id: "act-002",
        date: "2025-12-18",
        title: "Act - Thursday 18th December, 2025",
        pdfUrl: "/documents/statements/act-dec-18.pdf",
        laidBy: "Minister of Finance",
        laidOn: "2025-12-18",
        gazettedOn: "2025-12-18",
        dateOfAssent: "2025-12-18",
    },
    {
        id: "act-003",
        date: "2025-12-10",
        title: "Act - Friday 12th December, 2025",
        pdfUrl: "/documents/statements/act-dec-12.pdf",
        laidBy: "MINISTRY OF JUSTICE & ATTORNEY GENERAL",
        laidOn: "2025-12-10",
        gazettedOn: "2025-12-10",
        dateOfAssent: "2025-12-10",
    },
    {
        id: "act-004",
        date: "2025-12-03",
        title: "Act - Friday 03rd December, 2025",
        pdfUrl: "/documents/statements/act-dec-03.pdf",
        laidBy: "Minister for Trade and Industry",
        laidOn: "2025-12-03",
        gazettedOn: "2025-12-03",
        dateOfAssent: "2025-12-03",
    },
    {
        id: "act-005",
        date: "2025-11-27",
        title: "Act - Friday 27th November, 2025",
        pdfUrl: "/documents/statements/act-nov-27.pdf",
        laidBy: "Minister of Finance",
        laidOn: "2025-11-27",
        gazettedOn: "2025-11-27",
        dateOfAssent: "2025-11-27",
    }
]
