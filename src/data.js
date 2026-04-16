export const portfolioData = {
  navLinks: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    name: 'YASIR ANSARI',
    role: 'Junior Full Stack Web Developer',
    summary:
      'I build fast, production-ready web apps with clean architecture, responsive UI, and API-driven workflows.',
    ctaPrimary: { label: 'View Projects', href: '#projects' },
    ctaSecondary: { label: 'Contact Me', href: '#contact' },
  },
  valueProps: [
    'Performance-focused frontend delivery',
    'Clean and reusable architecture',
    'Mobile-first UI implementation',
  ],
  about: {
    title: 'About Me',
    description:
      "A Junior Full Stack Web Developer with proven experience of around 1 year 6 months at adapting in both self-starting and collaborative environments, consistently focused on achieving high-quality results under strict deadlines. Competent in using frameworks like React.js and Next.js for developing web applications, with MySQL and ExpressJS for seamless backend integration."
    // '1 year 6 months of hands-on experience building admin panels, quizzes, and business websites using React ecosystem and REST APIs.',
  },
  experience: [
    {
      role: 'Junior Full Stack Web Developer',
      company: 'Crisfood Online LLP',
      period: 'Nov 2024 - Present',
      location: 'Bhiwandi, Maharashtra',
      highlights: [
        'Improved admin panel performance by ~30%.',
        'Built scalable API-integrated modules for real business flows.',
      ],
    },
    {
      role: 'Front-End Web Developer Intern',
      company: 'Crisfood Online LLP',
      period: 'May 2024 - Oct 2024',
      location: 'Bhiwandi, Maharashtra',
      highlights: [
        'Developed responsive interfaces with reusable components.',
        'Worked in deadline-driven delivery cycles with QA reviews.',
      ],
    },
  ],
  projects: [
    {
      title: 'Crisfood Admin Panel',
      stack: 'ReactJS • REST APIs • Dashboard',
      description:
        'Developed a scalable food delivery admin panel with role-based workflows and real-time data handling.',

      caseStudy: {
        overview:
          'Built a complete admin dashboard to manage food delivery operations including orders, users, and analytics. Focused on performance, scalability, and real-time updates.',

        features: [
          'Role-based access control for admin and staff',
          'Real-time order tracking and updates',
          'Dashboard analytics for business insights',
          'API integration for seamless data flow',
        ],

        impact:
          'Improved overall system performance by 30% and streamlined daily operations for the business.',
      },

      links: [],
    },
    {
      title: 'Meena Bazaar Quiz App & Admin',
      stack: 'ReactJS • API Integration • Authentication',
      description:
        'Built a full-featured quiz platform with admin panel and real-time leaderboard.',

      caseStudy: {
        overview:
          'Developed a quiz application with both admin panel and user-facing interface, focusing on user engagement and real-time performance.',

        features: [
          'Quiz and question management system',
          'Timed quizzes with auto submission',
          'Real-time leaderboard and scoring',
          'Secure authentication and user handling',
        ],

        impact:
          'Enhanced user engagement and provided a smooth, interactive quiz experience with real-time results.',
      },

      links: [],
    },
    {
      title: 'SMBD Mount City',
      stack: 'React + Vite • SEO Optimization',
      description:
        'Developed and optimized a business website with improved UI/UX and strong SEO practices including meta tags, semantic HTML, and performance enhancements.',
      links: [
        { label: 'Live Site', href: 'https://smbdmountcity.com' },
      ],
    },
    {
      title: 'E-Commerce Web App',
      stack: 'React + Vite • Firebase',
      description:
        'Built a functional e-commerce application with clean UI, structured layout, and smooth user experience using modern frontend technologies.',
      links: [
        { label: 'GitHub', href: 'https://github.com/Ansari-Yasir-2004/E-Commerce' },
      ],
    },
    {
      title: 'Ajmeria Property Website',
      stack: 'ReactJS • Business Website',
      description:
        'Developed a professional real estate and warehouse consultancy website with modern UI and responsive design.',
      links: [
        { label: 'Live Site', href: 'https://ajmeria.com' },
      ],
    },
    {
      title: 'Construction Company Website',
      stack: 'React + Vite • Responsive Design',
      description:
        'Designed and developed a fully responsive construction company website template with clean layout and reusable components.',
      links: [
        { label: 'GitHub', href: 'https://github.com/Ansari-Yasir-2004/my-web' },
      ],
    },
  ],
  // projects: [
  //   {
  //     title: 'Crisfood Admin Panel',
  //     stack: 'ReactJS • REST APIs',
  //     description: 'Operations dashboard with role-based workflows and reporting.',
  //     links: [{ label: 'Case Study', href: '#projects' }],
  //   },
  //   {
  //     title: 'Meena Bazaar Quiz App & Admin',
  //     stack: 'ReactJS • API Integration',
  //     description: 'Quiz flow, admin controls, and leaderboard experience.',
  //     links: [{ label: 'Live Site', href: '#projects' }],
  //   },
  //   {
  //     title: 'SMBD Mount City',
  //     stack: 'React + Vite • SEO',
  //     description: 'Business website with better structure and SEO quality.',
  //     links: [{ label: 'GitHub', href: 'https://github.com/Ansari-Yasir-2004' }],
  //   },
  // ],
  skills: {
    stackSlider: [
      'React.js', 'Next.js', 'JavaScript', 'Express.js', 'Node.js', 'MySQL',
      'Bootstrap', 'Tailwind CSS', 'Redux', 'GitHub', 'Postman'
    ],
    groups: [
      { title: 'Frontend', items: ['React.js', 'Next.js', 'JavaScript', 'Bootstrap', 'Tailwind CSS'] },
      { title: 'Backend', items: ['Express.js', 'Node.js', 'REST APIs', 'MySQL'] },
      { title: 'Tools', items: ['GitHub', 'Postman', 'VS Code', 'Chrome DevTools'] },
    ],
  },
  contact: {
    email: 'yasiransari8904@gmail.com',
    phone: '+91 87797 42525',
    github: 'https://github.com/Ansari-Yasir-2004',
  },
};
