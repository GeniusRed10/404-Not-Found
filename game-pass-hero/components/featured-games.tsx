import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

const featuredGames = [
  {
    id: 1,
    title: "Cybernetic Odyssey",
    year: "2025",
    genre: "Action, RPG",
    image: "/images/cybernetic-odyssey.png",
    featured: true,
  },
  {
    id: 2,
    title: "Neon Shadows",
    year: "2024",
    genre: "Stealth, Adventure",
    image: "/images/neon-shadows.png",
    featured: false,
  },
  {
    id: 3,
    title: "Quantum Break",
    year: "2024",
    genre: "Sci-Fi, Shooter",
    image: "/images/quantum-break.png",
    featured: true,
  },
  {
    id: 4,
    title: "Mech Warriors",
    year: "2023",
    genre: "Strategy, Simulation",
    image: "/images/mech-warriors.png",
    featured: false,
  },
  {
    id: 5,
    title: "Digital Frontier",
    year: "2025",
    genre: "Open World, Adventure",
    image: "/images/digital-frontier.png",
    featured: true,
  },
]

export default function FeaturedGames() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/0 z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-shadow-lg">Popular Games</h2>
            <p className="text-gray-300 text-shadow">to Play Now</p>
          </div>
          <Link href="/games" className="flex items-center text-sm text-green-500 hover:text-green-400">
            VIEW ALL <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {featuredGames.map((game) => (
            <Link href={`/games/${game.id}`} key={game.id} className="group relative">
              <div className="relative aspect-[2/3] overflow-hidden rounded-sm">
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  width={350}
                  height={500}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                {game.featured && (
                  <div className="absolute top-2 left-0 bg-green-500 text-black px-2 py-1 text-xs font-bold">
                    FEATURED
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 p-3 w-full">
                <h3 className="font-bold text-sm group-hover:text-green-500 transition-colors text-shadow">
                  {game.title}
                </h3>
                <p className="text-xs text-gray-300 text-shadow">
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

