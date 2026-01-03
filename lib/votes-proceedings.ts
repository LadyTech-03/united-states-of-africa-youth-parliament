/**
 * Parliamentary Business Statements Data
 */

export interface VotesProceedingsItem {
    id: string
    date: string
    title: string
    pdfUrl: string
}

export const VOTES_PROCEEDINGS: VotesProceedingsItem[] = [
    {
        id: "vp-001",
        date: "2025-12-19",
        title: "Votes and Proceedings - Friday 19th December, 2025",
        pdfUrl: "/documents/statements/votes-proceedings-dec-19.pdf",
    },
    {
        id: "vp-002",
        date: "2025-12-18",
        title: "Votes and Proceedings - Thursday 18th December, 2025",
        pdfUrl: "/documents/statements/votes-proceedings-dec-18.pdf",
    },
    {
        id: "vp-003",
        date: "2025-12-10",
        title: "Votes and Proceedings - Friday 12th December, 2025",
        pdfUrl: "/documents/statements/votes-proceedings-dec-12.pdf",
    },
    {
        id: "vp-004",
        date: "2025-12-03",
        title: "Votes and Proceedings - Friday 03rd December, 2025",
        pdfUrl: "/documents/statements/votes-proceedings-dec-03.pdf",
    },
    {
        id: "vp-005",
        date: "2025-11-27",
        title: "Votes and Proceedings - Friday 27th November, 2025",
        pdfUrl: "/documents/statements/votes-proceedings-nov-27.pdf",
    }
]
