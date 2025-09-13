export default function Footer() {
  return (
    <>
    {/* Multi-column footer */}
      <div className="bg-green-200 text-black px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - About */}
        <div>
          <h3 className="font-bold text-green-900 mb-3">Better</h3>
          <p className="text-sm text-gray-700">
            Better is a family of companies serving all your homeownership needs.
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><span className="font-bold text-green-900">Better Mortgage</span> – Apply 100% online.</li>
            <li><span className="font-bold text-green-900">Better Real Estate</span> – Save with partner agents.</li>
            <li><span className="font-bold text-green-900">Better Cover</span> – Insurance for home, auto & life.</li>
            <li><span className="font-bold text-green-900">Better Inspect</span> – Fast repair estimates & reports.</li>
            <li><span className="font-bold text-green-900">Better Settlement Services</span> – Title insurance made easy.</li>
          </ul>
        </div>

        {/* Column 2 - Resources */}
        <div>
          <h3 className="font-bold text-green-900 mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>Home affordability calculator</li>
            <li>Mortgage calculator</li>
            <li>Free mortgage calculator</li>
            <li>Mortgage calculator with taxes</li>
            <li>Rent vs buy calculator</li>
            <li>HELOC payment calculator</li>
            <li>Buy a home</li>
            <li>Sell a home</li>
            <li>Get home inspection</li>
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div>
          <h3 className="font-bold text-green-900 mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Media</li>
            <li>Partner With Us</li>
            <li>Learning Center</li>
            <li>FAQs</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        {/* Column 4 - Contact & Legal */}
        <div>
          <h3 className="font-bold text-green-900 mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>hello@better.com</li>
            <li>415-523-8837</li>
            <li>FAQ</li>
            <li>Glossary</li>
          </ul>

          <h3 className="font-bold text-green-900 mt-6 mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>NMLS Consumer Access</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Disclosures & Licensing</li>
            <li>Affiliated Business</li>
            <li>Browser Disclaimer</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center space-x-6 bg-green-200 text-black py-4">
        <a
          href="https://www.facebook.com/Better/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-facebook-f hover:text-green-400 transition"></i>
        </a>
        <a
          href="https://www.instagram.com/betterdotcom/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram hover:text-green-400 transition"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/betterdotcom/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin-in hover:text-green-400 transition"></i>
        </a>
      </div>

      <hr className="border-t border-gray-600" />
      <footer className="bg-green-200 text-black py-6 text-center">
        <p>
          © 2025 Better Home & Finance Holding Company and/or its affiliates.
          Better is a family of companies. Better Mortgage Corporation provides
          home loans; Better Real Estate, LLC and Better Real Estate California
          Inc License # 02164055 provides real estate services; Better Cover,
          LLC sells insurance products; and Better Settlement Services provides
          title insurance services; and Better Inspect, LLC provides home
          inspection services. All rights reserved. Better BMC operates under
          the name Better Mortgage Corporation in New York. Home lending
          products offered by Better Mortgage Corporation. Better Mortgage
          Corporation is a direct lender. NMLS #330511. 1 World Trade Center,
          80th Floor, New York, NY 10007. Loans made or arranged pursuant to a
          California Finance Lenders Law License. Not available in all states.
          Equal Housing Lender. NMLS Consumer Access Better Real Estate, LLC dba
          BRE, Better Home Services, BRE Services, LLC and Better Real Estate,
          and operating in the State of California through its wholly owned
          subsidiary Better Real Estate California Inc., is a licensed real
          estate brokerage and maintains its corporate headquarters at 325-41
          Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full
          listing of Better Real Estate, LLCs license numbers. Better Real
          Estate, LLC provides access to real estate brokerage services via its
          nationwide network of partner brokerages and real estate agents
          (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All
          rights reserved. New York State Housing and Anti-Discrimination Notice
          New York Standard Operating Procedures Texas Real Estate Commission:
          Information About Brokerage Services | Consumer Protection Notice
          Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803,
          Philadelphia, PA 19106. Homeowners insurance policies are offered
          through Better Cover, LLC, a Pennsylvania Resident Producer Agency.
          License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA
          19106. Insurance quotes and policies are offered through Better Cover,
          LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is
          a full listing of Better Cover, LLC’s license numbers. Better Inspect,
          LLC maintains its corporate headquarters at 325-41 Chestnut Street,
          Suite 846, Philadelphia, PA 19106. Better Mortgage Corporation, Better
          Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC,
          Better Connect, and Better Inspect, LLC are separate operating
          subsidiaries of Better Home & Finance Holding Company. Each company is
          a separate legal entity operated and managed through its own
          management and governance structure as required by its state of
          incorporation, and applicable and legal and regulatory requirements.
          Products not available in all states. Any unauthorized use of any
          proprietary or intellectual property is strictly prohibited. All
          trademarks, service marks, trade names, logos, icons, and domain names
          are proprietary to Better Home & Finance Holding Company. Better Home
          & Finance Holding Company trademarks are federally registered with the
          U. S. Patent and Trademark Office. Better Cover is a registered
          trademark with the U.S. Patent and Trademark Office and is owned by
          Better Cover, LLC. Licensed by the Department of Financial Protection
          and Innovation under the California Residential Mortgage Lending Act
        </p>
        {/* <p className="text-sm">
            © {new Date().getFullYear()} Better.com Replica. All rights
            reserved.
          </p> */}
      </footer>
    </>
  );
}
