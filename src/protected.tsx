"use client"
import React, { ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export const Protected = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  setTimeout(() => {
    setIsLoggedIn(true)
  }, 500)
  
  useEffect(() => {
    if (!isLoggedIn) {
        setIsLoggedIn(false)
        router.push("/login")
    } else {
        setIsLoggedIn(true)
        router.push("/")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  return <React.Fragment>{isLoggedIn ? children : null}</React.Fragment>
}
