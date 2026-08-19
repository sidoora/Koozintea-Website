import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

// Shown wherever a real photo hasn't been added yet in site-config.ts,
// so the site reads as "in progress, on purpose" rather than broken.
export function ImagePlaceholder({
  className,
  label = "Photo coming soon",
}: {
  className?: string
  label?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-amber-50 to-stone-100 text-stone-400",
        className
      )}
    >
      <ImageIcon className="h-8 w-8" />
      <span className="text-xs font-medium tracking-wide uppercase">{label}</span>
    </div>
  )
}
