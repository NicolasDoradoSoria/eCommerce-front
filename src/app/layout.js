import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './Providers'
import Navbar from "../components/header/components/Navbar"
import CategoryState from '@/context/categoryContext/CategoryState'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <div className='body'>
          <Providers>
            <CategoryState>
              <Navbar />
            </CategoryState>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  )
}
