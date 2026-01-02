"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ViewMode } from "./chamber-intelligence"
import { Users, User, CalendarCheck, Clock, Download } from "lucide-react"

interface ChamberControlsProps {
    viewMode: ViewMode
    onModeChange: (mode: ViewMode) => void
    onExport: () => void
}

export function ChamberControls({ viewMode, onModeChange, onExport }: ChamberControlsProps) {
    return (
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card border rounded-xl p-2 md:p-4 my-4 shadow-sm">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
                <Tabs value={viewMode} onValueChange={(v) => onModeChange(v as ViewMode)} className="w-full">
                    <TabsList className="bg-muted/50 p-1">
                        <TabsTrigger value="party" className="gap-2">
                            <Users className="h-4 w-4" /> Party
                        </TabsTrigger>
                        <TabsTrigger value="gender" className="gap-2">
                            <User className="h-4 w-4" /> Demographics
                        </TabsTrigger>
                        <TabsTrigger value="attendance" className="gap-2">
                            <CalendarCheck className="h-4 w-4" /> Attendance
                        </TabsTrigger>
                        <TabsTrigger value="seniority" className="gap-2">
                            <Clock className="h-4 w-4" /> Seniority
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
                <Select defaultValue="all-sessions">
                    <SelectTrigger className="w-[180px] bg-background">
                        <SelectValue placeholder="Session Filter" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all-sessions">Current Session</SelectItem>
                        <SelectItem value="2025-q4">Q4 2025</SelectItem>
                        <SelectItem value="2025-q3">Q3 2025</SelectItem>
                    </SelectContent>
                </Select>

                <Button variant="outline" size="icon" onClick={onExport} title="Export Report">
                    <Download className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
