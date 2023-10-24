'use client'

import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import ContactCard from './contact-card'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BiLogoGmail } from 'react-icons/bi'

const links = [
	{
		name: 'Github',
		link: 'https://github.com/LucasCoppola',
		username: 'Lucas Coppola',
		icon: <AiFillGithub className="h-12 w-12 text-gray-700 dark:text-gray-100" />
	},
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/lucas-coppola',
		username: 'Lucas Coppola',
		icon: <AiFillLinkedin className="h-12 w-12 text-gray-700 dark:text-gray-100" />
	},
	{
		name: 'Gmail',
		username: 'lucascoppola21@gmail.com',
		icon: <BiLogoGmail className="h-12 w-12 text-gray-700 dark:text-gray-100" />
	}
]

export default function Contact() {
	const { ref } = useSectionInView('Contact')

	return (
		<motion.section
			id="contact"
			ref={ref}
			className="mb-20 sm:mb-28 w-[min(100%,60rem)] text-center"
			initial={{
				opacity: 0
			}}
			whileInView={{
				opacity: 1
			}}
			transition={{
				duration: 1
			}}
			viewport={{
				once: true
			}}
		>
			<SectionHeading>Contact me</SectionHeading>
			<div className="flex flex-wrap items-center justify-center gap-9">
				{links.map((link, i) => (
					<ContactCard key={i} link={link} />
				))}
			</div>
		</motion.section>
	)
}
