import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("pt-PT", { dateStyle: "long" }).format(
    new Date(dateString)
  )
}
