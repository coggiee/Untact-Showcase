'use client'

import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
    <NextUIProvider
      navigate={router.push}
      className="w-full h-screen container mx-auto px-5">
      {children}
    </NextUIProvider>
  )
}

export default Providers
