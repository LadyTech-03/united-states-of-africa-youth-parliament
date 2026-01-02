"use client"

import { Play, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import SectionWrapper from "./section-wrapper"

export interface VideoItem {
  id: string
  title: string
  date: string
  duration: string
  youtubeUrl: string
  thumbnailUrl: string
  category: string
}

interface VideoCarouselProps {
  videos: VideoItem[]
  title?: string
  description?: string
}

export function VideoCarousel({ videos, title, description }: VideoCarouselProps) {
  return (
      <SectionWrapper>
        <div className="space-y-4">
          {title && (
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
              {description && <p className="text-muted-foreground">{description}</p>}
            </div>
          )}

          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {videos.map((video) => (
                <Link
                  key={video.id}
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-none w-[320px] snap-start group"
                >
                  <Card className="gap-2 overflow-hidden border-2 transition-colors py-0">
                    <div className="relative aspect-video bg-muted">
                      <Image
                        src={video.thumbnailUrl || "/placeholder.svg"}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                          <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>

                    <div className="p-4 space-y-2">
                      <h3 title={video.title} className="font-semibold truncate line-clamp-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{video.date}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
  )
}
