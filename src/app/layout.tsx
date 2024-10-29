// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Cabin } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import React, { ReactNode } from 'react'

const fontHeading = Cabin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Cabin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

// Define the props for the Layout component
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}

export default Layout;
