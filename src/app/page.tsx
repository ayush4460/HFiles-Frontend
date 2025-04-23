'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to /signup after the component mounts
    router.push('/signup')
  }, [router])

  return null // You can return null because it's just a redirect
}
