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
      'I build fast, production-ready web apps with strong UI quality, clean architecture, and API-driven functionality.',
    ctaPrimary: { label: 'View Projects', href: '#projects' },
    ctaSecondary: { label: 'Contact Me', href: '#contact' },
  },
  about: {
    title: 'About Me',
    description:
      'I have 1.5+ years of practical experience working on admin panels, quiz systems, and business websites. I focus on performance, responsiveness, and maintainable frontend systems.',
  },
  experience: [
    {
      role: 'Junior Full Stack Web Developer',
      company: 'Crisfood Online LLP',
      period: 'Oct 2024 - Present',
      location: 'Bhiwandi, Maharashtra',
      highlights: [
        'Improved admin panel performance by 30% with optimized React architecture.',
        'Built quiz management workflows with API integrations and real-time data handling.',
      ],
    },
    {
      role: 'Front-End Web Developer Intern',
      company: 'Crisfood Online LLP',
      period: 'Apr 2024 - Sep 2024',
      location: 'Bhiwandi, Maharashtra',
      highlights: [
        'Developed responsive UI screens and reusable components in React.',
        'Worked in a delivery-focused environment with strict deadlines and QA review.',
      ],
    },
  ],
  projects: [
    {
      title: 'Crisfood Admin Panel',
      stack: 'ReactJS • REST APIs',
      description: 'Operations dashboard for food delivery management with role-based workflows and analytics modules.',
    },
    {
      title: 'Meena Bazaar Quiz App & Admin',
      stack: 'ReactJS • API Integration',
      description: 'Quiz platform with admin controls, timed quiz flow, and leaderboard experience.',
    },
    {
      title: 'SMBD Mount City',
      stack: 'React + Vite • SEO',
      description: 'Professional website with improved content hierarchy and on-page technical SEO.',
    },
    {
      title: 'E-Commerce Web App',
      stack: 'React + Vite • Firebase',
      description: 'Clean and responsive shopping experience with scalable product listing structure.',
    },
  ],
  skills: {
    stackSlider: [
      'React.js', 'Next.js', 'JavaScript', 'Express.js', 'Node.js', 'MySQL',
      'Firebase', 'Bootstrap', 'Tailwind CSS', 'GitHub', 'Postman', 'Redux'
    ],
    groups: [
      {
        title: 'Frontend',
        items: ['React.js', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'],
      },
      {
        title: 'Backend & Database',
        items: ['Express.js', 'Node.js', 'REST APIs', 'MySQL', 'Firebase'],
      },
      {
        title: 'Tools',
        items: ['GitHub', 'Postman', 'VS Code', 'Chrome DevTools'],
      },
    ],
  },
  contact: {
    email: 'ansariyasirinfo@gmail.com',
    phone: '+91 87797 42525',
    github: 'https://github.com/Ansari-Yasir-2004',
  },
};
