import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Game data fetching utility
export async function getGames(category?: string) {
  // This would normally fetch from an API
  const games = [
    { id: 1, title: "Flight Simulator 2024", category: "Simulation" },
    { id: 2, title: "Starfield", category: "RPG" },
    { id: 3, title: "Forza Horizon 5", category: "Racing" },
    { id: 4, title: "Halo Infinite", category: "FPS" },
    { id: 5, title: "Age of Empires IV", category: "Strategy" },
    { id: 6, title: "Sea of Thieves", category: "Adventure" },
    { id: 7, title: "Minecraft", category: "Sandbox" },
    { id: 8, title: "Gears 5", category: "Action" },
    { id: 9, title: "Grounded", category: "Survival" },
    { id: 10, title: "State of Decay 2", category: "Survival" },
    { id: 11, title: "Psychonauts 2", category: "Adventure" },
    { id: 12, title: "Microsoft Flight Simulator", category: "Simulation" },
  ]

  if (category) {
    return games.filter((game) => game.category.toLowerCase() === category.toLowerCase())
  }

  return games
}

