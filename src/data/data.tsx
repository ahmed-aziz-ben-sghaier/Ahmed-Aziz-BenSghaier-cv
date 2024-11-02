import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import cars from './../../public/assets/cars.jpg';
import FTL from './../../public/assets/Captur (356).png';
import minesweeper from './../../public/assets/Capture (357).png';
import minesweeper2 from './../../public/assets/Capture (358).png';
import soundgrid from './../../public/assets/Capture (267).png';
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

export const homePageMeta: HomepageMeta = {
  title: 'Ben Sghaier',
  description: 'Home page',
};

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

export const heroData: Hero = {
  imageSrc: heroImage,
  name: 'Ben Sghaier',
  actions: [
    {
      text: 'resume2',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'contact',
      primary: false,
    },
  ],
};

export const aboutData: About = {
  profileImageSrc: profilepic,
  aboutItems: [
    {label: 'locationLabel', text: 'Tunis', Icon: MapIcon},
    {label: 'ageLabel', text: `${calculateAge(birthDate)}`, Icon: CalendarIcon},
    {label: 'nationalityLabel', text: 'nationality', Icon: FlagIcon},
    {label: 'interestsLabel', text: 'interests', Icon: SparklesIcon},
    {label: 'studyLabel', text: ' ISTIC Borj Cedria → ESPRIT', Icon: AcademicCapIcon},
  ],
};

export const skills: SkillGroup[] = [
  {
    name: 'spokenLanguages',
    skills: [
      {
        name: 'English',
        level: 6,
        image: '/assets/english.png',
      },
      {
        name: 'French',
        level: 8,
        image: '/assets/french.png',
      },
      {
        name: 'Arabic',
        level: 10,
        image: '/assets/arabic.png',
      },
    ],
  },
  {
    name: 'frontendDevelopment',
    skills: [
      {
        name: 'React',
        level: 8.5,
        image: '/assets/react-logo.png',
      },
      {
        name: 'Angular',
        level: 5,
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
    name: 'backendDevelopment',
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
      {
        name: 'PHP',
        level: 9,
        image: '/assets/c-logo.png',
      },
    ],
  },
  {
    name: 'otherTools',
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

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'ftlAutosaveManager',
    description: 'ftlAutosaveManagerDescription',
    url: 'https://github.com/ahmed-aziz-ben-sghaier/contact-whatsApp',
    image: FTL,
  },
  {
    title: 'carTrackingOCR',
    description: 'carTrackingOCRDescription',
    url: 'https://github.com/ahmed-aziz-ben-sghaier/safe-driving',
    image: cars,
  },
  {
    title: 'App Web ',
    description: 'soundgridDescription',
    url: 'https://github.com/ahmed-aziz-ben-sghaier/appp-pointage',
    image: soundgrid,
  },
  {
    title: 'e-commerce site',
    description: 'minesweeperDescription',
    url: 'https://github.com/ahmed-aziz-ben-sghaier/b-s',
    image: minesweeper,
  },

  {
    title: 'social network',
    description: 'minesweeperDescription',
    url: 'https://github.com/ahmed-aziz-ben-sghaier/mini-r-seau-social',
    image: minesweeper2,
  },
];

export const education: TimelineItem[] = [
  {
    date: '2024 - Present',
    location: 'ESPRIT',
    title: 'educationEsprit',
    education: 'educationEspritDetail',
  },
  {
    date: '2021 - 2024',
    location: 'ISTIC Borj Cedria',
    title: 'Licence RT',
    education: 'educationISTICDetail',
  },
];

export const experience: TimelineItem[] = [
  
  {
    date: 'January 2024 - June 2024',
    location: 'CNAM',
    title: 'pfe',
    experience: 'experienceContent2',
    content: (
      <p>
        Technologies :
        {[
          {name: 'React', imgSrc: '/assets/react-logo.png'},
          {name: 'Laravel', imgSrc: '/assets/téléchargement.png'},
          {name: 'Docker', imgSrc: '/assets/docker-logo.png'},
          {name: 'PWA', imgSrc: '/assets/pwa.png'},
          {name: 'Postman', imgSrc: '/assets/Postman_(software) 1.png'},
          {name: 'Mysql', imgSrc: '/assets/raw.png'},
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
    ),
  },
  {
    date: 'August 2023 - Septembre 2023',
    location: 'Comunik CRM',
    title: 'fullStackDev',
    experience: 'experienceContent1',
    content: (
      <p>
        Technologies :
        {[
          {name: 'React', imgSrc: '/assets/react-logo.png'},
          {name: 'Laravel', imgSrc: '/assets/téléchargement.png'},
          {name: 'Docker', imgSrc: '/assets/docker-logo.png'},
          {name: 'Postman', imgSrc: '/assets/Postman_(software) 1.png'},
          {name: 'MySQL', imgSrc: '/assets/raw.png'},
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
    ),
  },
];

export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Youssef Mseddi',
      text: 'test1',
      image: '/assets/ymseddi.jpg',
    },
    {
      name: 'Koussay Akchi',
      text: 'test2',
      image: '/assets/profilepic1.jpg',
    },
    {
      name: 'Iyed Mansouri',
      text: 'test3',
      image: '/assets/iyed.jpg',
    },
  ],
};

export const contact: ContactSection = {
  headerText: 'getInTouch',
  description: 'contactDescription',
  items: [
    {
      type: ContactType.Email,
      text: 'ahmedazizbensghaier@gmail.com',
      href: 'mailto:ahmedazizbensghaier@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Tunis',
      href: 'https://www.google.com/maps/place/Mutuelleville,+Tunis/data=!4m2!3m1!1s0x12fd336257d86031:0xf28a28bc2a04834e?sa=X&ved=1t:242&ictx=111',
    },
    {
      type: ContactType.Github,
      text: 'ahmed-aziz-ben-sghaier',
      href: 'https://github.com/ahmed-aziz-ben-sghaier',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ahmed-aziz-ben-sghaier'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ahmed-aziz-ben-sghaier-802681230/'},
];
