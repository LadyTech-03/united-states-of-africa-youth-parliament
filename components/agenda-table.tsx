"use client"

import { useState } from "react"
import { Search, Filter, FileText, Download } from "lucide-react"
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
import { AGENDA_ITEMS, AgendaType } from "@/lib/agenda-data"
import { cn } from "@/lib/utils"

const agendaTypes: AgendaType[] = ["Plenary Session", "Bill Discussion", "Committee Meeting", "Motion Vote", "Special Event"]

const typeColors = {
    "Plenary Session": "bg-primary/10 text-primary border-primary/20",
    "Bill Discussion": "bg-blue-500/10 text-blue-700 border-blue-500/20",
    "Committee Meeting": "bg-purple-500/10 text-purple-700 border-purple-500/20",
    "Motion Vote": "bg-amber-500/10 text-amber-700 border-amber-500/20",
    "Special Event": "bg-green-500/10 text-green-700 border-green-500/20"
}

const statusColors = {
    "Upcoming": "bg-blue-500/10 text-blue-700",
    "In Progress": "bg-amber-500/10 text-amber-700",
    "Completed": "bg-green-500/10 text-green-700",
    "Postponed": "bg-gray-500/10 text-gray-700"
}

export function AgendaTable() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedType, setSelectedType] = useState<string>("all")

    const filteredAgenda = AGENDA_ITEMS.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesType = selectedType === "all" || item.type === selectedType
        return matchesSearch && matchesType
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    const handleRowClick = (pdfUrl: string) => {
        window.open(pdfUrl, '_blank')
    }

    const formatDate = (dateString: string) => {
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
                        placeholder="Search agenda items..."
                        className="pl-10 h-10 bg-background"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
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
                            {agendaTypes.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Table */}
            {filteredAgenda.length === 0 ? (
                <div className="text-center py-12 border rounded-lg bg-muted/10">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No agenda items found.</p>
                </div>
            ) : (
                <div className="border rounded-lg overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-32">Date</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead className="w-32 hidden lg:table-cell">Status</TableHead>
                                <TableHead className="w-20 text-center">PDF</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredAgenda.map((item) => (
                                <TableRow
                                    key={item.id}
                                    onClick={() => handleRowClick(item.pdfUrl)}
                                    className="cursor-pointer group"
                                >
                                    <TableCell className="font-mono text-xs text-muted-foreground">
                                        {formatDate(item.date)}
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium font-serif group-hover:text-primary transition-colors">
                                            {item.title}
                                        </div>
                                        {item.committee && (
                                            <div className="text-xs text-muted-foreground mt-1">
                                                {item.committee}
                                            </div>
                                        )}
                                    </TableCell>
                                    <TableCell className="hidden lg:table-cell">
                                        <Badge
                                            variant="secondary"
                                            className={cn("font-normal text-xs", statusColors[item.status])}
                                        >
                                            {item.status}
                                        </Badge>
                                    </TableCell>
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
