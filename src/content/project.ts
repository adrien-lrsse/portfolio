// project.ts
import englishInvader from '../assets/english_invader.png';


export interface Project {
    id: number;
    title: string;
    subtitle?: string;
    date?: string;
    description: string;
    imageUrl?: string; // URL de l'image pour la carte
    link?: string; // Lien pour en savoir plus sur le projet
    story?: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "canAda Compiler",
      subtitle: "Projet de compilation",
      date: "2023 - 2024",
      description: "Ecriture d'un compilateur Ada en équipe de 4. Ecriture complète de la grammaire, de l'analyse lexicale, syntaxique et sémantique à la traduction en code assembleur ARM 32bist.",
    //   imageUrl: "https://laconsole.dev/images/articles/differences-langage-compile-interprete/schema-compilateur.png",
      link: "https://github.com/adrien-lrsse/canAda-compiler",
      story: "/project/compiler"
      
    },
    {
      id: 2,
      title: "Route planner for electric cars",
      date: "2023",
      description: "Panification d'itinéraire pour voitures électriques. Projet en équipé dont le but est de prévoir un trajet optimisé qui prend en compte la charge de la batterie et les points de recharge. Simuluation de la congestion du réseau de recharge.",
    //   imageUrl: "https://github.com/adrien-lrsse/route-planner-for-electric-cars/raw/master/app/data/readme/output_3.png",
      link: "https://github.com/adrien-lrsse/route-planner-for-electric-cars",
    },
    {
      id: 3,
      title: "English Invader",
      date: "2024",
      description: "Jeu vidéo pour apprendre l'anglais basé sur le principe du jeu Space Invader. Projet en équipe de 2. Développement en javascript",
    //   imageUrl: englishInvader,
      link: "https://github.com/adrien-lrsse/english-invader",
    },
  ];
  