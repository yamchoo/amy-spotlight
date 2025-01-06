import { type Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Amy Chou',
    default:
      'Amy Chou - Designer, Innovator, and Space-Saving Visionary',
  },
  description:
    'I’m Amy, a marketing-minded designer who is obsessed with making all things beautiful and efficient. I am based in Vancouver BC and the founder and CEO of tinywares, where we develop processes & technologies that empower regular people to make beauty an everyday experience at home and at work. Combining creativity, technology, and thoughtful design to transform spaces, workflows, and systems is my jam.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

// 1) Import Poppins from next/font/google:
const poppins = Poppins({
  weight: ['400', '600'],   // adjust weights as needed
  subsets: ['latin'],       // or ['latin-ext'] if you need more
  variable: '--font-poppins'  // optional CSS variable name
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // 2) Apply the Poppins variable to <html> so everything can inherit it:
    <html
      lang="en"
      className={`h-full antialiased ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="flex h-full bg-zinc-50 dark:bg-rose-950">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}