import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import VerticalTimelineElementLayout from './../VerticalTimelineElementLayout';
import { Container, Image } from 'react-bootstrap';

function TimelineEN() {
  return (
    <VerticalTimeline>
      {/* Master's Degree in Software Engineering */}
      <VerticalTimelineElementLayout 
        title="Master's Degree in Software Engineering" 
        date="2024 - present" 
        icon={<FaGraduationCap />} 
        subtitle="Université de Sherbrooke, Quebec" 
        content="Dual degree with Télécom Nancy. Advanced studies in software engineering, development, and project management." 
        detail={
          <>
            <Container className="py-3">
              <Image 
                src="https://media1.ledevoir.com/image/759705.jpg?ts=1664611289" 
                alt="Université de Sherbrooke" 
                style={{ width: '100%', marginBottom: '15px' }} 
              />
            </Container>
            <h6>Fall 2024:</h6>
            <ul> 
              <li>Formal Methods in Software Engineering</li>
              <li>Internet Applications and Mobility</li>
              <li>Data Science</li>
              <li>Distributed and Multi-Agent Systems</li>
            </ul>
            <h6>Winter 2025:</h6>
            <ul>
              <li>Project Management</li>
              <li>Development Techniques and Tools</li>
              <li>Object-Oriented Approaches</li>
              <li>Advanced Topics in Databases</li>
            </ul>
          </>
        }
      />

      {/* Mobile Developer Internship */}
      <VerticalTimelineElementLayout 
        badges={["Mono-Repository", "Android", "Flutter / Dart", "React Native"]}
        title="Cross-Platform Mobile App Developer - Intern"
        date="Summer 2023" 
        icon={<MdWork />} 
        subtitle="ActualBuro, Dax, France" 
        content="Developed proof-of-concept apps using React Native and Flutter for a comparative study to explore new business opportunities." 
        detail={
          <>
            <Container className="py-3">
              <Image 
                src="https://www.francebleu.fr/s3/cruiser-production/2020/12/0f22fae5-fe43-4945-ae5e-2095a849e6e7/600_actuelburo_2.jpg" 
                alt="ActualBuro" 
                style={{ width: '100%', marginBottom: '15px' }} 
              />
            </Container>
            <h6>Tasks Performed:</h6>
            <ul>
              <li>Conducted a state-of-the-art review on mobile app development</li>
              <li>Developed proof-of-concept apps using React Native and Flutter</li>
              <li>Compared the proof-of-concept apps</li>
              <li>Set up a mono-repository and integrated it with Flutter</li>
            </ul>
            <h6>Learnings:</h6>
            <ul>
              <li>Frameworks: React Native and Flutter</li>
              <li>Mono-Repository Architecture</li>
            </ul>
          </>
        }
      />

      {/* Computer Engineering Degree */}
      <VerticalTimelineElementLayout 
        title="Computer Engineering Degree" 
        date="2022 - present" 
        icon={<FaGraduationCap />} 
        subtitle="Télécom Nancy, France" 
        content="Advanced studies in Internet Security and Networks. Explored various fields of computer science: software development, AI, image processing..." 
        detail={
          <>
            <Container className="py-3">
              <Image 
                src="https://telecomnancy.univ-lorraine.fr/wp-content/uploads/2023/09/IMG_4695-edited-scaled.jpeg" 
                alt="Télécom Nancy" 
                style={{ width: '100%', marginBottom: '15px' }} 
              />
            </Container>
            <h6>Key Courses:</h6>
            <ul>
              <li>Compiler Course</li>
              <li>CS54: Algorithms, Web Programming & Databases</li>
              <li>Data Structures and C Programming</li>
              <li>Object-Oriented Programming</li>
              <li>Design Methods and Tools</li>
            </ul>
          </>
        }
      />

      {/* TOEIC Certification */}
      <VerticalTimelineElementLayout 
        title="TOEIC Certification" 
        date="January 2023" 
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
            <h6>What is TOEIC?</h6>
            <p style={{ fontWeight: "300" }}>
              TOEIC (Test of English for International Communication) measures English proficiency in professional contexts.
            </p>
            <h6>Score Explanation:</h6>
            <ul>
              <li>Level B2 in Europe</li>
              <li>Equivalent to 4.5/5</li>
            </ul>
          </>
        }
      />

      {/* Preparatory Class */}
      <VerticalTimelineElementLayout
        title="Preparatory Class for Engineering Schools - Maths/Physics Track"
        date="September 2020 - June 2022"
        icon={<FaGraduationCap />}
        subtitle="Lycée Michel de Montaigne, Bordeaux, France"
        content="Prepared for national exams to join a computer engineering school."
      />
    </VerticalTimeline>
  );
}

export default TimelineEN;
