'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function useAuth() {
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('http://localhost:5138/api/user/me', {
          credentials: 'include',
        })

        if (!res.ok) {
          router.push('/login') // redirect to login if not logged in
        }
      } catch (err) {
        router.push('/login')
      }
    }

    checkAuth()
  }, [router])
}
