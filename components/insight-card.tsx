import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export interface InsightCardData {
  id: string
  title: string
  imageUrl: string
  linkUrl: string
}

interface InsightCardProps {
  data: InsightCardData
}

export function InsightCard({ data }: InsightCardProps) {
  return (
    <Link href={data.linkUrl}>
      <Card className="group relative overflow-hidden aspect-[3/4] hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0">
        <div className="absolute inset-0">
          <Image src={data.imageUrl || "/placeholder.svg"} alt={data.title} fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </Card>
    </Link>
  )
}
