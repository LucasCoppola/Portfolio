'use client'

import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import { LiaGlobeAmericasSolid } from 'react-icons/lia'
import { AiFillGithub } from 'react-icons/ai'

type ProjectProps = (typeof projectsData)[number]

export default function Project({
	title,
	description,
	tags,
	imageUrl,
	longDescription,
	repository,
	video,
	website
}: ProjectProps) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className="relative w-[380px] sm:w-[420px] h-[420px] border rounded-lg shadow-lg group cursor-pointer">
					<Image src={imageUrl} alt={title} layout="fill" className="rounded-lg object-cover" />
					<div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex flex-col items-start rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-8 pb-10">
						<h3 className="text-3xl font-bold text-gray-200 dark:text-white tracking-tighter mt-auto mb-2">
							{title}
						</h3>
						<p className="leading-relaxed text-sm text-gray-200 dark:text-white/70">{description}</p>
						<ul className="flex flex-wrap mt-4 gap-2">
							{tags.map((tag, index) => (
								<li
									className="bg-gray-400 dark:bg-gray-500 px-3 py-1 text-[0.6rem] uppercase text-white rounded-full dark:text-white/70"
									key={index}
								>
									{tag}
								</li>
							))}
						</ul>
					</div>
				</div>
			</SheetTrigger>
			<SheetContent className="w-[400px] sm:w-[500px] lg:w-2/5 overflow-y-auto">
				<SheetHeader>
					<SheetTitle className="text-2xl text-left font-bold text-gray-900 dark:text-white/90 tracking-tighter pb-3">
						{title}
					</SheetTitle>
					<SheetDescription asChild>
						<>
							<p className="text-sm text-gray-800 dark:text-white/80 pb-5 tracking-tight text-left">
								{description}
							</p>
							<video
								controls
								autoPlay
								muted
								className="rounded-xl object-cover border dark:border-0"
								height={300}
							>
								<source src={video} type="video/mp4" />
							</video>
							<span className="text-lg pt-5 pb-3 font-medium text-gray-900 dark:text-white tracking-tight text-left">
								About
							</span>
							<p className="text-sm text-gray-800 dark:text-white/80 tracking-tight text-left">
								{longDescription}
							</p>
							<span className="text-lg pt-5 pb-3 font-medium text-gray-900 dark:text-white tracking-tight text-left">
								Technologies
							</span>
							<ul className="flex flex-wrap gap-2">
								{tags.map((tag, index) => (
									<li
										className="bg-blue-100 text-blue-800 text-[11px] font-semibold mr-2 px-3 py-1.5 rounded dark:bg-[#13283e] dark:text-blue-200 capitalize"
										key={index}
									>
										{tag}
									</li>
								))}
							</ul>
							<span className="flex items-center text-lg pt-5 pb-3 font-medium text-gray-900 dark:text-white tracking-tight">
								<LiaGlobeAmericasSolid className="mr-1" />
								Website
							</span>
							<Link
								href={website}
								target="_blank"
								className="text-gray-500 dark:text-[#3f566e] text-left font-semibold tracking-tighter text-sm hover:underline cursor-pointer"
							>
								{website}
							</Link>

							<span className="flex items-center text-lg pt-5 pb-3 font-medium text-gray-900 dark:text-white tracking-tight">
								<AiFillGithub className="mr-1" />
								Github
							</span>
							<Link
								href={repository}
								target="_blank"
								className="text-gray-500 dark:text-[#3f566e] text-left font-semibold tracking-tighter text-sm hover:underline cursor-pointer"
							>
								{repository}
							</Link>
						</>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}
