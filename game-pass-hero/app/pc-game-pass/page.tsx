import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ChevronRight } from "lucide-react"

export default function PCGamePass() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-black to-zinc-900">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">PC Game Pass</h1>
              <p className="text-xl mb-8">
                Get unlimited access to over 100 high-quality games for one low monthly price. Play new releases the day
                they launch, plus favorites from RL Studios and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="/join"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md flex items-center justify-center"
                >
                  JOIN NOW <ChevronRight className="ml-1 w-5 h-5" />
                </Link>
                <Link
                  href="/learn-more"
                  className="bg-transparent border border-white hover:bg-white/10 text-white px-8 py-3 rounded-md flex items-center justify-center"
                >
                  LEARN MORE <ChevronRight className="ml-1 w-5 h-5" />
                </Link>
              </div>
              <p className="text-sm text-gray-400">
                Subscription continues automatically at the regular price until cancelled. Terms and conditions apply.
              </p>
            </div>
          </div>
        </section>

        {/* Games Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Play these games and more</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <Link href={`/games/game-${i + 1}`} key={i} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-md mb-2">
                    <Image
                      src={`/placeholder.svg?height=300&width=225`}
                      alt={`Game ${i + 1}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium text-sm group-hover:text-green-500 transition-colors">
                    Game Title {i + 1}
                  </h3>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/pc-game-pass/games" className="inline-flex items-center text-green-500 hover:text-green-400">
                View all games <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-zinc-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why PC Game Pass?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-800 p-6 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Day One Access</h3>
                <p className="text-gray-400">
                  Play new games from RL Studios the day they release, at no additional cost.
                </p>
              </div>
              <div className="bg-zinc-800 p-6 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Great Value</h3>
                <p className="text-gray-400">
                  Get unlimited access to over 100 high-quality games for one low monthly price.
                </p>
              </div>
              <div className="bg-zinc-800 p-6 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Member Discounts</h3>
                <p className="text-gray-400">
                  Save up to 20% on games in the PC Game Pass library, plus up to 10% off related DLC.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "What is PC Game Pass?",
                  answer:
                    "PC Game Pass is a gaming subscription that gives you unlimited access to a library of over 100 high-quality PC games for one low monthly price.",
                },
                {
                  question: "How much does PC Game Pass cost?",
                  answer: "PC Game Pass costs $9.99 per month. Prices may vary by region.",
                },
                {
                  question: "What games are included with PC Game Pass?",
                  answer:
                    "PC Game Pass includes a wide variety of games from every genre, including new releases from RL Studios on the day they launch. The library is constantly updated with new games added regularly.",
                },
                {
                  question: "Can I cancel my subscription?",
                  answer:
                    "Yes, you can cancel your subscription at any time. Your benefits will continue until the end of your billing period.",
                },
                {
                  question: "What happens to my games if I cancel?",
                  answer:
                    "If you cancel your subscription, you'll no longer have access to the games in the PC Game Pass library. However, any games you've purchased with your member discount are yours to keep.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-zinc-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-green-600">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to start playing?</h2>
            <p className="text-xl mb-8">Join PC Game Pass today and get access to hundreds of high-quality games.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="bg-black hover:bg-zinc-800 text-white px-8 py-3 rounded-md flex items-center justify-center"
              >
                JOIN NOW <ChevronRight className="ml-1 w-5 h-5" />
              </Link>
              <Link
                href="/learn-more"
                className="bg-transparent border border-black hover:bg-black/10 text-black px-8 py-3 rounded-md flex items-center justify-center"
              >
                LEARN MORE <ChevronRight className="ml-1 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

