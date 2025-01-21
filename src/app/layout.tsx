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
    'I’m Amy, a marketing-minded designer passionate about creating real-life solutions to everyday problems. Based in Vancouver, BC, I develop processes and technologies that empower people to transform their spaces, workflows, and everyday experiences through creativity, technology, and thoughtful design.',
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
      <body className="flex h-full bg-zinc-50 dark:bg-zinc-950">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}