import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LeetCodeIcon from '../components/Icon/LeetCodeIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import profilepic2 from '../images/wecraft.png';
import cars from './../../public/assets/cars.jpg';
import FTL from './../../public/assets/FTL.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

const birthDate = new Date('2003-01-11');

const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Koussay Akchi',
  description: 'Home page',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Koussay Akchi.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a passionate <strong className="text-stone-100">Full Stack Software Engineer</strong> with a strong interest
        in the concepts of automation and open-source technologies. I'm currently working part-time as a web developper
        and finishing my studies.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can find me taking on personal projects and collaborating with others in the tech
        community .
      </p>
    </>
  ),
  actions: [
    {
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  profileImageSrc2: profilepic2,
  description: `I started programming when I was 14. I didn't take it too seriously and was just playing around with Discord bot programming with JavaScript. 
  It was a rogue start, though I managed to continue doing so! I started to take it more seriously from there on and learned many languages and concepts through high school and university.
   It was a fun journey. I've discovered a lot of knowledge which I probably would never get to learn if I didn't have the motivation to do so.`,
  aboutItems: [
    {label: 'Location', text: 'Tunis, Tunisia', Icon: MapIcon},
    {label: 'Age', text: `${calculateAge(birthDate)}`, Icon: CalendarIcon},
    {label: 'Nationality', text: 'Tunisian', Icon: FlagIcon},
    {label: 'Interests', text: 'Automation, DevOps, Web Development', Icon: SparklesIcon},
    {label: 'Study', text: 'ISTIC Borj Cedria → ESPRIT', Icon: AcademicCapIcon},
    {
      label: 'Employment',
      text: (
        <a href="https://wecraft.tn" rel="noopener noreferrer" target="_blank">
          Wecraft.tn
        </a>
      ),
      Icon: OfficeBuildingIcon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
        image: '/assets/english.png',
      },
      {
        name: 'French',
        level: 8,
        image: '/assets/french.png',
      },
      {
        name: 'Arabic',
        level: 9,
        image: '/assets/arabic.png',
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8.5,
        image: '/assets/react-logo.png',
      },
      {
        name: 'Angular',
        level: 7,
        image: '/assets/angular-logo.png',
      },
      {
        name: 'TypeScript',
        level: 7,
        image: '/assets/typescript-logo.png',
        image2: '/assets/JavaScript-logo.png',
      },
      {
        name: 'Flutter/Dart',
        level: 6,
        image: '/assets/flutter-logo.png',
        image2: '/assets/dart-logo.png',
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java',
        level: 9,
        image: '/assets/java-logo.png',
      },
      {
        name: 'Node.js',
        level: 6,
        image: '/assets/node-logo.png',
      },
      {
        name: 'Python',
        level: 7.5,
        image: '/assets/python-logo.png',
      },
      {
        name: 'C',
        level: 4,
        image: '/assets/c-logo.png',
      },
    ],
  },
  {
    name: 'Other Tools',
    skills: [
      {
        name: 'Docker',
        level: 7,
        image: '/assets/docker-logo.png',
      },
      {
        name: 'MediaWiki',
        level: 9,
        image: '/assets/mediawiki-logo.png',
      },
      {
        name: 'Figma',
        level: 5,
        image: '/assets/figma-logo.png',
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'FTL Autosave Manager',
    description:
      'Autosave and back-up Manager for FTL (Faster than light), helped me learn various things like creating a GUI, proper backup management for files and distributing software releases. Written entirely in Java (and an older obsolete version in python).',
    url: 'https://github.com/Koussay-Akchi/FTLAutosaveManager',
    image: FTL,
  },
  {
    title: 'Car tracking and licence plate OCR',
    description:
      'Written in Python : Input Video → split frames to images → Detect cars using YOLO model → Draw rectangles around coordinates in image result → Track and ID cars using SSIM → If >30 frames since last calculation for that car, use contour math to try and find a visible licence plate → if found, extract and run OCR → if succesful, write the result on the result image → compile all result frames into output video.',
    url: 'https://github.com/Koussay-Akchi/safe-driving',
    image: cars,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2024 - 2027',
    location: 'ESPRIT',
    title: 'Software engineer',
    content: <p>🕒 Currently studying to get my software engineering degree. 🕒</p>,
  },
  {
    date: '2021 - 2024',
    location: 'ISTIC Borj Cedria',
    title: 'Licence CS GLSI',
    content: <p>Comprehensive program that covers software development, design, and data management.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2024 - Present',
    location: 'Wecraft',
    title: 'Full-Stack Web Developer',
    content: (
      <p>
        <p>Developing and maintaining a comprehensive CRM for pharmaceutical laboratories 💊.</p>
        <p>
          My role includes implementing front-end interfaces, developing back-end functionalities, and designing
          thorough tests for both.
        </p>
        <p className="my-2 border-t border-gray-300"></p>
        <p>
          Technologies used:
          {[
            {name: 'React', imgSrc: '/assets/react-logo.png'},
            {name: 'Quarkus Java', imgSrc: '/assets/quarkus-logo.png'},
            {name: 'Docker', imgSrc: '/assets/docker-logo.png'},
            {name: 'JWT', imgSrc: '/assets/jwt-logo.png'},
            {name: 'Postgres', imgSrc: '/assets/postgres-logo.png'},
            {name: 'MongoDB', imgSrc: '/assets/mongo-logo.png'},
          ].map((tech, index, array) => (
            <span className="inline-flex items-center gap-1" key={index}>
              &nbsp;{tech.name}
              <img
                alt={tech.name}
                className="my-0 inline-block rounded-md py-0 align-middle"
                src={tech.imgSrc}
                style={{margin: 0, padding: 0}}
                width={20}
              />
              {index < array.length - 1 && ' -'}
            </span>
          ))}
        </p>
      </p>
    ),
  },
  {
    date: 'January 2024 - June 2024',
    location: 'Wecraft',
    title: 'End of Studies Internship',
    content: (
      <p>
        During my internship, I gained hands-on experience in developing and maintaining web applications, contributing
        to both front-end and back-end tasks. I worked on various projects including the CRM for pharmaceutical
        laboratories, where I honed my skills in the technologies mentioned above.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Youssef Mseddi',
      text: 'Koussay is an exceptional team player with a keen eye for detail. Their contributions during our hackathons were instrumental in our success. Their technical skills are top-tier, and they have a knack for innovative problem-solving."',
      image: '/assets/ymseddi.jpg',
    },
    {
      name: 'Aziz Ben Sghaeir',
      text: 'I have known Koussay for years, and he is a reliable and skilled developer. He consistently produces high-quality work and handles complex tasks with ease. Its always great to work with him.',
      image: '/assets/bal3awi.jpg',
    },
    {
      name: 'Oussama Ajmi',
      text: 'I’ve had Koussay help me with various projects with both creativity and precision. He is not just skilled but also great at explaining technical details.',
      image: '/assets/ajmi.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'If you have an idea or just want to chat, feel free to to contact me.',
  items: [
    {
      type: ContactType.Email,
      text: 'akchikoussay@gmail.com',
      href: 'mailto:akchikoussay@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Tunis, Tunisia',
      href: 'https://www.google.com/maps/place/Mutuelleville,+Tunis/data=!4m2!3m1!1s0x12fd336257d86031:0xf28a28bc2a04834e?sa=X&ved=1t:242&ictx=111',
    },
    {
      type: ContactType.Github,
      text: 'Koussay-Akchi',
      href: 'https://github.com/Koussay-Akchi',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Koussay-Akchi'},
  {label: 'LeetCode', Icon: LeetCodeIcon, href: 'https://leetcode.com/u/ogNF1G5yTA/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/koussay-akchi-782765274/'},
];
