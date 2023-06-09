export const projects = [
	{
		title: 'Storage App',
		technologies: [
			<i className="devicon-javascript-plain colored" title="JavaScript"></i>,
			<i className="devicon-nodejs-plain colored" title="Node.js"></i>,
			<i className="devicon-express-original " title="Express.js"></i>,
			<i className="devicon-mongodb-plain colored" title="MongoDB"></i>,
			<i className="devicon-bootstrap-plain colored" title="Bootstrap"></i>
		],
		description:
			'This application is designed for small companies to effectively manage their product inventory. It provides a user-friendly web-based platform for storing, organizing, and tracking products. Users can securely register and log in to create, edit, and delete product listings with associated images. The application offers a clean and intuitive interface for easy navigation and efficient product management.',
		images: ['./storage-app.png', './storage-app2.png'],
		link: 'https://storage-app-nmpn.onrender.com',
		repo: 'https://github.com/LucasCoppola/Storage-App',
		page: '/storage-app'
	}
]

export const skillsData = [
	{
		type: 'Frontend',
		skills: [
			{ name: 'HTML', icon: <i className="devicon-html5-plain colored"></i> },
			{ name: 'CSS', icon: <i className="devicon-css3-plain colored"></i> },
			{ name: 'JavaScript', icon: <i className="devicon-javascript-plain colored"></i> },
			{ name: 'React', icon: <i className="devicon-react-original colored"></i> },
			{ name: 'Bootstrap', icon: <i className="devicon-bootstrap-plain colored"></i> },
			{ name: 'Tailwind CSS', icon: <i className="devicon-tailwindcss-plain colored"></i> }
		]
	},
	{
		type: 'Backend',
		skills: [
			{ name: 'Node.js', icon: <i className="devicon-nodejs-plain colored"></i> },
			{ name: 'Express.js', icon: <i className="devicon-express-original "></i> },
			{ name: 'MongoDB', icon: <i className="devicon-mongodb-plain colored"></i> },
			{ name: 'Mongoose', icon: <i className="fa-solid fa-code text-sm"></i> }
		]
	},
	{
		type: 'Tools',
		skills: [
			{ name: 'Git', icon: <i className="devicon-git-plain colored"></i> },
			{ name: 'GitHub', icon: <i className="devicon-github-original"></i> },
			{ name: 'Npm', icon: <i className="devicon-npm-original-wordmark colored"></i> },
			{ name: 'VS Code', icon: <i className="devicon-vscode-plain colored"></i> }
		]
	}
]
