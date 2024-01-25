import React from 'react'

interface SectionSubTitleProps {
  title: string
}

function SectionSubTitle({ title }: SectionSubTitleProps) {
  return <span className="text-sm text-[#bebebe]">{title}</span>
}

export default SectionSubTitle
