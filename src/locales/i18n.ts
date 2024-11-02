import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      myName: "I'm Ahmed Aziz Ben Sghaier.",
      heroDescription1: "I'm a passionate ",
      myJobTitle: 'Full Stack Software Engineer',
      heroDescription2:
        " with a strong interest in the concepts of automation and open-source technologies. I'm currently working part-time as a web developer and finishing my studies.",
      heroDescription3:
        'In my free time, you can find me taking on personal projects and collaborating with others in the tech community.',
      resume2: 'CV ',
      contact: 'Contact',
      aboutDescription:
        "I discovered programming at the age of 19 by developing Discord bots with JavaScript. Although it started as a simple hobby, my passion for coding only grew. This first contact with programming pushed me to explore new languages ​​and technologies, both in high school and university. Over the years, I had the opportunity to work on various projects, ranging from the creation of dynamic websites to robust web applications, mastering frameworks. This adventure allowed me to acquire solid expertise in full stack development, allowing me to design complete solutions, from the front-end to the back-end. Each project has been a new opportunity to learn and improve myself, and I am always looking for new challenges to continue to evolve.",
      locationLabel: 'Location',
      ageLabel: 'Age',
      nationalityLabel: 'Nationality',
      nationality: 'Tunisian',
      interestsLabel: 'Interests',
      studyLabel: 'Education',
      wecraft: 'Wecraft',
      spokenLanguages: 'Spoken Languages',
      frontendDevelopment: 'Frontend Development',
      backendDevelopment: 'Backend Development',
      otherTools: 'Other Tools',
      ftlAutosaveManager: 'Communication Platform',
      ftlAutosaveManagerDescription:
        'Design and development of part of an intuitive and efficient communication platform facilitating exchanges and collaboration between employees and customers.',
      carTrackingOCR: 'AI Car tracking and licence plate OCR',
      carTrackingOCRDescription:
        'Written in Python : Input Video → split frames to images → Detect cars using YOLO model → Draw rectangles around coordinates in image result → Track and ID cars using SSIM → If >30 frames since last calculation for that car, use contour math to try and find a visible licence plate → if found, extract and run OCR → if succesful, write the result on the result image → compile all result frames into output video.',
      educationEsprit: 'Software engineer',
      educationEspritDetail: '🕒 Currently studying to get my software engineering degree. 🕒',
      educationISTICDetail:
        'Comprehensive program that covers software development, design, algorithms and data structures.',
      experienceContent1:
        'As part of my final-year project internship, I designed and developed a communication platform aimed at improving exchanges and collaboration between employees and customers of a company.This platform, in the form of an intuitive and efficient website, allows users to share information, manage projects and interact in real time through tools such as discussion forums, collaborative workspaces and messaging systems.',
      experienceContent2:
        "The final project focuses on the design and development of a web application for managing the employee timekeeping system. This application, both intuitive and efficient, aims to automate and simplify the process of monitoring attendance and working hours. It will allow employees to quickly clock in via a user-friendly interface, while managers will be able to monitor attendance data in real time, generate detailed reports, and monitor discrepancies.",
      github: 'GitHub',
      linkedin: 'LinkedIn',
      leetcode: 'LeetCode',
      contactFormTitle: 'Contact Me',
      contactFormDescription: 'Feel free to reach out to me via the form below.',
      contactEmailLabel: 'Email',
      contactPhoneLabel: 'Phone',
      Tunis: 'Tunis, Tunisia',
      employmentLabel: 'Employment',
      interests: 'Automation, DevOps, Web Development',
      aboutMe: 'About me',
      checkOut: 'Check out some of my work',
      fullStackDev: 'Full-Stack Web Developer',
      pfe: 'End of Studies Internship',
      test1:
        'Aziz is an exceptional team player with a keen eye for detail. Their contributions during our hackathons were instrumental in our success. Their technical skills are top-tier, and they have a knack for innovative problem-solving.',
      test2:
        'I have known Aziz for years, and he is a reliable and skilled developer. He consistently produces high-quality work and handles complex tasks with ease. Its always great to work with him.',
      test3:
        "I've had Aziz help me with various projects. He is not just skilled but also great at explaining technical details.",
      contactDescription: 'If you have an idea or just want to chat, feel free to to contact me.',
      getInTouch: 'Get in touch.',
      minesweeperDescription: 'Design and development of a dynamic and user-friendly e-commerce site to offer users an online shopping experience.',
      soundgridDescription:
        'Design and development of an intuitive and efficient web app facilitating employee timekeeping and control.',
       minesweeperDescription2: 'a mini social network developed in HTML, CSS, and JavaScript without frameworks. It includes a dynamic news feed with reactions, a messaging system with JSON management to simulate conversations, and a friends list with search and drag-and-drop features. Neumorphism style interface.',  
    },
  },
  fr: {
    translation: {
      myName: 'Je suis Ahmed Aziz Ben Sghaier.',
      heroDescription1: 'Je suis un ',
      myJobTitle: 'Développeur Full Stack',
      heroDescription2:
        " passionné avec un fort intérêt pour les concepts d'automatisation et les technologies open-source. Je travaille actuellement à temps partiel en tant que développeur web et je continue études.",
      heroDescription3:
        'Pendant mon temps libre,  je travaille sur des projets personnels et je collabore avec la communauté technologique.',
      resume2: 'CV (Francais)',
      contact: 'Contact',
      aboutDescription:
        "J'ai découvert la programmation à l'âge de 19 ans en développant des bots Discord avec JavaScript. Bien que cela ait commencé comme un simple passe-temps, ma passion pour le code n'a fait que grandir. Ce premier contact avec la programmation m'a poussé à explorer de nouveaux langages et technologies, à la fois au lycée et à l'université. Au fil des années, j'ai eu l'opportunité de travailler sur des projets variés, allant de la création de sites web dynamiques à des applications web robustes, en maîtrisant des frameworks . Cette aventure m'a permis d'acquérir une solide expertise en développement full stack, me permettant de concevoir des solutions complètes, du front-end au back-end. Chaque projet a été une nouvelle occasion d’apprendre et de me perfectionner, et je suis toujours à la recherche de nouveaux défis pour continuer à évoluer.",
      locationLabel: 'Lieu',
      ageLabel: 'Âge',
      nationalityLabel: 'Nationalité',
      nationality: 'Tunisien',
      interestsLabel: 'Intérêts',
      studyLabel: 'Formation',
      employmentLabel: 'Emploi',
      wecraft: 'Wecraft',
      spokenLanguages: 'Langues',
      frontendDevelopment: 'Développement Frontend',
      backendDevelopment: 'Développement Backend',
      otherTools: 'Autres outils',
      ftlAutosaveManager: 'Plateforme de Communication',
      ftlAutosaveManagerDescription:
        " Conception et développement partie d'une plateforme de communication intuitif et performant facilitant les échanges et la collaboration entre les employés et les clients.",
      carTrackingOCR: "Suivi de voiture par IA et OCR de plaque d'immatriculation",
      carTrackingOCRDescription:
        "Écrit en Python : vidéo input → diviser les trames en images → détecter les voitures à l'aide du modèle YOLO → tracer des rectangles autour des coordonnées dans l'image sortie → suivre et identifier les voitures à l'aide de SSIM → si >30 images depuis le dernier calcul pour cette voiture, utiliser des calculs de contour pour essayer de trouver une plaque d'immatriculation visible → si trouvée, extraire et exécuter l'OCR → si réussi, écrire le résultat sur l'image sortie→ compiler toutes les trames de résultat dans la vidéo de sortie.",
      educationEsprit: 'Ingenierie',
      educationEspritDetail: '🕒 En cours d’études pour mon diplôme en ingénierie logicielle. 🕒',
      educationISTICDetail:
        'Programme complet qui couvre le développement de logiciels, la conception, les algorithmes et les structures de données.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      leetcode: 'LeetCode',
      contactFormTitle: 'Contactez-moi',
      contactFormDescription: "N'hésitez pas à me contacter via le formulaire ci-dessous.",
      contactEmailLabel: 'Email',
      contactPhoneLabel: 'Téléphone',
      Tunis: 'Tunis, Tunisie',
      interests: 'Automatisation, DevOps, Développement Web',
      aboutMe: 'Mon Parcours',
      English: 'Anglais',
      French: 'Français',
      Arabic: 'Arabe',
      work: 'Experience',
      checkOut: 'Voici quelques exemples de mes projets',
      fullStackDev: 'Développeur Web Full Stack',
      experienceContent1:
        "Dans le cadre de mon stage de projet de fin d’année, j'ai conçu et développé une plateforme de communication visant à améliorer les échanges et la collaboration entre les employés et les clients d'une entreprise. Cette plateforme, sous la forme d'un site web intuitif et performant, permet aux utilisateurs de partager des informations, de gérer des projets et d'interagir en temps réel à travers des outils tels que des forums de discussion, des espaces de travail collaboratifs et des systèmes de messagerie. ",
      pfe: "Stage de fin d'études",
      experienceContent2:
        "Le projet de fin d'études porte sur la conception et le développement d'une application web de gestion du système de pointage des employés. Cette application, à la fois intuitive et performante, vise à automatiser et simplifier le processus de suivi des présences et des heures de travail. Elle permettra aux employés de pointer rapidement via une interface conviviale, tandis que les responsables pourront contrôler en temps réel les données de présence, générer des rapports détaillés, et surveiller les écarts. ",
      hero: 'Accueil',
      about: 'À propos',
      portfolio: 'Portfolio',
      resume: 'CV',
      skills: 'Compétences',
      stats: 'Statistiques',
      testimonials: 'Témoignages',
      'August 2023 - Septembre 2023': 'Août 2023 - Septembre 2023',
      'January 2024 - June 2024': 'Janvier 2024 - Juin 2024',
      test1:
        "Aziz est un membre d'équipe exceptionnel avec un œil attentif aux détails. Ses contributions lors de nos hackathons ont été déterminantes pour notre succès. Ses compétences techniques sont de haut niveau, et il sait résoudre les problèmes de manière innovante.",
      test2:
        "Je connais Aziz depuis des années, et c'est un développeur fiable et compétent. Il fait toujours un travail de haute qualité et gère les tâches complexes avec facilité. C'est toujours un plaisir de travailler avec lui.",
      test3:
        "J'ai fait appel à Aziz pour divers projets. Il n'est pas seulement compétent, mais il excelle également dans l'explication des détails techniques.",
      contactDescription: "Si vous avez une idée ou souhaitez simplement discuter, n'hésitez pas à me contacter.",
      getInTouch: 'Contactez-moi.',
      'Send Email': 'Envoyer Email',
      minesweeperDescription: ' Conception et développement d’un site e-commerce dynamiqueet convivial pour offrir aux utilisateurs une expérience de paiment en ligne  .',
      soundgridDescription:'une app web intuitif et performante facilitant la pointage et le controle  des employés.',
      minesweeperDescription2: ' un mini-réseau social développé en HTML, CSS, et JavaScript sans frameworks. Il inclut un fil dactualité dynamique avec des réactions, une messagerie avec gestion de JSON pour simuler des conversations, et une liste amis avec fonctionnalités de recherche et drag-and-drop. Interface en style neumorphisme.',

    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
