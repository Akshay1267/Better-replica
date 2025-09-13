import Footer from "../Footer";
import NavWhite from "../NavWhite";

export default function AboutUs() {
  return (
    <>
      <NavWhite />
      <main className="bg-[#fefdfb] min-h-screen flex items-center">
        <section className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-green-700 text-2xl md:text-3xl font-semibold mb-6">
            Our mission
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-700 leading-snug">
            We're making homeownership simpler, faster —{" "}
            <br className="hidden md:block" />
            and most importantly, more accessible for all Americans.
          </h1>
        </section>
      </main>

      <div className="bg-[#017848] text-white py-24 px-4 md:px-8 lg:px-16 flex justify-center items-center text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How we're changing things
          </h2>
          <p className="text-lg md:text-xl font-normal mb-6 leading-relaxed">
            Homeownership is a huge part of our economy. Housing overall is a
            $33 trillion business, and mortgages account for $15 trillion. Yet
            home finance operates in the same way it has for decades—through
            opaque systems and expensive intermediaries whose interests are
            misaligned with consumers'.
          </p>
          <p className="text-lg md:text-xl font-normal leading-relaxed">
            That's why Better.com is redefining the homeownership process from
            the ground up. We're using technology to make it faster and more
            efficient, and humans to help make it friendly and enjoyable.
          </p>
        </div>
      </div>

      <div className="bg-[#fcfbf9] py-16 px-4 md:px-8 text-center">
        <h3 className="text-gray-600 text-lg mb-12">Backed by</h3>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12">
          {/* Logo */}
        </div>
      </div>

      <Footer />
    </>
  );
}
