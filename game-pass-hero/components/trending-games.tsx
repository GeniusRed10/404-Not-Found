import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

const trendingGames = [
  {
    id: 1,
    title: "Robot Revolution",
    year: "2025",
    genre: "Action, Strategy",
    image: "/images/robot-revolution.png",
    featured: true,
  },
  {
    id: 2,
    title: "Synthetic Dreams",
    year: "2024",
    genre: "Adventure, Puzzle",
    image: "/images/synthetic-dreams.png",
    featured: true,
  },
  {
    id: 3,
    title: "Mechanical Heart",
    year: "2024",
    genre: "RPG, Story",
    image: "/images/mechanical-heart.png",
    featured: false,
  },
]

export default function TrendingGames() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-shadow-lg">Featured</h2>
            <p className="text-gray-300 text-shadow">This Week</p>
          </div>
          <Link href="/trending" className="flex items-center text-sm text-green-500 hover:text-green-400">
            VIEW ALL <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingGames.map((game) => (
            <Link href={`/games/${game.id}`} key={game.id} className="group relative">
              <div className="relative aspect-video overflow-hidden rounded-sm">
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  width={600}
                  height={300}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                {game.featured && (
                  <div className="absolute top-3 right-3 bg-red-600/80 text-white px-2 py-1 text-xs font-bold backdrop-blur-sm">
                    FEATURED
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h3 className="font-bold text-lg group-hover:text-green-500 transition-colors text-shadow">
                  {game.title}
                </h3>
                <p className="text-sm text-gray-300 text-shadow">
                  {game.year}, {game.genre}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

