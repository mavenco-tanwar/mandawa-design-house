import Image from 'next/image'
import React from 'react'

const MandawaHomeImage = () => {
 
      return (
    <section>
      <div className="relative min-h-[680px] w-full">
        {/* Background image */}
        <Image
          src="/images/global/image 5.png"
          alt="mandawa design house big image"
          fill
          className="object-cover"
          priority
        />

        {/* Centered content */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          {/* Logo */}
          <Image
            src="/images/global/image VM.png"
            width={100}
            height={100}
            alt="mandawa design house Logo"
          />

          {/* Title */}
          <h3 className="text-white text-[40px] md:text-[80px] font-belleza">
            Mandawa Design House
          </h3>
        </div>
      </div>
    </section>
  );
  
}

export default MandawaHomeImage
