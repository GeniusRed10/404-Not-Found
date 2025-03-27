const Header = () => {
  return (
    <header className="bg-black w-full px-4 py-2 flex items-center justify-between border-b border-xbox-darkgray">
      <div className="flex items-center">
        {/* RLagarto10 Logo */}
        <a href="#" className="mr-4 flex items-center">
          <div className="bg-xbox-green text-white font-bold rounded-sm w-6 h-6 flex items-center justify-center">
            RL
          </div>
          <span className="ml-2 text-white">RLagarto10</span>
        </a>
        {/* Separator */}
        <div className="h-6 w-px bg-xbox-darkgray mx-4"></div>
        {/* RL Logo */}
        <a href="#" className="flex items-center">
          <img
            src="https://ext.same-assets.com/274589737/1321799238.svg"
            alt="RL"
            className="h-6"
          />
        </a>
      </div>

      {/* Search box */}
      <div className="hidden md:flex items-center relative">
        <input
          type="text"
          placeholder="Search RL.com"
          className="bg-black border border-xbox-darkgray px-3 py-1 rounded-sm text-sm w-64"
        />
        <svg
          className="w-4 h-4 absolute right-3 text-xbox-lightgray"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>

      {/* Right side actions */}
      <div className="flex items-center">
        {/* Cart icon */}
        <a href="#" className="text-white mr-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
        </a>

        {/* Sign in button */}
        <a href="#" className="flex items-center">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
