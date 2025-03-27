const Footer = () => {
  return (
    <footer className="bg-xbox-black text-white py-8">
      {/* Main Footer Links */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Browse Column */}
        <div>
          <h3 className="text-sm font-bold mb-4">Browse</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">PC Game Pass</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">PC Game Pass games</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">RL app on Windows PC</a></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div>
          <h3 className="text-sm font-bold mb-4">Resources</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">RL Support</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">Feedback</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">Community Standards</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">Photosensitive Seizure Warning</a></li>
          </ul>
        </div>

        {/* RLagarto10 Store Column */}
        <div>
          <h3 className="text-sm font-bold mb-4">RLagarto10 Store</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">RLagarto10 account</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">RLagarto10 Store Support</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">Returns</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">Orders tracking</a></li>
          </ul>
        </div>
      </div>

      {/* Legal Footer */}
      <div className="border-t border-xbox-darkgray mt-8 pt-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Language and Privacy */}
            <div className="flex items-center flex-wrap gap-4">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A7.96 7.96 0 0 1 4 12c0-4.418 3.582-8 8-8 1.5 0 2.904.42 4.104 1.149A8.002 8.002 0 0 1 12 20a8.1 8.1 0 0 1-2.29-.333zm9.415-8.639a.327.327 0 0 0-.414-.077l-3.083 1.674a.326.326 0 0 0-.162.283v1.431a.326.326 0 0 0 .326.326h2.06a.326.326 0 0 0 .326-.326v-1.172a.325.325 0 0 0-.326-.326h-1.055a.326.326 0 0 1-.17-.604l2.365-1.43a.326.326 0 0 0 .133-.39z"
                  />
                </svg>
                <span className="text-sm">English (Philippines)</span>
              </div>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Your Privacy Choices</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Consumer Health Privacy</a>
            </div>

            {/* Bottom Links */}
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-sm text-gray-400 hover:text-white">Contact RLagarto10</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy & Cookies</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Use</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Trademarks</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">About our ads</a>
              <span className="text-sm text-gray-400">© RLagarto10 2025</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
