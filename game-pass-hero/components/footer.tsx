import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black/40 py-12 border-t border-zinc-800/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-bold text-green-500 text-2xl">RL</span>
              <span className="font-medium">RLagarto10</span>
            </Link>
            <p className="text-gray-300 text-sm mb-4 text-shadow">
              Experience the future of gaming with our cutting-edge platform. Unlimited access to hundreds of
              high-quality titles.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center hover:bg-green-600/60 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center hover:bg-green-600/60 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center hover:bg-green-600/60 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-shadow">Browse</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/pc-game-pass" className="hover:text-green-500 transition-colors text-shadow">
                  PC Game Pass
                </Link>
              </li>
              <li>
                <Link href="/pc-game-pass/games" className="hover:text-green-500 transition-colors text-shadow">
                  PC Game Pass games
                </Link>
              </li>
              <li>
                <Link href="/app/windows" className="hover:text-green-500 transition-colors text-shadow">
                  RL app on Windows PC
                </Link>
              </li>
              <li>
                <Link href="/new-releases" className="hover:text-green-500 transition-colors text-shadow">
                  New Releases
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="hover:text-green-500 transition-colors text-shadow">
                  Coming Soon
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-shadow">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/support" className="hover:text-green-500 transition-colors text-shadow">
                  RL Support
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="hover:text-green-500 transition-colors text-shadow">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="/community/standards" className="hover:text-green-500 transition-colors text-shadow">
                  Community Standards
                </Link>
              </li>
              <li>
                <Link href="/seizure-warning" className="hover:text-green-500 transition-colors text-shadow">
                  Photosensitive Seizure Warning
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-green-500 transition-colors text-shadow">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-shadow">RLagarto10 Store</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/account" className="hover:text-green-500 transition-colors text-shadow">
                  RLagarto10 account
                </Link>
              </li>
              <li>
                <Link href="/store/support" className="hover:text-green-500 transition-colors text-shadow">
                  RLagarto10 Store Support
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-green-500 transition-colors text-shadow">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/orders" className="hover:text-green-500 transition-colors text-shadow">
                  Orders tracking
                </Link>
              </li>
              <li>
                <Link href="/gift-cards" className="hover:text-green-500 transition-colors text-shadow">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800/30 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="hover:text-green-500 transition-colors text-shadow">
                Privacy & Cookies
              </Link>
              <Link href="/terms" className="hover:text-green-500 transition-colors text-shadow">
                Terms of Use
              </Link>
              <Link href="/trademarks" className="hover:text-green-500 transition-colors text-shadow">
                Trademarks
              </Link>
              <Link href="/legal" className="hover:text-green-500 transition-colors text-shadow">
                Legal
              </Link>
            </div>
            <div className="text-shadow">© 2025 RLagarto10. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

