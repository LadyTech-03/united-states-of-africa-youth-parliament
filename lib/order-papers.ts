/**
 * Parliamentary Business Statements Data
 */

export interface OrderPaperItem {
    id: string
    date: string
    title: string
    pdfUrl: string
}

export const ORDER_PAPERS: OrderPaperItem[] = [
    {
        id: "op-001",
        date: "2025-12-19",
        title: "Order Paper - Friday 19th December, 2025",
        pdfUrl: "/documents/statements/order-paper-dec-19.pdf",
    },
    {
        id: "op-002",
        date: "2025-12-18",
        title: "Order Paper - Thursday 18th December, 2025",
        pdfUrl: "/documents/statements/order-paper-dec-18.pdf",
    },
    {
        id: "op-003",
        date: "2025-12-10",
        title: "Order Paper - Friday 12th December, 2025",
        pdfUrl: "/documents/statements/order-paper-dec-12.pdf",
    },
    {
        id: "op-004",
        date: "2025-12-03",
        title: "Order Paper - Friday 03rd December, 2025",
        pdfUrl: "/documents/statements/order-paper-dec-03.pdf",
    },
    {
        id: "op-005",
        date: "2025-11-27",
        title: "Order Paper - Friday 27th November, 2025",
        pdfUrl: "/documents/statements/order-paper-nov-27.pdf",
    }
]
