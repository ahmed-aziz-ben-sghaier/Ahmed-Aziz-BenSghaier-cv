import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      myName: "I'm Koussay Akchi.",
      heroDescription1: "I'm a passionate ",
      myJobTitle: 'Full Stack Software Engineer',
      heroDescription2:
        " with a strong interest in the concepts of automation and open-source technologies. I'm currently working part-time as a web developer and finishing my studies.",
      heroDescription3:
        'In my free time, you can find me taking on personal projects and collaborating with others in the tech community.',
      resume: 'CV (English)',
      contact: 'Contact',
      aboutDescription:
        "I started programming when I was 14. I didn't take it too seriously and was just playing around with Discord bot programming with JavaScript . It was a rogue start, though I managed to continue doing so! I started to take it more seriously from there on and learned many languages and concepts through high school and university. It was a fun journey. I've discovered a lot of knowledge which I probably would never get to learn if I didn't have the motivation to do so.",
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
      ftlAutosaveManager: 'FTL AutoSave Manager',
      ftlAutosaveManagerDescription:
        'Autosave and back-up Manager for FTL (Faster than light), helped me learn various things like creating a GUI, proper backup management for files and distributing software releases. Written entirely in Java (and an older obsolete version in python).',
      carTrackingOCR: 'AI Car tracking and licence plate OCR',
      carTrackingOCRDescription:
        'Written in Python : Input Video → split frames to images → Detect cars using YOLO model → Draw rectangles around coordinates in image result → Track and ID cars using SSIM → If >30 frames since last calculation for that car, use contour math to try and find a visible licence plate → if found, extract and run OCR → if succesful, write the result on the result image → compile all result frames into output video.',
      educationEsprit: 'Software engineer',
      educationEspritDetail: '🕒 Currently studying to get my software engineering degree. 🕒',
      educationISTICDetail:
        'Comprehensive program that covers software development, design, algorithms and data structures.',
      experienceLocation1: 'Tech Company',
      experienceTitle1: 'Software Engineer Intern',
      experienceContent1:
        'Worked on various projects involving React and Quarkus Java. Technologies used include Docker, JWT, Postgres, and MongoDB.',
      experienceLocation2: 'Another Company',
      experienceTitle2: 'Junior Developer',
      experienceContent2:
        'Contributed to various web development projects and gained experience in full-stack development.',
      testimonialName1: 'John Doe',
      testimonialText1:
        'Koussay is a highly skilled developer with a strong work ethic. His contributions to our projects were invaluable.',
      testimonialName2: 'Jane Smith',
      testimonialText2:
        'Working with Koussay was a pleasure. His technical expertise and problem-solving skills are top-notch.',
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
    },
  },
  fr: {
    translation: {
      myName: 'Je suis Koussay Akchi.',
      heroDescription1: 'Je suis un ',
      myJobTitle: 'Développeur Full Stack',
      heroDescription2:
        " passionné avec un fort intérêt pour les concepts d'automatisation et les technologies open-source. Je travaille actuellement à temps partiel en tant que développeur web et je continue études.",
      heroDescription3:
        'Pendant mon temps libre,  je travaille sur des projets personnels et je collabore avec la communauté technologique.',
      resume: 'CV (Francais)',
      contact: 'Contact',
      aboutDescription:
        "J'ai commencé à programmer à 14 ans. Je ne le prenais pas trop au sérieux et je m'amusais simplement à programmer des robots Discord avec JavaScript . C'était un début difficile, mais j'ai réussi à continuer ! J'ai commencé à le prendre plus au sérieux à partir de là et j'ai appris de nombreux langages et concepts au lycée et à l'université. Ce fut un voyage amusant. J'ai découvert beaucoup de connaissances que je n'aurais probablement jamais pu apprendre si je n'avais pas eu la motivation pour le faire.",
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
      ftlAutosaveManager: 'Gestionnaire de sauvegardes personnalisable pour jeux vidéo',
      ftlAutosaveManagerDescription:
        "Gestionnaire de sauvegarde et de back-up automatique pour FTL (Faster than light), m'a aidé à apprendre diverses choses comme la création d'une interface graphique, la gestion appropriée des back-ups de fichiers et la distribution des versions de mes logiciels. Entièrement écrit en Java (et une ancienne version obsolète en Python).",
      carTrackingOCR: "Suivi de voiture par IA et OCR de plaque d'immatriculation",
      carTrackingOCRDescription:
        "Écrit en Python : vidéo input → diviser les trames en images → détecter les voitures à l'aide du modèle YOLO → tracer des rectangles autour des coordonnées dans l'image sortie → suivre et identifier les voitures à l'aide de SSIM → si >30 images depuis le dernier calcul pour cette voiture, utiliser des calculs de contour pour essayer de trouver une plaque d'immatriculation visible → si trouvée, extraire et exécuter l'OCR → si réussi, écrire le résultat sur l'image sortie→ compiler toutes les trames de résultat dans la vidéo de sortie.",
      educationEsprit: 'Ingenierie',
      educationEspritDetail: '🕒 En cours d’études pour mon diplôme en ingénierie logicielle. 🕒',
      educationISTICDetail:
        'Programme complet qui couvre le développement de logiciels, la conception, les algorithmes et les structures de données.',
      experienceLocation1: 'Entreprise Tech',
      experienceTitle1: 'Stagiaire Développeur',
      experienceContent1:
        'Travail sur divers projets impliquant React et Quarkus Java. Technologies utilisées : Docker, JWT, Postgres et MongoDB.',
      experienceLocation2: 'Autre Entreprise',
      experienceTitle2: 'Développeur Junior',
      experienceContent2:
        'Contribution à divers projets de développement web et expérience acquise en développement full-stack.',
      testimonialName1: 'John Doe',
      testimonialText1:
        'Koussay est un développeur hautement qualifié avec une forte éthique de travail. Ses contributions à nos projets ont été inestimables.',
      testimonialName2: 'Jane Smith',
      testimonialText2:
        'Travailler avec Koussay a été un plaisir. Son expertise technique et ses compétences en résolution de problèmes sont exceptionnelles.',
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
      skills: 'competences',
      checkOut: 'Voici quelques exemples de mes projets',
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
