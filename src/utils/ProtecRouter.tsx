'use client'

import { useEffect } from "react"
import { usePathname, useRouter } from 'next/navigation';
import { connect } from "@/api";

export default function Protection({children}: {children: React.ReactNode}){
  

  const router = useRouter();

  const path = usePathname();

  useEffect(() => {
    const response = async () => {
      await connect(localStorage.getItem("Book:Token")!)
      .then(res => {
        if (res.status === 200) {
          if (path === '/' || path === '/register') {
            router.push('/user')
          }
        }
      })
      .catch(err => {
        console.log(err)
        if (path !== '/' || path !== "/register"){
          router.push('/')
        }
      })

    }
    
    response()
  })
  
  
  return (
    <>
      {children}
    </>
  )
}