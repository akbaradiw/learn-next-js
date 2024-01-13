"use client"

import { Inter } from 'next/font/google'
// import './globals.css'
import Link from 'next/link'
import  styles from '@/styles.module.css'
import { usePathname } from 'next/navigation'


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
const pathname = usePathname();

  return (
    <html lang="en">
        <body className={inter.className}>{children}</body>
        <div>
      <Link className={`link ${pathname === "/contactus" ? styles.active : ""}`} href={"/contactus"} >contat us</Link>
      <Link className={`link ${pathname === "/dashboard" ? styles.active : ""}`} href={"/dashboard"} >dashboard</Link>
        </div>
    
    </html>
  )
}
