import thulloImg from '@/public/thullo-boards.png'
import strengthShopImg from '@/public/strength-shop.png'

export const links = [
	{
		name: 'Home',
		hash: '#home'
	},
	{
		name: 'About',
		hash: '#about'
	},
	{
		name: 'Projects',
		hash: '#projects'
	},
	{
		name: 'Skills',
		hash: '#skills'
	},
	{
		name: 'Contact',
		hash: '#contact'
	}
] as const

export const projectsData = [
	{
		title: 'Thullo',
		description: 'Trello-inspired task management web application.',
		tags: ['React', 'Next.js', 'Tailwind', 'Shadcn/ui', 'Prisma', 'React Query', 'Auth.js', 'PostgreSQL'],
		imageUrl: thulloImg
	},
	{
		title: 'Strength Shop',
		description:
			'E-commerce website specializing in strength sports equipment, offering a wide range of products for strength athletes and fitness enthusiasts.',
		tags: ['React', 'TypeScript', 'Tailwind'],
		imageUrl: strengthShopImg
	}
] as const

export const skillsData = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Node.js',
	'Git',
	'Tailwind',
	'Prisma',
	'Express',
	'MongoDB',
	'PostgreSQL'
] as const
