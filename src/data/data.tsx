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
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
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
      href: '/assets/resume.pdf',
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
  description: `I started programming when I was 14. I didn't take it too seriously and was just playing around with Discord bot programming with JavaScript. 
  It was a rogue start, though I managed to continue doing so! I started to take it more seriously from there on and learned many languages and concepts throught high school and university.
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
      },
      {
        name: 'French',
        level: 8,
      },
      {
        name: 'Arabic',
        level: 9,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Angular',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Flutter/Dart',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'C',
        level: 4,
      },
    ],
  },
  {
    name: 'Productivity Tools',
    skills: [
      {
        name: 'Docker',
        level: 7,
      },
      {
        name: 'MediaWiki',
        level: 9,
      },
      {
        name: 'Figma',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
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
          ].map((tech, index) => (
            <span className="inline-flex items-center gap-1" key={index}>
              &nbsp;{tech.name}
              <img
                alt={tech.name}
                className="my-0 inline-block rounded-md py-0 align-middle"
                src={tech.imgSrc}
                style={{
                  margin: 0,
                  padding: 0,
                }}
                width={20}
              />
              ,
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
        laboratories, where I honed my skills in React, Java, Docker, and databases like Postgres and MongoDB.
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
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
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
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'LeetCode', Icon: LeetCodeIcon, href: 'https://leetcode.com/u/ogNF1G5yTA/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/koussay-akchi-782765274/'},
];
