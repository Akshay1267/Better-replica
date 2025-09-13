import { Phone, Home, DollarSign } from "lucide-react";

export default function StartPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] flex flex-col items-center py-10">
      {/* Navbar */}
      <div className="w-full max-w-6xl flex justify-between items-center px-6 py-4 border-b ">
        <div className="flex items-center space-x-1" href="/">
          <span className="text-green-700 font-bold text-xl">Better</span>
          <span className="text-gray-600">Mortgage</span>
        </div>
        <div className="flex items-center text-green-700 space-x-2">
          <Phone size={18} />
          <a href="tel:4155238837" className="hover:underline">
            Need help? Call 415-523-8837
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center mt-10">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full border-2 border-green-600 flex items-center justify-center shadow-lg hover:bg-green-800">
            <Home className="text-green-600 " size={24} />
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-gray-800">Hi, I'm Betsy!</h1>
        <p className="text-2xl text-gray-800 font-medium mt-2">
          What can I help you with?
        </p>
      </div>

      {/* Options */}
      <div className="mt-8 space-y-4 w-full max-w-md">
        <button className="w-full flex items-center gap-3 px-4 py-3 border rounded-md hover:shadow-md transition">
          <Home className="text-green-600" />
          <span className="text-gray-800">Buying a home</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 border rounded-md hover:shadow-md transition">
          <Home className="text-green-600" />
          <span className="text-gray-800">Refinancing my mortgage</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 border rounded-md hover:shadow-md transition">
          <DollarSign className="text-green-600" />
          <span className="text-gray-800">Get cash from my home</span>
        </button>
      </div>

      {/* Stats */}
      <div className="flex flex-col md:flex-row justify-center gap-10 mt-10 text-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">$100B</h2>
          <p className="text-gray-500 text-sm">
            home loans funded entirely online
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">400K</h2>
          <p className="text-gray-500 text-sm">
            Customers who chose a Better Mortgage
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-10 bg-green-50 p-6 rounded-lg w-full max-w-lg">
        <p className="text-gray-700 mb-4">
          After a few questions, you'll unlock:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">✅ Custom mortgage rates</li>
          <li className="flex items-center gap-2">✅ Exclusive offers</li>
          <li className="flex items-center gap-2">
            ✅ A personalized dashboard
          </li>
        </ul>
      </div>

      <footer className="bg-[#FAFAF7] border-t mt-16">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h2 className="text-lg font-bold text-gray-900">Better</h2>
            <p className="text-gray-600 text-sm mt-2">
              Better Mortgage Corporation is a direct lender dedicated to
              providing a fast, transparent digital mortgage experience backed
              by superior customer support.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Contact Us</h2>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:underline">
                  Schedule a conversation
                </a>
              </li>
              <li>
                <a href="mailto:hello@better.com" className="hover:underline">
                  hello@better.com
                </a>
              </li>
              <li>
                <a href="tel:4155238837" className="hover:underline">
                  415-523-8837
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">Legal</h2>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:underline">
                  NMLS Consumer Access
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Disclosures & Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Affiliated Business
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t" />

        {/* Bottom Disclaimer */}
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-gray-500 space-y-4">
          <p>
            © 2025 Better Home & Finance Holding Company and/or its affiliates.
            Better is a family of companies. Better Mortgage Corporation
            provides home loans; Better Real Estate, LLC and Better Real Estate
            California Inc License # 02164505 provides real estate services;
            Better Cover, LLC sells insurance products; and Better Settlement
            Services provides title insurance services; Better Connect, LLC dba
            Better Attorney Match provides real estate attorney connection
            services; and Better Inspect, LLC provides home inspection services.
            All rights reserved.
          </p>
          <p>
            Home lending products offered by Better Mortgage Corporation. Better
            Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade
            Center, 80th Floor, New York, NY 10007. Loans made or arranged
            pursuant to a California Finance Lenders Law License. Not available
            in all states. Equal Housing Lender. NMLS Consumer Access.
          </p>
        </div>
      </footer>
    </div>
  );
}
