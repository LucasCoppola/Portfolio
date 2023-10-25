'use client'

import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

type ProjectProps = (typeof projectsData)[number]

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className="relative w-[420px] h-[420px] border rounded-lg shadow-lg group">
					{/* Image */}
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
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Are you sure absolutely sure?</SheetTitle>
					<SheetDescription>
						This action cannot be undone. This will permanently delete your account and remove your data
						from our servers.
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}
