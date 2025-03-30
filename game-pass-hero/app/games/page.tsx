import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getGames } from "@/lib/utils"

export default async function GamesPage() {
  const games = await getGames()

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8">All Games</h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {games.map((game) => (
              <Link href={`/games/${game.id}`} key={game.id} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-md mb-2">
                  <Image
                    src={`/placeholder.svg?height=300&width=225`}
                    alt={game.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-sm group-hover:text-green-500 transition-colors">{game.title}</h3>
                <p className="text-xs text-gray-400">{game.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

