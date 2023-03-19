"use client"
import React, { ReactNode, useEffect } from "react"
import { useRouter } from "next/navigation"

export const Protected = ({ children }: { children: ReactNode }) => {
  const isLoggedIn = false
  const router = useRouter()
  
  useEffect(() => {
    if (!isLoggedIn) {
        router.push("/login")
    } else {
        router.push("/")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  return <React.Fragment>{children}</React.Fragment>
}
