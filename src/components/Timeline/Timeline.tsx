import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import VerticalTimelineElementLayout from './VerticalTimelineElementLayout';
import { Container, Image } from 'react-bootstrap';

function Timeline() {
  return (
    <VerticalTimeline>
      {/* Maîtrise en génie logiciel */}
      <VerticalTimelineElementLayout 
        title="Maîtrise en génie logiciel" 
        date="2024 - présent" 
        icon={<FaGraduationCap />} 
        subtitle="Université de Sherbrooke, Québec" 
        content="Double diplôme avec Télécom Nancy. Approfondissement en génie logiciel, développement et gestion de projet." 
        detail={
          <>
            <Container className="py-3">
              <Image 
                src="https://media1.ledevoir.com/image/759705.jpg?ts=1664611289" 
                alt="Université de Sherbrooke" 
                style={{ width: '100%', marginBottom: '15px' }} 
              />
            </Container>
            <h6>Automne 2024 :</h6>
            <ul> 
              <li>Méthodes formelles en génie logiciel</li>
              <li>Applications Internet et Mobilité</li>
              <li>Science des données</li>
              <li>Systèmes répartis et multi-agents</li>
            </ul>
            <h6>Hiver 2025 :</h6>
            <ul>
              <li>Gestion de projets</li>
              <li>Techniques et outils de développement</li>
              <li>Approches orientées objets</li>
              <li>Sujets approfondis en bases de données</li>
            </ul>
          </>
        }
      />

      {/* Stage développeur mobile */}
      <VerticalTimelineElementLayout 
        badges={["Mono-Repository", "Android", "Flutter / Dart", "React Native"]}
        title="Développeur d'application mobile multiplateforme - Stagiaire"
        date="Été 2023" 
        icon={<MdWork />} 
        subtitle="ActualBuro, Dax, France" 
        content="Réalisation de preuves de concept avec React Native et Flutter pour une étude comparative afin d'explorer de nouvelles opportunités pour l'entrepise." 
        detail={
          <>
            <Container className="py-3">
              <Image 
                src="https://www.francebleu.fr/s3/cruiser-production/2020/12/0f22fae5-fe43-4945-ae5e-2095a849e6e7/600_actuelburo_2.jpg" 
                alt="ActualBuro" 
                style={{ width: '100%', marginBottom: '15px' }} 
              />
            </Container>
            <h6>Tâches réalisées :</h6>
            <ul>
              <li>Réalisation d'un état de l'art sur le développement d'applications mobiles</li>
              <li>Développement de preuves de concept avec React Native et Flutter</li>
              <li>Comparaison des preuves de concept</li>
              <li>Mise en place d'un mono-repository et intégration avec Flutter</li>
            </ul>
            <h6>Apprentissages :</h6>
            <ul>
              <li>Frameworks : React Native et Flutter</li>
              <li>Architecture Mono-Repository</li>
            </ul>
          </>
        }
      />

      {/* Ingénieur en informatique */}
      <VerticalTimelineElementLayout 
        title="Ingénieur en Informatique" 
        date="2022 - présent" 
        icon={<FaGraduationCap />} 
        subtitle="Télécom Nancy, France" 
        content="Approfondissement en Sécurité et Réseaux Internet. Découverte de nombreux domaines de l'informatique : développement logiciel, IA, traitement d'image..." 
        detail={
          <>
            <Container className="py-3">
              <Image 
                src="https://telecomnancy.univ-lorraine.fr/wp-content/uploads/2023/09/IMG_4695-edited-scaled.jpeg" 
                alt="Télécom Nancy" 
                style={{ width: '100%', marginBottom: '15px' }} 
              />
            </Container>
            <h6>Cours marquants :</h6>
            <ul>
              <li>Traduction : Cours sur la compilation</li>
              <li>CS54 : Algorithmie, Programmation Web & Base de données</li>
              <li>Structures de données et cours de C</li>
              <li>Programmation orientée objet</li>
              <li>Méthodes et outils de conception informatique</li>
            </ul>
          </>
        }
      />

      {/* TOEIC Certification */}
      <VerticalTimelineElementLayout 
        title="Certification TOEIC" 
        date="Janvier 2023" 
        icon={<PiCertificateFill />} 
        subtitle="910/990" 
        content="" 
        detail={
          <>
            <Container className='py-3'>
                <Image src="https://i.namu.wiki/i/KvAxHz6vdadyTJIvyqzdBa0e0DAIou8zlKzQL9PMyX86NgRFnoBNfBXeWBvR5fKd0P_yZ3fh7mFaq_79fdfICVNNOFaJMZBWxvqcujTo49A-hyXTityFDW0YV0P1groCfQVJSUGtvXtWEkq2-sI5rQ.svg" 
              alt="TOEIC" 
              style={{ width: '100%', marginBottom: '15px' }} /> 
            </Container>
            <h6>Qu'est-ce que le TOEIC ?</h6>
            <p style={{ fontWeight: "300" }}>
              Le TOEIC (Test of English for International Communication) mesure les compétences en anglais dans des contextes professionnels.
            </p>
            <h6>Comprendre le score :</h6>
            <ul>
              <li>Niveau B2 en Europe</li>
              <li>Équivalent à 4.5/5</li>
            </ul>
          </>
        }
      />

      {/* Classe préparatoire */}
      <VerticalTimelineElementLayout
        title="Classe préparatoire aux grandes écoles - Filière Maths / Physique"
        date="Septembre 2020 - Juin 2022"
        icon={<FaGraduationCap />}
        subtitle="Lycée Michel de Montaigne, Bordeaux, France"
        content="Préparation aux concours nationaux pour intégrer une école d'ingénieurs en informatique."
      />
    </VerticalTimeline>
  );
}

export default Timeline;
