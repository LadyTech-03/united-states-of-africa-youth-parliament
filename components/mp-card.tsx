import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export interface MPData {
  id: string
  name: string
  title: string
  constituency: string
  party: string
  imageUrl: string
  profileUrl: string
}

interface MPCardProps {
  data: MPData
}

export function MPCard({ data }: MPCardProps) {
  return (
    <Link href={data.profileUrl}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 py-0">
        <div className="relative aspect-[3/4] bg-muted">
          <Image src={data.imageUrl || "/placeholder.svg"} alt={data.name} fill className="object-cover" />
        </div>
        <div className="p-4 space-y-2">
          <div>
            <h3 className="font-semibold group-hover:text-primary transition-colors">{data.name}</h3>
            <p className="text-sm text-muted-foreground">{data.title}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">{data.constituency}</p>
            <Badge variant="outline" className="text-xs">
              {data.party}
            </Badge>
          </div>
        </div>
      </Card>
    </Link>
  )
}
