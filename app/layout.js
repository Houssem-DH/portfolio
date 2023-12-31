import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/Nav'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Houssem DH Portfolio',
  description: 'Houssem DH Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>

     
     </head>

     
      <body className={inter.className}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
      <Navbar/>
      
        {children}
        
        <Footer/>
        </body>
    </html>
  )
}
