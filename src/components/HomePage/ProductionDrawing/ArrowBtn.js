import { clsx } from 'clsx'
import React from 'react'

const ArrowBtn = ({ text, onClick, variant = "default" }) => {
  return (
    <button
         onClick={onClick}
         className={clsx(
           "md:px-4 px-2 md:py-2 py-1 transition font-medium w-fit cursor-pointer",
           {
             "bg-[#6E2F1B] text-[#FAFAFA] hover:bg-[#191919]": variant === "Brown",
             
           }
         )}
       >
         {text}
       </button>
  )
}

export default ArrowBtn
