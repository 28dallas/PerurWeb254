import { clsx, type ClassValue } from "clsx";

export function cn(...classes: ClassValue[]) {
  return clsx(classes);
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));
}
