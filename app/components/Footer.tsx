import React from 'react'
import { Link } from '@nextui-org/react'
import GithubIcon from '../icons/GithubIcon'
import BlogIcon from '../icons/BlogIcon'

function Footer() {
  return (
    <footer className="w-full h-24 flex justify-end items-center gap-3 border-t border-[#a1a1aa7c] snap-start snap-always px-3">
      <Link
        isExternal
        isBlock
        color="foreground"
        href="https://github.com/lunarmoon7">
        <GithubIcon
          fontSize={25}
          color="#A1A1AA"
        />
      </Link>
      <Link
        isExternal
        isBlock
        color="foreground"
        href="https://coggie.dev">
        <BlogIcon
          fontSize={25}
          color="#A1A1AA"
        />
      </Link>
    </footer>
  )
}

export default Footer
