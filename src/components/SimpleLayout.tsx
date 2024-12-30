import { Container } from '@/components/Container'

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children?: React.ReactNode
}) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-poppins tracking-tight inline-block bg-gradient-to-r bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-clip-text text-7xl text-transparent sm:text-5xl dark:inline-block bg-gradient-to-r bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-clip-text text-7xl text-transparent">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}
