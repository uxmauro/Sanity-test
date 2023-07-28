import { getPages } from '@/sanity/sanity-utils'
import '../globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import page from '@/sanity/schemas/page-schema'


export const metadata: Metadata = {
  title: 'Mauro | Product Designer',
  description: 'NextJS + Sanity Webiste',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  //Get all of the pages

  const pages = await getPages()

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">

  <header className=' flex items-center justify-between'>
    <Link href="/" className="bg-gradient-to-tr from-blue-600 to-green-300 bg-clip-text text-transparent text-lg font-bold"> MAURO</Link>
    <div className=" flex items-center gap-5 text-sm text-gray-600 font-semibold">

      {pages.map((page)=>(
        <Link key={page._id} href={`/${page.slug}`} className="hover:underline">
          {page.title}
        </Link>
      ))}
    </div>
  </header>

<main className=" py-20">
        {children}

</main>
        
        
        </body>
    </html>
  )
}
