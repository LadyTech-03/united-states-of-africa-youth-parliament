"use client"

import { useState } from "react"
import { PARLIAMENT_SEATS, PARLIAMENT_PARTIES } from "@/lib/parliament-data"
import { Search, ChevronRight, ChevronsLeft, ChevronsRight, LayoutGrid, List } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function MpsDirectory() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedParty, setSelectedParty] = useState("all")
    const [viewMode, setViewMode] = useState<"list" | "grid">("grid")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = viewMode === "list" ? 20 : 24 // 24 divides by 2, 3, 4 nicely for grid

    // Filter Logic
    const filteredMps = PARLIAMENT_SEATS.filter(mp => {
        const matchesSearch =
            mp.mpName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            mp.constituency?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            mp.region?.toLowerCase().includes(searchQuery.toLowerCase())

        const matchesParty = selectedParty === "all" || mp.partyId === selectedParty

        return matchesSearch && matchesParty
    })

    // Pagination Logic
    const totalPages = Math.ceil(filteredMps.length / itemsPerPage)
    const paginatedMps = filteredMps.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const getPartyDetails = (id: string) => PARLIAMENT_PARTIES.find(p => p.id === id)

    return (
        <div className="space-y-8">
            {/* Toolbar - Redesigned for better grouping */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between border p-2 pl-4 rounded-lg bg-muted/20">
                <div className="relative flex-1 w-full flex items-center gap-2">
                    <Search className="text-muted-foreground h-4 w-4 shrink-0" />
                    <Input
                        placeholder="Search MPs by name, constituency..."
                        className="border-0 shadow-none focus-visible:ring-0 bg-transparent h-10 w-full"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value)
                            setCurrentPage(1)
                        }}
                    />
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto p-1 bg-background rounded-md border md:border-0 md:bg-transparent">
                    <div className="h-6 w-px bg-border hidden md:block" />
                    <Select value={selectedParty} onValueChange={(val) => {
                        setSelectedParty(val)
                        setCurrentPage(1)
                    }}>
                        <SelectTrigger className="border-0 focus:ring-0 h-9 w-full md:w-[200px] bg-transparent shadow-none">
                            <SelectValue placeholder="All Parties" />
                        </SelectTrigger>
                        <SelectContent align="end">
                            <SelectItem value="all">All Parties</SelectItem>
                            {PARLIAMENT_PARTIES.map(party => (
                                <SelectItem key={party.id} value={party.id}>
                                    <span className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: party.color }} />
                                        {party.name}
                                    </span>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-md">
                    <Button
                        variant="ghost"
                        size="sm"
                        className={cn("h-8 w-8 p-0", viewMode === "list" && "bg-background shadow-sm")}
                        onClick={() => setViewMode("list")}
                    >
                        <List className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        className={cn("h-8 w-8 p-0", viewMode === "grid" && "bg-background shadow-sm")}
                        onClick={() => setViewMode("grid")}
                    >
                        <LayoutGrid className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* List View */}
            {viewMode === "list" && (
                <div className="min-h-[500px]">
                    <div className="grid grid-cols-12 gap-4 px-4 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground/60 border-b select-none">
                        <div className="col-span-5 md:col-span-4">Member of Parliament</div>
                        <div className="col-span-4 md:col-span-3">Constituency</div>
                        <div className="col-span-3 md:col-span-3 hidden md:block">Party Affiliation</div>
                        <div className="col-span-3 md:col-span-2 text-right">Region</div>
                    </div>

                    <div className="divide-y divide-border/40">
                        {paginatedMps.map((mp) => {
                            const party = getPartyDetails(mp.partyId)
                            return (
                                <div
                                    key={mp.id}
                                    className="group grid grid-cols-12 gap-4 px-4 py-5 items-center hover:bg-muted/30 transition-colors cursor-pointer"
                                >
                                    {/* Name & Avatar */}
                                    <div className="col-span-5 md:col-span-4 flex items-center gap-4">
                                        <div className="h-10 w-10 shrink-0 rounded-full bg-muted/50 border flex items-center justify-center font-serif text-lg text-muted-foreground group-hover:bg-background group-hover:text-primary transition-colors">
                                            {mp.mpName.split(" ")[1]?.[0] || mp.mpName[0]}
                                        </div>
                                        <div>
                                            <div className="font-serif font-medium text-lg leading-tight group-hover:text-primary transition-colors">
                                                {mp.mpName}
                                            </div>
                                            <div className="md:hidden text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                                                <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: party?.color }} />
                                                {party?.name}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-4 md:col-span-3 text-sm text-foreground/80 font-medium">
                                        {mp.constituency}
                                    </div>

                                    <div className="hidden md:flex col-span-3 items-center gap-2 text-sm text-muted-foreground">
                                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: party?.color }} />
                                        {party?.name}
                                    </div>

                                    <div className="col-span-3 md:col-span-2 text-right text-sm text-muted-foreground flex items-center justify-end gap-2 text-right">
                                        {mp.region}
                                        <ChevronRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}

            {/* Grid View */}
            {viewMode === "grid" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[500px]">
                    {paginatedMps.map((mp) => {
                        const party = getPartyDetails(mp.partyId)
                        return (
                            <div
                                key={mp.id}
                                className="group relative bg-background border rounded-lg overflow-hidden hover:shadow-md transition-all cursor-pointer flex flex-col"
                            >
                                {/* Full Width Image Placeholder */}
                                <div className="aspect-[4/3] w-full bg-muted/40 flex items-center justify-center border-b group-hover:bg-muted/60 transition-colors">
                                    <span className="font-serif text-6xl text-muted-foreground/40 font-bold group-hover:text-primary/80 transition-colors">
                                        {mp.mpName.split(" ")[1]?.[0] || mp.mpName[0]}
                                    </span>
                                </div>

                                <div className="p-5 text-center flex-1 flex flex-col">
                                    <div className="space-y-1 mb-4">
                                        <h3 className="font-serif font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                                            {mp.mpName}
                                        </h3>
                                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                                            {mp.constituency}
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-4 border-t w-full">
                                        <div className="flex flex-col items-center gap-1.5 text-xs text-muted-foreground">
                                            <div className="flex items-center gap-1.5 font-medium px-2 py-0.5 rounded-full bg-muted/30">
                                                <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: party?.color }} />
                                                {party?.name}
                                            </div>
                                            <span>{mp.region} Region</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}

            {paginatedMps.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                    No members found matching your search.
                </div>
            )}

            {/* Pagination Controls match previous design, mostly unchanged except logic */}
            {totalPages > 1 && (
                <div className="flex items-center justify-between border-t pt-6 text-sm text-muted-foreground">
                    <div>
                        Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredMps.length)} of {filteredMps.length} members
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="h-9 w-9"
                        >
                            <ChevronsLeft className="h-4 w-4" />
                        </Button>
                        <div className="flex items-center gap-1 mx-2">
                            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                let pageNum = i + 1
                                if (totalPages > 5) {
                                    if (currentPage > 3) pageNum = currentPage - 2 + i
                                    if (pageNum > totalPages) pageNum = totalPages - (4 - i)
                                }
                                if (pageNum <= 0) pageNum = 1 // Safety constraint

                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => handlePageChange(pageNum)}
                                        className={`h-8 w-8 rounded-md flex items-center justify-center transition-colors ${currentPage === pageNum
                                            ? "bg-primary text-primary-foreground font-medium"
                                            : "hover:bg-muted"
                                            }`}
                                    >
                                        {pageNum}
                                    </button>
                                )
                            })}
                        </div>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="h-9 w-9"
                        >
                            <ChevronsRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}
