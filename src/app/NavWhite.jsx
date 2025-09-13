import "@fortawesome/fontawesome-free/css/all.min.css";

export default function NavWhite() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white h-20 flex items-center justify-between px-10 fixed w-full">
        <div className="flex items-center space-x-8">
          <div className="text-black font-bold text-xl">Better</div>

          <div className="relative group">
            <button className="text-black hover:text-black transition hover:bg-gray-300 px-3 py-2 rounded">
              Buy
            </button>

            <div
              className="absolute left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg
                         opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                         transition duration-200 z-50"
            >
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Apply now
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Purchase rates
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Affordability calculator
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Mortgage calculator
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Rent vs buy calculator
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Find an agent
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  VA loans
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Learning center
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button className="text-black hover:text-black transition hover:bg-gray-300 px-3 py-2 rounded">
              Refinance
            </button>

            <div
              className="absolute left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg
                         opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                         transition duration-200 z-50"
            >
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Apply now
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Finance rates
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Cash-out refinance calculator
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Learning center
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button className="text-black hover:text-black transition hover:bg-gray-300 px-3 py-2 rounded">
              HELOC
            </button>

            <div
              className="absolute left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg
                         opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                         transition duration-200 z-50"
            >
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Apply now
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Calculate your Cash
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  HELOC vs. Cash-out Refinance
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Learning center
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button className="text-black hover:text-black transition hover:bg-gray-300 px-3 py-2 rounded">
              Rates
            </button>

            <div
              className="absolute left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg
                         opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                         transition duration-200 z-50"
            >
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Purchase mortgage rates
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Refinance rates
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Refinance cash-out rates
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Purchase VA rates
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button className="text-black hover:text-black transition hover:bg-gray-300 px-3 py-2 rounded">
              Better+
            </button>

            {/* Dropdown Menu */}
            <div
              className="absolute left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg
                         opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                         transition duration-200 z-50"
            >
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Get insurance
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Title and Closing
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Better Attorney Match
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Learning center
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-6 mr-7">
          <div className="relative group">
            <button className="p-2 rounded-full bg-green-700 hover:bg-green-800 transition">
              <i className="fa-solid fa-phone text-white"></i>
            </button>
            <div
              className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white text-black 
                 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 
                 group-hover:visible transition duration-200 z-50"
            >
              <ul className="py-2">
                <li className="text-black px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Call us anytime at 415-523-8837
                </li>
              </ul>
            </div>
          </div>

          {/* Sign In Button */}
          <button className="px-4 py-2 rounded-md border border-gray-300 text-black hover:bg-gray-200 transition">
            Sign in
          </button>
        </div>
      </nav>
    </>
  );
}
