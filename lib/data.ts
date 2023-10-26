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
		imageUrl: thulloImg,
		video: 'https://res.cloudinary.com/dotpfjpno/video/upload/v1698068458/Thullo_-_Made_with_Clipchamp_gibq5a.mp4',
		longDescription:
			'Create, manage boards, lists, and customizable cards with easy drag-and-drop. Focus on secure user logins and personalized boards. Access boards effortlessly, boost productivity, and add custom cover images.',
		website: 'https://thullo-lc.vercel.app',
		repository: 'https://github.com/LucasCoppola/Thullo'
	},
	{
		title: 'Strength Shop',
		description:
			'E-commerce website specializing in strength sports equipment, offering a wide range of products for strength athletes and fitness enthusiasts.',
		tags: ['React', 'TypeScript', 'Tailwind'],
		imageUrl: strengthShopImg,
		video: 'https://res.cloudinary.com/dotpfjpno/video/upload/v1689953735/StrengthShopVideo_p57pp1.mp4',
		longDescription:
			'Find a wide range of fitness and strength products. Use the search, filters, and sorting to discover what suits you. Easily add products to your cart, check details, and complete your order with a simple checkout form.',
		website: 'https://strength-shop.netlify.app',
		repository: 'https://github.com/LucasCoppola/Strength-Shop'
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
