import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// my utils contaiing helper function for good use ha ha ha ha
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
