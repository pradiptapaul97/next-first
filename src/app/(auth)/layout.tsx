"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "./styles.css"


const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot password', href: '/forgot-password' }
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <>
      <div>
        {
          navLinks.map((data) => {
            const isActive = pathname === data.href || (pathname.startsWith(data.href) && data.href !== '/');
            return (
              <Link className={isActive ? 'font-bold mr-4' : "text-blue-500 mr-4"} href={data.href} key={data.name}>
                {data.name}
              </Link>
            )
          })
        }
        {children}
      </div>
    </>
  )
}
