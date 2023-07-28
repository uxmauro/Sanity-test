import "../globals.css"


import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Mauro | Product Designer',
  description: 'NextJS + Sanity Webiste',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
 <html lang='en'>
    <body>
        
     {children}
    </body>

 </html>


  )
}
