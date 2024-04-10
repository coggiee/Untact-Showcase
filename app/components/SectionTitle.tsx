'use client'

import React from 'react'
import TypeWriter from 'typewriter-effect'

interface SectionTitleProps {
  title: string
  className: string
}

function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <h1 className={className}>
      <TypeWriter
        options={{
          strings: [title.toUpperCase()],
          autoStart: true,
          loop: true,
          delay: 300,
          cursor: '_',
        }}
      />
    </h1>
  )
}

export default SectionTitle
