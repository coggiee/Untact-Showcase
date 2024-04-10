// icon:chevron_down_double | System UIcons https://systemuicons.com/ | Corey Ginnivan
import * as React from 'react'

function ScrollDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M14.5 6.5l-4 4-4-4M14.5 10.5l-4 4-4-4" />
      </g>
    </svg>
  )
}

export default ScrollDownIcon
