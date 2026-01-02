"use client"

import { useState } from "react"
import { Search, Filter, ArrowRight, LayoutList, LayoutGrid, Table as TableIcon, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { COMMITTEES, CommitteeCategory } from "@/lib/committees-data"
import Link from "next/link"
import { cn } from "@/lib/utils"

const categories: CommitteeCategory[] = ["Economy", "Social", "Governance", "Technology", "Regional", "Environment", "Security"]
type ViewMode = "list" | "grid" | "table"

export function CommitteesList() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string>("all")
    const [viewMode, setViewMode] = useState<ViewMode>("list")

    const filteredCommittees = COMMITTEES.filter((committee) => {
        const matchesSearch = committee.name.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === "all" || committee.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="space-y-8">
            {/* Toolbar: Search, Filter, View Toggle */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="flex gap-4 flex-1 w-full md:w-auto">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                            placeholder="Search committees..."
                            className="pl-10 h-10 bg-background"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="w-[180px] hidden md:block">
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger className="h-10 bg-background">
                                <div className="flex items-center gap-2">
                                    <Filter className="h-4 w-4 text-muted-foreground" />
                                    <SelectValue placeholder="Category" />
                                </div>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Categories</SelectItem>
                                {categories.map((cat) => (
                                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* View Toggles */}
                <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-lg border">
                    <Button
                        variant={viewMode === "list" ? "secondary" : "ghost"}
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => setViewMode("list")}
                        title="List View"
                    >
                        <LayoutList className="h-4 w-4" />
                    </Button>
                    <Button
                        variant={viewMode === "grid" ? "secondary" : "ghost"}
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => setViewMode("grid")}
                        title="Grid View"
                    >
                        <LayoutGrid className="h-4 w-4" />
                    </Button>
                    <Button
                        variant={viewMode === "table" ? "secondary" : "ghost"}
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => setViewMode("table")}
                        title="Table View"
                    >
                        <TableIcon className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Results Display */}
            <div>
                {filteredCommittees.length === 0 ? (
                    <div className="text-center py-12 border rounded-lg bg-muted/10">
                        <p className="text-muted-foreground">No committees found.</p>
                        <Button
                            variant="link"
                            onClick={() => { setSearchQuery(""); setSelectedCategory("all") }}
                            className="mt-2"
                        >
                            Reset filters
                        </Button>
                    </div>
                ) : (
                    <>
                        {/* LIST VIEW */}
                        {viewMode === "list" && (
                            <div className="space-y-3">
                                {filteredCommittees.map((committee) => (
                                    <Link key={committee.id} href={`/parliament-business/committees/${committee.id}`} className="block group">
                                        <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-card border rounded-lg hover:border-primary/50 transition-colors">
                                            <div className="flex items-center gap-4 shrink-0 md:w-32">
                                                <span className="font-mono text-muted-foreground/40 text-lg font-bold">
                                                    {String(committee.number).padStart(2, '0')}
                                                </span>
                                                <Badge variant="secondary" className="font-normal text-[10px] uppercase">
                                                    {committee.category}
                                                </Badge>
                                            </div>
                                            <div className="flex-1 text-center md:text-left">
                                                <h3 className="text-lg font-bold font-serif group-hover:text-primary transition-colors">
                                                    {committee.name}
                                                </h3>
                                                <div className="flex items-center justify-center md:justify-start gap-2 mt-1 text-sm text-muted-foreground">
                                                    <Users className="h-4 w-4" />
                                                    <span className="font-medium text-foreground">{committee.members.length} Members</span>
                                                </div>
                                            </div>
                                            <div className="hidden md:block shrink-0 text-muted-foreground/60">
                                                <ArrowRight className="h-5 w-5 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* GRID VIEW */}
                        {viewMode === "grid" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredCommittees.map((committee) => (
                                    <Link key={committee.id} href={`/parliament-business/committees/${committee.id}`} className="block group h-full">
                                        <div className="flex flex-col h-full bg-card border rounded-lg p-6 hover:border-primary/50 hover:shadow-sm transition-all">
                                            <div className="flex justify-between items-start mb-4">
                                                <Badge variant="secondary" className="font-normal text-[10px] uppercase">
                                                    {committee.category}
                                                </Badge>
                                                <span className="font-mono text-muted-foreground/30 text-sm font-bold">
                                                    {String(committee.number).padStart(2, '0')}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold font-serif mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                {committee.name}
                                            </h3>
                                            <div className="flex items-center gap-2 mb-3">
                                                <Users className="h-3 w-3 text-muted-foreground" />
                                                <span className="text-xs font-medium text-muted-foreground">
                                                    {committee.members.length} Members
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground line-clamp-3 mt-auto">
                                                {committee.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* TABLE VIEW */}
                        {viewMode === "table" && (
                            <div className="border rounded-lg overflow-hidden">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-muted/50 text-muted-foreground font-medium border-b">
                                        <tr>
                                            <th className="px-6 py-4 w-20">#</th>
                                            <th className="px-6 py-4 w-32">Category</th>
                                            <th className="px-6 py-4">Committee Name</th>
                                            <th className="px-6 py-4 w-32 hidden lg:table-cell">Members</th>
                                            <th className="px-6 py-4 hidden md:table-cell">Mandate</th>
                                            <th className="px-6 py-4 w-20"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {filteredCommittees.map((committee) => (
                                            <tr key={committee.id} className="hover:bg-muted/30 transition-colors">
                                                <td className="px-6 py-4 font-mono text-muted-foreground">
                                                    {String(committee.number).padStart(2, '0')}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Badge variant="secondary" className="font-normal text-[10px] uppercase">
                                                        {committee.category}
                                                    </Badge>
                                                </td>
                                                <td className="px-6 py-4 font-medium font-serif">
                                                    <Link href={`/parliament-business/committees/${committee.id}`} className="hover:text-primary">
                                                        {committee.name}
                                                    </Link>
                                                </td>
                                                <td className="px-6 py-4 text-sm hidden lg:table-cell">
                                                    <div className="flex items-center gap-2">
                                                        <Users className="h-4 w-4 text-muted-foreground" />
                                                        <span className="font-medium">{committee.members.length}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-muted-foreground hidden md:table-cell truncate max-w-md">
                                                    {committee.description}
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <Link href={`/parliament-business/committees/${committee.id}`}>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                                            <ArrowRight className="h-4 w-4" />
                                                        </Button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div >
    )
}
