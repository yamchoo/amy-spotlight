import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-500 dark:text-zinc-200 dark:hover:text-pink-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-pink-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
        <h1 className="text-4xl font-['Poppins'] tracking-tight inline-block bg-gradient-to-r bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-clip-text text-7xl text-transparent sm:text-5xl dark:inline-block bg-gradient-to-r bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-clip-text text-7xl text-transparent">
           Ever optimizing.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            I’ve been drawn to design and problem-solving for as long as I can remember. As a kid, I would spend hours rearranging my room, finding ways to make it more functional and cozy—my first experiments in maximizing small spaces.</p>
            <p>
In my teenage years, I discovered a love for technology and taught myself basic coding, blending creativity with practicality to bring ideas to life. I’ve always been fascinated by how thoughtful design can simplify our lives and make everyday moments more enjoyable.</p>
<p>
One of my favorite projects was helping my family organize our home to create more harmony and efficiency. This experience sparked my passion for helping others transform their spaces, workflows, and environments into places that work better and feel better.</p>
<p>
Today, I specialize in blending design and technology to create beautiful, efficient solutions—whether it’s optimizing a small space, crafting a unique brand identity, or building seamless digital experiences. My goal is to make life—at home and work—a little more beautiful and a lot more efficient.</p>


          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/yamchoo" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="https://www.instagram.com/amylchoo" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/yamchoo" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/amy-chou-57a5a720/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:its.amy.chou@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
              its.amy.chou@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
