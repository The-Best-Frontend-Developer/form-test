import * as React from "react"

import { cn } from "@/src/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-9 w-full min-w-0 px-3 py-6 sm:py-5 text-base md:text-sm",
        "bg-transparent text-foreground placeholder:text-muted-foreground dark:bg-input/30",
        "rounded-lg border border-gray-300 hover:border-gray-400 border-input",
        "focus-visible:border-blue-500 focus-visible:border-2",
        "shadow-xs shadow-bottom transition-[color,box-shadow]",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "outline-none",
        className
      )}
      {...props}
    />
  )
}

export { Input }
