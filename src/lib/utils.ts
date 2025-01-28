import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const validateEmail = (email: string) => {
  const re = /^([a-z0-9_.-]+@[\da-z.-]+\.[a-z.]{2,6})$/;
  return re.test(email.toLowerCase());
};
