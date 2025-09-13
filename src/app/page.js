import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-green-800 text-center text-white py-24 h-180">
        <h1 className="text-7xl font-bold leading-tight">
          The first <br></br>
          <span className="bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 text-transparent bg-clip-text">
            AI-powered
          </span>{" "}
          Mortgage
        </h1>

        <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
          Our tech unlocks lower rates, higher chances of approval, and a
          lightning-fast process from approval to closing. Over $100 billion
          funded.
        </p>

        <div className="mt-8">
          <button
            className="px-8 py-3 bg-green-400 text-black font-semibold rounded-full 
                             hover:bg-green-800 hover:text-white transition duration-300"
          >
            Start my pre-approval
          </button>
        </div>

        <div className="mt-3 text-sm text-gray-300 flex justify-center items-center space-x-2">
          <span>⏱ 3 min</span>
          <span>•</span>
          <span>No hard credit check</span>
        </div>
      </section>
      <Footer />
    </>
  );
}
