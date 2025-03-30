import Link from "next/link"

export default function Navbar() {
  return (
    <header className="py-4 px-6 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-white text-2xl">Netlify</span>
            <span className="text-xs bg-white/20 px-2 py-1 rounded-sm">ASSESSMENT</span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="https://romeo-lagarto-assessment.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              Original Site
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

