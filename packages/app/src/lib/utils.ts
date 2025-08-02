import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString: string | Date) => {
  return new Date(dateString).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
