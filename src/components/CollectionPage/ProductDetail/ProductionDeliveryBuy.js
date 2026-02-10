import React from "react";

const ProductionDeliveryBuy = () => {
  return (
    <section className="bg-white px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: Production & Delivery */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold tracking-wide uppercase mb-2">
              Production & Delivery
            </h3>
            <div className="h-[1px] w-12 bg-gray-300 mb-4 w-full" />

            <ul className="space-y-2 text-[#42393B] text-[12px]">
              <li className="text-[12px] font-poppins text-[#42393B]">Production Time :- 2–4 weeks</li>

              <li className="pt-2 text-[12px] font-poppins text-[#42393B]">Worldwide Shipping – DHL</li>
              <li>By Air: 7–10 days</li>
              <li>By Water: 40–60 days</li>

              <li className="pt-2 text-[12px] font-poppins text-[#42393B]">Inside India Shipping</li>
              <li>By Air: 5–7 days</li>
              <li>By Road: 6–12 days</li>
            </ul>

            <p className="mt-4 text-xs text-gray-500">
              * Customs duties & local taxes may apply as per destination country.
            </p>
          </div>

          {/* CENTER: Ecommerce Platform */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-lg bg-gray-50">
            <h3 className="text-lg font-semibold tracking-wide uppercase mb-2">
              Buy Directly From
            </h3>

            <div className="h-[1px] w-12 bg-gray-300 mb-4 w-full" />

            <p className="text-lg font-poppins text-[#42393B] mb-4">
              From our eCommerce platform
            </p>

            <ul className="list-decimal list-inside space-y-2 text-gray-700 text-[12px]">
              <li>Browse curated handcrafted collections</li>
              <li>Transparent pricing & timelines</li>
              <li>Dedicated support for first-time buyers</li>
            </ul>

            <div className="mt-4 text-xs text-gray-500 space-y-1">
              <p>* This option may cost more</p>
              <p>* Preferred by our new buyers</p>
            </div>
          </div>

          {/* RIGHT: How to Buy */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold tracking-wide uppercase mb-2">
              How to Buy
            </h3>

            <div className="h-[1px] w-12 bg-gray-300 mb-4 w-full" />

            <ol className="list-decimal list-inside space-y-2 text-gray-700 text-[12px] leading-relaxed">
              <li>Submit an enquiry through the website</li>
              <li>Receive pricing, production & shipping details</li>
              <li>Confirm order & make 50% advance payment</li>
              <li>Production begins</li>
              <li>Complete payment before shipping</li>
              <li>Shipped safely to your destination</li>
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductionDeliveryBuy;
