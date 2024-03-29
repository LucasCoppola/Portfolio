'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Intro() {
	const { ref } = useSectionInView('Home', 0.5)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

	return (
		<section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
			<motion.h1
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				Hi, I'm <span className="font-bold">Lucas</span>, a{' '}
				<span className="font-bold">full-stack developer</span> specializing in frontend development. I build
				high-quality web applications using Typescript, React, and Next.js.
			</motion.h1>

			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1
				}}
			>
				<Link
					href="#contact"
					className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition"
					onClick={() => {
						setActiveSection('Contact')
						setTimeOfLastClick(Date.now())
					}}
				>
					Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-0.5 transition" />
				</Link>

				<div className="flex mt-2 sm:mt-0 gap-2">
					<Link
						className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
						href="https://www.linkedin.com/in/lucas-coppola"
						target="_blank"
					>
						<BsLinkedin />
					</Link>

					<Link
						className="bg-white p-[0.9rem] text-gray-700 flex items-center rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
						href="https://github.com/LucasCoppola"
						target="_blank"
					>
						<FaGithubSquare size={22} />
					</Link>
				</div>
			</motion.div>
		</section>
	)
}
