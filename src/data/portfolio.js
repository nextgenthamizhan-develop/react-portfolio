// All content copied exactly from Thanujan's existing portfolio page.
// Edit this one file to change text across the whole site.

export const profile = {
  name: 'Sooriyapalan Thanujan',
  brandName: 'Thanujan',
  brandSub: 'NextGen Thamizhan',
  role: 'Mechatronics Engineer, Software Developer & Innovator in Sri Lanka',
  intro:
    'I design and build smart solutions using software, robotics, automation, and embedded systems. Passionate about creating innovative technologies that solve real-world problems.',
  email: 'Sooriyapalanthanujan1@gmail.com',
  phoneDisplay: '+94 76 269 5281',
  phoneHref: 'tel:+94762695281',
  whatsappNumber: '94762695281',
  location: 'Kilinochchi, Sri Lanka',
  locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kilinochchi,+Sri+Lanka',
  linkedInUrl: 'https://www.linkedin.com/in/thanujan-sooriyapalan-64b9253b6',
  linkedInLabel: 'thanujan-sooriyapalan',
  footerText: '© 2024 Thanujan-NextgenLab. All rights reserved.',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { value: '5+', label: 'Years of Experience' },
  { value: '10+', label: 'Projects Completed' },
  { value: '10+', label: 'Happy Clients' },
]

export const aboutParagraphs = [
  'I am Sooriyapalan Thanujan, a passionate Mechatronics and Software Engineering professional with experience in automation, embedded systems, robotics, web development & software development. I enjoy building smart solutions that combine software and engineering to solve real-world problems.',
  'To obtain a challenging position in the fields of software engineering, mechatronics, or automation where I can apply my technical knowledge, problem-solving abilities, and innovative thinking to contribute to organizational success while continuously improving my skills.',
]

// icon: key of the inline SVG used in About.jsx
export const highlights = [
  {
    icon: 'pin',
    title: 'Based in Kilinochchi, Sri Lanka',
    sub: 'Working on software & engineering projects',
  },
  {
    icon: 'cap',
    title: 'Bachelor of Software Engineering',
    sub: 'The Open University of Sri Lanka — Final Year, expected 2026',
  },
  {
    icon: 'award',
    title: 'HND — Mechatronics Engineering Technology',
    sub: 'University College of Jaffna, 2017 – 2021',
  },
  {
    icon: 'lang',
    title: 'Languages',
    sub: 'Tamil (Native) · English (Proficient) · Sinhala (Basic)',
  },
  {
    icon: 'heart',
    title: 'Open to New Projects',
    sub: 'Currently available to take on new work',
  },
]

export const techTiles = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'React',
  'Node.js',
  'MySQL',
  'Git',
]

// icon: key of the inline SVG used in Skills.jsx
export const expertise = [
  {
    icon: 'code',
    title: 'Software Development',
    text: 'Building useful desktop and software applications.',
  },
  {
    icon: 'globe',
    title: 'Web Development',
    text: 'Building, programming and maintaining websites and web applications.',
  },
  {
    icon: 'robot',
    title: 'Robotics & Automation',
    text: 'Robotic systems for automation tasks that reduce manual work.',
  },
  {
    icon: 'chip',
    title: 'Embedded Systems',
    text: 'Designing smart systems with microcontrollers.',
  },
  {
    icon: 'bolt',
    title: 'Electronics',
    text: 'Circuits, sensors and hardware behind smart devices.',
  },
  {
    icon: 'bulb',
    title: 'Innovation',
    text: 'Turning new ideas into working, real-world solutions.',
  },
]

export const projectsIntro = 'My latest work — automation and IoT builds, plus web applications.'

export const projects = [
  {
    image: '/assets/project-face-mask.png',
    alt: 'Face mask detection and automatic gate control prototype with Arduino, camera and LCD display',
    category: 'Automation Project',
    title: 'Face Mask Detection & Automatic Gate Control',
    text: 'A public place safety automation project — the system detects a face mask and opens the gate automatically, showing "Mask Detected, Opening Gate" on the display.',
    tags: ['Embedded Systems', 'Automation', 'IoT'],
  },
  {
    image: '/assets/project-auto-parking.png',
    alt: 'Auto car parking dashboard showing live parking slots, sensors and servo gate automation',
    category: 'IoT · Embedded · Automation',
    title: 'Auto Car Parking',
    text: 'Smart access control with real-time slot monitoring and servo gate automation — IR & ultrasonic sensors, Arduino processing and an LCD status display.',
    tags: ['Arduino', 'C/C++', 'IoT'],
  },
  {
    image: '/assets/project-smart-irrigation.png',
    alt: 'Smart irrigation system built with Arduino Uno, soil moisture sensor, temperature sensor and water pump',
    category: 'IoT System Development',
    title: 'Smart Irrigation System',
    text: 'An Arduino Uno based system that reads soil moisture and temperature and switches the water pump automatically — the LCD shows soil level, temperature and water status live.',
    tags: ['Arduino Uno', 'Sensors', 'Agri-Tech'],
  },
  {
    image: '/assets/project-cloud-budget.png',
    alt: 'Cloud Budget web app sign-in screen for personal finance and loans',
    category: 'Web Design',
    title: 'Cloud Budget — Personal Finance & Loans',
    text: 'A web application to access your personal budget and loans securely — tracking budget, living costs, editable loans and Sri Lankan credit cards.',
    tags: ['Web App', 'Finance'],
  },
  {
    image: '/assets/project-farm-ledger.png',
    alt: 'Farm Ledger web app sign-in screen for mushroom farm daily accounts',
    category: 'Web Design',
    title: 'Farm Ledger — Mushroom Farm Ledger',
    text: "A web application for a mushroom farm's daily accounts — access your secure daily accounts and cloud storage, with sales and expense records.",
    tags: ['Web App', 'Agri-Tech'],
  },
  {
    image: '/assets/project-ecommerce.png',
    alt: 'Trending Dart e-commerce website homepage with search bar, product categories and a wall-mounted double soap holder feature banner',
    category: 'E-Commerce · Web Design',
    title: 'Trending Dart — E-Commerce Website',
    text: 'An online store for trending smart home utility products — product search, category browsing (Bathroom Essentials, Home Organizers, Smart Utility), wishlist and cart. Its featured collection is a wall-mounted double soap holder with flip lids, ventilated drain trays and no-drill installation.',
    tags: ['E-Commerce', 'Web App', 'Smart Home'],
  },
]

export const experienceIntro = 'Industry experience across manufacturing, automation and ports — from my CV.'

export const experience = [
  {
    company: 'Omega Line Pvt. Ltd.',
    sector: 'MANUFACTURING',
    text: 'Managed and executed preventive and corrective maintenance tasks across production lines; diagnosed mechanical, electrical, and electronic equipment faults, reducing downtime; collaborated with cross-functional engineering teams to implement process improvements; and maintained technical documentation and equipment service logs for compliance.',
  },
  {
    company: 'UVI Auto Mate International Pvt. Ltd.',
    sector: 'AUTOMATION',
    text: 'Designed and developed automation project schematics for industrial clients, integrated IoT-based monitoring components into automation systems, and worked with microcontrollers (Arduino/PLC) to prototype automated solutions.',
  },
  {
    company: 'Sri Lanka Ports Authority',
    sector: 'ELECTRICAL, ELECTRONICS & MECHANICAL DIVISIONS',
    text: 'Supported engineers in electrical and mechanical plant operations and maintenance, and gained hands-on exposure to industrial electrical systems and safety protocols.',
  },
]

export const education = [
  {
    period: 'MAR 2022 – 2026 (EXPECTED)',
    title: 'Bachelor of Software Engineering',
    school: 'The Open University of Sri Lanka',
    text: 'Final year student with focus on software design, algorithms, databases, and web technologies.',
  },
  {
    period: '2017 – 2021',
    title: 'Higher National Diploma — Mechatronics Engineering Technology',
    school: 'University College of Jaffna',
    text: 'Covered embedded systems, robotics, electrical engineering, and automation systems.',
  },
]

export const contactIntro =
  "I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime."
