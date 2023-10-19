'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
	const { ref } = useSectionInView('About')

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				My name is <span className="font-semibold">Lucas Coppola</span> and i'm from{' '}
				<span className="italic">Buenos Aires, Argentina.</span>
				<br />
				When i got into coding i didn't have a big 'aha' moment, it was more of a gradual evolution. I tried it
				out, and I kept going, one line of code at a time. My curiosity and the confidence that I could learn
				and tackle more complex projects kept me pushing forward.
			</p>

			<p>
				My playground of choice is the <span className="font-semibold">T3 Stack</span>, where I dive deep into{' '}
				<span className="italic">React, Next.js, TypeScript, Tailwind, and Prisma.</span> I'm also familiar and
				enjoy working with the <span className="font-semibold">MERN</span> stack.
				<br />
				<br />
				By the way, I'm always up for diving into new tech stuff.
			</p>
		</motion.section>
	)
}
