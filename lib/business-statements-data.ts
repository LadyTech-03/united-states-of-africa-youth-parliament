/**
 * Parliamentary Business Statements Data
 */

export interface BusinessStatementItem {
    id: string
    date: string
    title: string
    pdfUrl: string
    type?: string
}

export const BUSINESS_STATEMENTS: BusinessStatementItem[] = [
    {
        id: "stmt-001",
        date: "2026-01-05",
        title: "Business Statement for the Week Commencing 8th January 2026",
        pdfUrl: "/documents/statements/business-statement-jan-08.pdf",
        type: "Business Statement"
    },
    {
        id: "stmt-002",
        date: "2025-12-18",
        title: "Business Statement for the Closing Week of 2025 Session",
        pdfUrl: "/documents/statements/business-statement-dec-18.pdf",
        type: "Business Statement"
    },
    {
        id: "stmt-003",
        date: "2025-12-10",
        title: "Business Statement for the Week Commencing 12th December 2025",
        pdfUrl: "/documents/statements/business-statement-dec-12.pdf",
        type: "Other Statements"
    },
    {
        id: "stmt-004",
        date: "2025-12-03",
        title: "Revised Business Statement: Post-Budget Debates",
        pdfUrl: "/documents/statements/business-statement-dec-03.pdf",
        type: "Finance Issues"
    },
    {
        id: "stmt-005",
        date: "2025-11-25",
        title: "Business Statement for the Week Commencing 27th November 2025",
        pdfUrl: "/documents/statements/business-statement-nov-27.pdf",
        type: "Business Statement"
    }
]
