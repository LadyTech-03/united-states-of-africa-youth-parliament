import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <span className="animate-pulse text-gray-500">
        <Loader2 className="h-6 w-6" />
      </span>
    </div>
  )
}
