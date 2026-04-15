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
    name: 'Yasir Ansari',
    role: 'Junior Full Stack Web Developer',
    summary:
      'I build fast, production-ready web apps with clean architecture, responsive UI, and API-driven workflows.',
    ctaPrimary: { label: 'View Projects', href: '#projects' },
    ctaSecondary: { label: 'Contact Me', href: '#contact' },
  },
  valueProps: [
    'Performance-focused frontend delivery',
    'Clean and reusable component architecture',
    'Business-first UI implementation',
  ],
  about: {
    title: 'About Me',
    description:
      '1.5+ years of hands-on experience building admin panels, quizzes, and business websites using React ecosystem and REST APIs.',
  },
  experience: [
    {
      role: 'Junior Full Stack Web Developer',
      company: 'Crisfood Online LLP',
      period: 'Oct 2024 - Present',
      location: 'Bhiwandi, Maharashtra',
      highlights: [
        'Improved admin panel performance by ~30%.',
        'Built scalable API-integrated modules for real business flows.',
      ],
    },
    {
      role: 'Front-End Web Developer Intern',
      company: 'Crisfood Online LLP',
      period: 'Apr 2024 - Sep 2024',
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
      stack: 'ReactJS • REST APIs',
      description: 'Operations dashboard with role-based workflows and reporting.',
      links: [{ label: 'Case Study', href: '#projects' }],
    },
    {
      title: 'Meena Bazaar Quiz App & Admin',
      stack: 'ReactJS • API Integration',
      description: 'Quiz flow, admin controls, and leaderboard experience.',
      links: [{ label: 'Live Site', href: '#projects' }],
    },
    {
      title: 'SMBD Mount City',
      stack: 'React + Vite • SEO',
      description: 'Business website with better structure and SEO quality.',
      links: [{ label: 'GitHub', href: 'https://github.com/Ansari-Yasir-2004' }],
    },
  ],
  skills: {
    stackSlider: [
      'React.js', 'Next.js', 'JavaScript', 'Express.js', 'Node.js', 'MySQL',
      'Firebase', 'Bootstrap', 'Tailwind CSS', 'Redux', 'GitHub', 'Postman'
    ],
    groups: [
      { title: 'Frontend', items: ['React.js', 'Next.js', 'JavaScript', 'Bootstrap', 'Tailwind CSS'] },
      { title: 'Backend & DB', items: ['Express.js', 'Node.js', 'REST APIs', 'MySQL', 'Firebase'] },
      { title: 'Tools', items: ['GitHub', 'Postman', 'VS Code', 'Chrome DevTools'] },
    ],
  },
  contact: {
    email: 'ansariyasirinfo@gmail.com',
    phone: '+91 87797 42525',
    github: 'https://github.com/Ansari-Yasir-2004',
  },
};
