"use client"

import { useState } from "react"
import { Search, Filter, FileText, Download } from "lucide-react"
import { FaRegFilePdf } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

export interface TableItem {
    id: string
    date: string
    title: string
    status?: string
    type?: string
    pdfUrl: string
    showDate?: boolean
    laidBy?: string
    laidOn?: string
    gazettedOn?: string
    dateOfAssent?: string
}

interface ParliamentDocsTableProps {
    data: TableItem[]
    showStatus?: boolean
    showTypeFilter?: boolean
    emptyMessage?: string
    types?: string[]
    showDate?: boolean
    showLaidBy?: boolean
    showLaidOn?: boolean
    showGazettedOn?: boolean
    showDateOfAssent?: boolean
}

const typeColors: Record<string, string> = {
    "Plenary Session": "bg-primary/10 text-primary border-primary/20",
    "Bill Discussion": "bg-blue-500/10 text-blue-700 border-blue-500/20",
    "Committee Meeting": "bg-purple-500/10 text-purple-700 border-purple-500/20",
    "Motion Vote": "bg-amber-500/10 text-amber-700 border-amber-500/20",
    "Special Event": "bg-green-500/10 text-green-700 border-green-500/20"
}

const statusColors: Record<string, string> = {
    "Upcoming": "bg-blue-500/10 text-blue-700",
    "In Progress": "bg-amber-500/10 text-amber-700",
    "Completed": "bg-green-500/10 text-green-700",
    "Postponed": "bg-gray-500/10 text-gray-700"
}

export function ParliamentDocsTable({
    data,
    showStatus = true,
    showTypeFilter = true,
    emptyMessage = "No items found.",
    types = ["Plenary Session", "Bill Discussion", "Committee Meeting", "Motion Vote", "Special Event"],
    showDate = true,
    showLaidBy = false,
    showLaidOn = false,
    showGazettedOn = false,
    showDateOfAssent = false,
}: ParliamentDocsTableProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedType, setSelectedType] = useState<string>("all")

    const filteredData = data.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesType = !showTypeFilter || selectedType === "all" || item.type === selectedType
        return matchesSearch && matchesType
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    const handleRowClick = (pdfUrl: string) => {
        window.open(pdfUrl, '_blank')
    }

    const formatDate = (dateString: string | undefined) => {
        if (!dateString) return "-"
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    }

    return (
        <div className="space-y-6">
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                        placeholder="Search items..."
                        className="pl-10 h-10 bg-background"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                {showTypeFilter && (
                    <div className="w-full md:w-[220px]">
                        <Select value={selectedType} onValueChange={setSelectedType}>
                            <SelectTrigger className="h-10 bg-background">
                                <div className="flex items-center gap-2">
                                    <Filter className="h-4 w-4 text-muted-foreground" />
                                    <SelectValue placeholder="Filter by Type" />
                                </div>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Types</SelectItem>
                                {types.map((type) => (
                                    <SelectItem key={type} value={type}>{type}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                )}
            </div>

            {/* Table */}
            {filteredData.length === 0 ? (
                <div className="text-center py-12 border rounded-lg bg-muted/10">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">{emptyMessage}</p>
                </div>
            ) : (
                <div className="border rounded-lg overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {showDate && <TableHead className="w-48">Date</TableHead>}
                                <TableHead className="w-48">Title</TableHead>
                                {showStatus && <TableHead className="w-32 hidden lg:table-cell">Status</TableHead>}
                                {showLaidBy && <TableHead className="w-48 hidden lg:table-cell">Laid By</TableHead>}
                                {showLaidOn && <TableHead className="w-48 hidden lg:table-cell">Laid On</TableHead>}
                                {showGazettedOn && <TableHead className="w-48 hidden lg:table-cell">Gazetted On</TableHead>}
                                {showDateOfAssent && <TableHead className="w-48 hidden lg:table-cell">Date of Assent</TableHead>}
                                <TableHead className="w-20 text-center">PDF</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredData.map((item) => (
                                <TableRow
                                    key={item.id}
                                    onClick={() => handleRowClick(item.pdfUrl)}
                                    className="cursor-pointer group"
                                >
                                    {showDate && <TableCell className="font-mono text-sm text-muted-foreground whitespace-nowrap">
                                        {formatDate(item.date)}
                                    </TableCell>}
                                    <TableCell>
                                        <div className="font-medium text-base font-serif group-hover:text-primary transition-colors">
                                            <FaRegFilePdf className="inline mr-2 size-4" />
                                            {item.title}
                                        </div>
                                    </TableCell>
                                    {showStatus && (
                                        <TableCell className="hidden lg:table-cell">
                                            <Badge
                                                variant="secondary"
                                                className={cn("font-normal text-sm", item.status ? statusColors[item.status] : "")}
                                            >
                                                {item.status}
                                            </Badge>
                                        </TableCell>
                                    )}
                                    {showLaidBy && <TableCell className="hidden lg:table-cell">{item.laidBy}</TableCell>}
                                    {showLaidOn && <TableCell className="hidden lg:table-cell font-mono text-sm text-muted-foreground whitespace-nowrap">{formatDate(item.laidOn)}</TableCell>}
                                    {showGazettedOn && <TableCell className="hidden lg:table-cell font-mono text-sm text-muted-foreground whitespace-nowrap">{formatDate(item.gazettedOn)}</TableCell>}
                                    {showDateOfAssent && <TableCell className="hidden lg:table-cell font-mono text-sm text-muted-foreground whitespace-nowrap">{formatDate(item.dateOfAssent)}</TableCell>}
                                    <TableCell className="text-center">
                                        <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors mx-auto" />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    )
}
