import React, { useState } from 'react'

const Button = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={`min-w-full p-[0.8em] px-8 mt-4 rounded-full text-White ${isHovered ? 'bg-gradient-to-b from-LightSlateBlue to-LightRoyalBlue' : 'bg-DarkGrayBlue'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Continuar
    </button>
  )
}

export default Button