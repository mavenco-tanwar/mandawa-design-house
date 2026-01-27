export default function BuyingProcess() {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* How to Buy Section */}
        <section className="text-center mb-10">
        <div className="text-center mx-auto mb-10">
            <h2 className="uppercase tracking-wide text-xl md:text-4xl font-serif text-[#000]">
                HOW TO BUY
            </h2>
      </div>
          <ol className="space-y-2 text-gray-600 text-sm sm:text-base tracking-wide">
            <li className="flex justify-center items-start">
              <span className="tracking-wide text-md md:text-xl md:w-50">1.</span>
              <span className="uppercase tracking-wide text-md md:text-xl w-[400px]">Browse the collection</span>
            </li>
            <li className="flex justify-center items-start">
              <span className="tracking-wide text-md md:text-xl md:w-50">2.</span>
              <span className="uppercase tracking-wide text-md md:text-xl w-[400px]">Submit and enquiry</span>
            </li>
            <li className="flex justify-center items-start">
              <span className="tracking-wide text-md md:text-xl md:w-50">3.</span>
              <span className="uppercase tracking-wide text-md md:text-xl w-[400px]">Receive quotation and timelines</span>
            </li>
            <li className="flex justify-center items-start">
              <span className="tracking-wide text-md md:text-xl md:w-50">4.</span>
              <span className="uppercase tracking-wide text-md md:text-xl w-[400px]">Confirm order and payment</span>
            </li>
            <li className="flex justify-center items-start">
              <span className="tracking-wide text-md md:text-xl md:w-50">5.</span>
              <span className="uppercase tracking-wide text-md md:text-xl w-[400px]">Production and delivery</span>
            </li>
          </ol>
        </section>

        {/* Divider */}
        <hr className="border-t border-gray-300 mb-10" />

        {/* Packaging Section */}
        <section className="text-center">
                  <div className="text-center mx-auto mb-10">
            <h2 className="uppercase tracking-wide text-xl md:text-4xl font-serif text-[#000]">
               PACKAGING & WORLDWIDE SHIPPING
            </h2>
      </div>

          <p className="uppercase tracking-wide text-xl">
            We use professional export-grade packaging to ensure your furniture arrives.
            <br className="hidden sm:block" />
            safely, wherever you are in the world.
          </p>
        </section>
      </div>
    </div>
  );
}