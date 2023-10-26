
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

//import components - Header
import Header from './components/Header'
//import components - Footer
import Footer from './components/Footer'
//import javascript link


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Massage | Wellness Og Fodpleje | Aarhus',
  description: 'Vi tilbyder en professionel behandling indenfor fodpleje og massage i Aarhus.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="dk">
      <Head>
        {/* Include Calendly CSS and script in the head */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" async />
      </Head>
      <body className={inter.className}>
        <div id="wrapper">
        <Header />
        
        {children}

        <Footer />
        </div>
        
        </body>
      
    </html>
  )
}
