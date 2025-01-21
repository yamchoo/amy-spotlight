import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Bookings',
  description: 'Book time with me!',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="This is my booking tool, check it out!"
      intro="Want to get a hold of me? Book time with me here."
    >

<iframe 
  src="https://cal.com/yamchoo" 
  className="w-full h-[1000px] border rounded-lg shadow-lg"
  allowFullScreen>
</iframe>

    </SimpleLayout>
  )
}
