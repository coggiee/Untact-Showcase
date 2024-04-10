import React from 'react'

interface SectionProps {
  children: React.ReactNode
}

function Section({ children }: SectionProps) {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center snap-start snap-always px-3">
      {children}
    </section>
  )
}

export default Section
