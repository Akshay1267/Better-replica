"use client";
import { useState } from "react";
import NavWhite from "../NavWhite";
import Footer from "../Footer";

export default function MortgageCalculator() {
  const [amount, setAmount] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);

  const principal = amount - downPayment;
  const monthlyRate = rate / 100 / 12;
  const numberOfPayments = term * 12;

  const monthlyPayment = (
    (principal * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
  ).toFixed(2);

  return (
    <>
      <NavWhite />
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/* Main content section */}
        <main className="container mx-auto py-12 px-4 md:px-0 pt-32 bg-[#F0F7F1]">
          <h1 className="text-4xl font-semibold text-center text-gray-800 mb-10">
            Estimate your monthly mortgage payments
          </h1>

          {/* Calculator card */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Home price */}
              <div className="flex flex-col">
                <label
                  htmlFor="home-price"
                  className="text-sm font-medium text-gray-500 mb-1"
                >
                  Home price
                </label>
                <input
                  type="number"
                  id="home-price"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="border border-gray-300 rounded-md p-2 text-lg font-semibold text-gray-700 bg-gray-50"
                />
              </div>

              {/* Down payment */}
              <div className="flex flex-col">
                <label
                  htmlFor="down-payment"
                  className="text-sm font-medium text-gray-500 mb-1"
                >
                  Down payment
                </label>
                <div className="relative flex items-center">
                  <input
                    type="number"
                    id="down-payment"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="flex-grow border border-gray-300 rounded-md p-2 text-lg font-semibold text-gray-700 bg-gray-50"
                  />
                  <span className="absolute right-3 text-sm font-medium text-gray-500">
                    {((downPayment / amount) * 100).toFixed(0)} %
                  </span>
                </div>
              </div>

              {/* Monthly payment */}
              <div className="flex flex-col items-end md:items-start md:col-span-1">
                <span className="text-sm font-medium text-gray-500">
                  Monthly payment
                </span>
                <span className="text-4xl font-bold text-green-700 mt-1">
                  $
                  {(() => {
                    const principal = amount - downPayment;
                    const monthlyRate = rate / 100 / 12;
                    const payments = term * 12;
                    return (
                      (principal * monthlyRate) /
                      (1 - Math.pow(1 + monthlyRate, -payments))
                    ).toFixed(2);
                  })()}
                  /mo
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Length of loan */}
              <div className="flex flex-col">
                <label
                  htmlFor="length-of-loan"
                  className="text-sm font-medium text-gray-500 mb-1"
                >
                  Length of loan
                </label>
                <select
                  id="length-of-loan"
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="border border-gray-300 rounded-md p-2 text-lg font-semibold text-gray-700 bg-gray-50 cursor-pointer"
                >
                  <option value={15}>15 years</option>
                  <option value={20}>20 years</option>
                  <option value={25}>25 years</option>
                  <option value={30}>30 years</option>
                </select>
              </div>

              {/* Interest rate */}
              <div className="flex flex-col">
                <label
                  htmlFor="interest-rate"
                  className="text-sm font-medium text-gray-500 mb-1"
                >
                  Interest rate
                </label>
                <div className="relative flex items-center">
                  <input
                    type="number"
                    id="interest-rate"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="flex-grow border border-gray-300 rounded-md p-2 text-lg font-semibold text-gray-700 bg-gray-50"
                  />
                  <span className="absolute right-3 text-sm font-medium text-gray-500">
                    %
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="zip-code"
                  className="text-sm font-medium text-gray-500 mb-1"
                >
                  ZIP code
                </label>
                <input
                  type="text"
                  id="zip-code"
                  value="10007"
                  readOnly
                  className="border border-gray-300 rounded-md p-2 text-lg font-semibold text-gray-700 bg-gray-50 cursor-not-allowed"
                />
              </div>
            </div>

            <div className="relative h-2 bg-gray-200 rounded-full mb-8">
              <div className="absolute top-0 left-0 h-full w-1/4 bg-green-500 rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-green-500 shadow"></div>
            </div>

            <button className="w-full bg-green-700 text-white font-bold py-3 rounded-md hover:bg-green-600 transition-colors">
              Get pre-approved
            </button>
          </div>

          {/* Monthly payment breakdown section */}
          <div className="max-w-4xl mx-auto mt-12">
            <h2 className="text-2xl font-semibold mb-4">
              Monthly payment breakdown
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between">
              <div className="text-3xl font-bold text-green-700 mb-4 md:mb-0">
                $1,517/mo
              </div>
              <div className="flex flex-col space-y-2 w-full md:w-auto">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-700 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Principal & interest
                  </span>
                  <span className="ml-auto text-sm font-semibold text-gray-800">
                    $1,517
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Property taxes
                  </span>
                  <span className="ml-auto text-sm font-semibold text-gray-800">
                    $0
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <br></br>
      <div className="border-t"></div>
      <div className="h-100 flex flex-col justify-center items-center text-xl text-gray-800 font-bold">
        <h1 className="font-bold text-center text-4xl p-4">
          Check your homebuying power
        </h1>

        <button className="mt-2 bg-green-700 text-white hover:bg-green-900 border border-gray-500 rounded-md px-4 py-2 p-3">
          See what I qualify for
        </button>

        <p className="text-gray-700 text-xs text-center mt-2 px-3">
          ...in as little as 3 minutes  <br />
          no credit impact
        </p>
      </div>
      <div className="border-t"></div>
      <div className="bg-white py-12 px-4 md:px-0">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Mortgage Calculator with PMI & Taxes
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            A mortgage calculator for home loans can show your true monthly
            housing costs before you commit to a home loan.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Home shoppers balance a lot of numbers: home prices, loan sizes,
            down payments, interest rates, property tax rates, mortgage
            insurance premiums, and so on.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            A mortgage payment calculator shows how these variables come
            together to shape a home's monthly payment.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            These tools are invaluable for comparing loan scenarios—and Better
            makes it easy by doing the heavy lifting for you. With access to an
            extensive network of investors, Better essentially "shops the
            market" on your behalf to find competitive rates, saving you the
            time and stress of lender-hunting. In fact, The Wall Street Journal
            named Better the{" "}
            <span className="font-bold">Best Lender for Affordability</span> in
            2024.
          </p>
        </div>
      </div>

      <div className="border-t"></div>
      <div className="text-gray-700 text-xs flex ml-20 p-3">
        Mortgage Calculator is for estimation purposes only. Real payments will
        vary and may include (but are not limited to) the following fees: home
        insurance, HOA payments, taxes, regional fees, etc. All calculations
        assume <br></br>eligibility for the selected loan. This is not a
        commitment to lend.
      </div>
      <Footer />
    </>
  );
}
