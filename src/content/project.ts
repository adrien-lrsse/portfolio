// project.ts

export interface Project {
    id: number;
    title: string;
    subtitle?: string;
    date?: string;
    description: string;
    imageUrl?: string; // URL de l'image pour la carte
    link?: string; // Lien pour en savoir plus sur le projet
    story?: string;
    badges?: string[]; // Badges pour le projet
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "CanAda Compiler",
      subtitle: "Projet de compilation",
      date: "Octobre 2023 - Mai 2024",
      description: "Ecriture d'un compilateur Ada en équipe de 4. Ecriture complète de la grammaire, de l'analyse lexicale, syntaxique et sémantique à la traduction en code assembleur ARM 32bist.",
    //   imageUrl: "https://laconsole.dev/images/articles/differences-langage-compile-interprete/schema-compilateur.png",
      link: "https://github.com/adrien-lrsse/canAda-compiler",
      story: "/project/compiler",
      badges: ["Java", "Teamwork"]
      
    },
    {
      id: 2,
      title: "Route planner for electric cars",
      date: "Mars 2023 - Juin 2023",
      description: "Panification d'itinéraire pour voitures électriques. Projet en équipé dont le but est de prévoir un trajet optimisé qui prend en compte la charge de la batterie et les points de recharge. Simuluation de la congestion du réseau de recharge.",
    //   imageUrl: "https://github.com/adrien-lrsse/route-planner-for-electric-cars/raw/master/app/data/readme/output_3.png",
      link: "https://github.com/adrien-lrsse/route-planner-for-electric-cars",
      story: "/project/route-planner",
      badges: ["C", "Python & Flask", "HTML / CSS / JavaScript", "Algorithmique", "Teamwork"]
    },
    {
      id: 3,
      title: "English Invader",
      date: "Janvier 2024 - Mars 2024",
      description: "Jeu vidéo pour apprendre l'anglais basé sur le principe du jeu Space Invader. Projet en équipe de 2. Les technologies pour ce projet étant libre, je m'en suis servi pour apprendre React et Node.js en autodidacte.",
      link: "https://github.com/adrien-lrsse/english-invader",
      badges: ["Frontend/Backend", "React", "Node.js", "Teamwork"]
    },
    {
      id: 4,
      title: "Direct Dealing",
      date: "Janvier 2024",
      description: "Logiciel de vente de bien et de service entre particuliers. Ce projet a été réalisé en équipe de 4 dans le cadre d'un challenge scolaire sur une semaine.",
      link: "https://github.com/TheoHorn/codingweek",
      badges: ["JavaFX", "Architecture MVC","Teamwork"]
    },
    {
      id: 6,
      title: "Advent of Code 2023",
      date: "Décembre 2023",
      description: "Participation à l'Advent of Code 2023. L'advent of Code est un challenge de résolution de problèmes algorithmiques chaque jour du mois de décembre.J'ai utilisé ce challenge pour apprendre le langage Go.",
      link: "https://github.com/adrien-lrsse/advent-of-code-2023",
      badges: ["Algorithmique", "Golang"]
    },
    {
      id: 7,
      title: "Portfolio",
      date: "Janvier 2025",
      description: "Site web de présentation de mes projets. Projet personnel. Développement en React.",
      link: "https://github.com/adrien-lrsse/portfolio",
      badges: ["React / Vvite", "HTML / CSS", "Typescrypt", "Frontend"]
    },
    {
      id: 8,
      title: "Shared Garden",
      date: "Octobre 2022 - Janvier 2023",
      description: "Site web de partage de jardin entre particuliers. Projet en équipe de 3. Développement en Python avec le framework Flask.",
      link: "https://github.com/adrien-lrsse/shared-garden",
      badges: ["Python & Flask", "HTML / CSS", "Javascript", "Teamwork"] 
    },

  ];
  