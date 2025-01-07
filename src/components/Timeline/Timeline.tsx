import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import VerticalTimelineElementLayout from './VerticalTimelineElementLayout';
function Timeline() {
  return (
    <VerticalTimeline>
        <VerticalTimelineElementLayout 
            title="Master's degree in Software Engineering" 
            date="2024 - present" icon={<FaGraduationCap />} 
            subtitle="Université de Sherbrooke, Québec" 
            content="Software design and development, Formal methods, Data science, Blockchain & IoT" 
            detail={<>
                    <img src="https://media1.ledevoir.com/image/759705.jpg?ts=1664611289" alt="Detail" style={{ width: '100%', marginBottom: '15px' }} />
                    <h6>What is Sherbrooke University?</h6>
                    <p style={{fontWeight:"300"}}>
                        L'université de Sherbrooke est une université francophone située à Sherbrooke, au Québec, Canada. Elle offre une large gamme de programmes d'études et est reconnue pour ses recherches innovantes et son engagement envers la communauté.
                    </p>
                    <h6>What did he do in Sherbrooke Université?</h6>
                    <ul>
                        <li>1</li>https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Kb27sN5XPlMqN-_3eae0-klrW5hUtUmk0g&s
                        <li>2</li>
                    </ul>
            </>} />
        <VerticalTimelineElementLayout 
            title='Software Engineering Intern' 
            date='Summer 2023' icon={<MdWork />} 
            subtitle='ActualBuro, Dax, France' 
            content='' 
            detail={<>
                <img src="https://www.francebleu.fr/s3/cruiser-production/2020/12/0f22fae5-fe43-4945-ae5e-2095a849e6e7/600_actuelburo_2.jpg" alt="Detail" style={{ width: '100%', marginBottom: '15px' }} />
                <h6>What is Sherbrooke University?</h6>
                <p style={{fontWeight:"300"}}>
                    L'université de Sherbrooke est une université francophone située à Sherbrooke, au Québec, Canada. Elle offre une large gamme de programmes d'études et est reconnue pour ses recherches innovantes et son engagement envers la communauté.
                </p>
                <h6>What did he do in Sherbrooke Université?</h6>
                <ul style={{fontWeight:"300"}}>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </>} />
        <VerticalTimelineElementLayout 
            title='Ingénieur en Informatique' 
            date='2022 - present' icon={<FaGraduationCap />} 
            subtitle='Télécom Nancy, France' 
            content=''
            detail={<>
                <img src="https://telecomnancy.univ-lorraine.fr/wp-content/uploads/2023/09/IMG_4695-edited-scaled.jpeg" alt="Detail" style={{ width: '100%', marginBottom: '15px' }} />
                <h6>What is Sherbrooke University?</h6>
                <p style={{fontWeight:"300"}}>
                    L'université de Sherbrooke est une université francophone située à Sherbrooke, au Québec, Canada. Elle offre une large gamme de programmes d'études et est reconnue pour ses recherches innovantes et son engagement envers la communauté.
                </p>
                <h6>What did he do in Sherbrooke Université?</h6>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </>} />
        <VerticalTimelineElementLayout 
            title="TOEIC Certification" 
            date="January 2023" 
            icon={<PiCertificateFill />} 
            subtitle="910/990" 
            content=""
            detail={<>
                <img src="https://i.namu.wiki/i/KvAxHz6vdadyTJIvyqzdBa0e0DAIou8zlKzQL9PMyX86NgRFnoBNfBXeWBvR5fKd0P_yZ3fh7mFaq_79fdfICVNNOFaJMZBWxvqcujTo49A-hyXTityFDW0YV0P1groCfQVJSUGtvXtWEkq2-sI5rQ.svg" alt="Detail" style={{ width: '100%', marginBottom: '15px' }} />
                <h6>What is <i>toeic</i> ?</h6>
                <p style={{fontWeight:"300"}}>
                The TOEIC (Test of English for International Communication) measures non-native speakers' English skills in workplace contexts.
                </p>
                <h6>Understand the rating</h6>
                <ul>
                    <li>B2 Level in Europe</li>
                    <li>Equivalent to a 4.5/5</li>
                </ul>
            </>} />
        
  </VerticalTimeline>
  
  );


}

export default Timeline;