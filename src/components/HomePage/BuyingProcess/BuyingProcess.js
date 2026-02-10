export default function BuyingProcess() {
  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* How to Buy Section */}
        <section className="text-center mb-10">
        <div className="text-center mx-auto mb-5 md:mb-10">
            <h2 className="uppercase tracking-wide text-[18px] md:text-[22px]  text-[#000]">
                HOW TO BUY
            </h2>
      </div>
          <ol className="space-y-2 md:flex text-black text-[12px] gap-8 justify-center sm:text-base tracking-wide">
            <li className="flex justify-center items-start">
              <span className="tracking-wide text-md md:text-[12px] md:w-10">1.</span>
              <span className="uppercase tracking-wide text-md md:text-[12px] text-left">Browse the collection</span>
            </li>
            <li className="flex justify-center items-start">
              <span className="tracking-wide text-md md:text-[12px] md:w-10">2.</span>
              <span className="uppercase tracking-wide text-md md:text-[12px] text-left">Submit and enquiry</span>
            </li>
            <li className="flex justify-center items-start">
              <span className="tracking-wide text-md md:text-[12px] md:w-10">3.</span>
              <span className="uppercase tracking-wide text-md md:text-[12px] text-left">Receive quotation and timelines</span>
            </li>
            <li className="flex justify-center items-start">
              <span className="tracking-wide text-md md:text-[12px] md:w-10">4.</span>
              <span className="uppercase tracking-wide text-md md:text-[12px] text-left">Confirm order and payment</span>
            </li>
            <li className="flex justify-center items-start">
              <span className="tracking-wide text-md md:text-[12px] md:w-10">5.</span>
              <span className="uppercase tracking-wide text-md md:text-[12px] text-left">Production and delivery</span>
            </li>
          </ol>
        </section>

        {/* Divider */}
        <hr className="border-t border-gray-300 mb-10" />

        {/* Packaging Section */}
        <section className="text-center">
                  <div className="text-center mx-auto mb-5 md:mb-10">
            <h2 className="uppercase tracking-wide text-[18px] md:text-[22px]  text-[#000]">
               PACKAGING & WORLDWIDE SHIPPING
            </h2>
      </div>

          <p className="uppercase tracking-wide text-[14px] md:text-[16px]">
            We use professional export-grade packaging to ensure your furniture arrives.
            <br className="hidden sm:block" />
            safely, wherever you are in the world.
          </p>
        </section>
      </div>
    </div>
  );
}