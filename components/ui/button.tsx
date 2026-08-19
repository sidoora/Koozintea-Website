import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "lg"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none",
          variant === "default" && "bg-stone-800 text-white hover:bg-stone-900",
          variant === "outline" && "border border-stone-400 text-stone-700 hover:bg-stone-50",
          size === "default" && "px-4 py-2 text-sm",
          size === "lg" && "px-8 py-3 text-base",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
