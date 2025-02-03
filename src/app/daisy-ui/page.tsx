import { type Metadata } from 'next'
import PhonePOSWrapperDaisy from '@/components/PhonePOSWrapperDaisy'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <PhonePOSWrapperDaisy />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-poppins tracking-tight bg-gradient-to-r from-indigo-500 via-sky-500 to-pink-500 bg-clip-text text-transparent sm:text-5xl">
            Designs that devs & users will love.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’m all about results. Designs need to be easy to implement, so we
              can get real-world feedback as soon as possible. That’s why I
              decided to learn Tailwind CSS, so I could quickly create usable
              designs that devs are happy to implement.
            </p>
            <p>
              My workflow prioritizes implementation, so we can quickly iterate
              and refine when we get core functionality figured out.
            </p>
          </div>

     
        </div>
        <div className="lg:pl-20">
          
        </div>
      </div>
    </Container>
  )
}
