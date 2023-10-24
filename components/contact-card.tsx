import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import Link from 'next/link'
import { MouseEvent } from 'react'

export default function ContactCard({
	link
}: {
	link: { name: string; username: string; icon: JSX.Element; link?: string }
}) {
	let mouseX = useMotionValue(0)
	let mouseY = useMotionValue(0)

	function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
		let { left, top } = currentTarget.getBoundingClientRect()

		mouseX.set(clientX - left)
		mouseY.set(clientY - top)
	}

	return (
		<Link href={link.link || ''} target="_blank">
			<div
				className="group relative w-72 rounded-xl border dark:border-white/10 dark:bg-gray-900 px-8 pt-6 pb-12 shadow-xl dark:shadow-2xl"
				onMouseMove={handleMouseMove}
			>
				<motion.div
					className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
					style={{
						background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.2),
              transparent 50%
            )
          `
					}}
				/>
				<div className="flex flex-col items-center justify-center relative">
					<i>{link.icon}</i>

					<p className="mt-6 text-xl font-bold tracking-tighter text-gray-700 dark:text-gray-300">
						{link.username}
					</p>
					<span className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{link.name}</span>
				</div>
			</div>
		</Link>
	)
}
