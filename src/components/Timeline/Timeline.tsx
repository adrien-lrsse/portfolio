import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import VerticalTimelineElementLayout from './VerticalTimelineElementLayout';
import { Container, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Timeline() {

  const { t } = useTranslation('timeline');

  return (
    <VerticalTimeline>
      {/* Maîtrise en génie logiciel */}
      <VerticalTimelineElementLayout 
        title={t("udes.title")}
        date={t("udes.date")}
        icon={<FaGraduationCap />} 
        subtitle={t("udes.subtitle")}
        content={t("udes.content")}
        detail={
          <>
            <Container className="py-3">
              <Image 
                src="https://media1.ledevoir.com/image/759705.jpg?ts=1664611289" 
                alt="Université de Sherbrooke" 
                style={{ width: '100%', marginBottom: '15px' }} 
              />
            </Container>
            <h6>{t("udes.details.fall.title")}</h6>
            <ul> 
              <li>{t("udes.details.fall.list.1")}</li>
              <li>{t("udes.details.fall.list.2")}</li>
              <li>{t("udes.details.fall.list.3")}</li>
              <li>{t("udes.details.fall.list.4")}</li>
            </ul>
            <h6>{t("udes.details.winter.title")}</h6>
            <ul>
              <li>{t("udes.details.winter.list.1")}</li>
              <li>{t("udes.details.winter.list.2")}</li>
              <li>{t("udes.details.winter.list.3")}</li>
              <li>{t("udes.details.winter.list.4")}</li>
            </ul>
          </>
        }
            />

      {/* Cross-Platform Mobile Application Developer - Intern */}
      <VerticalTimelineElementLayout 
        badges={["Mono-Repository", "Android", "Flutter / Dart", "React Native"]}
        title={t("actuelburo.title")}
        date={t("actuelburo.date")} 
        icon={<MdWork />} 
        subtitle={t("actuelburo.subtitle")} 
        content={t("actuelburo.content")} 
        detail={
          <>
            <Container className="py-3">
              <Image 
          src="https://www.francebleu.fr/s3/cruiser-production/2020/12/0f22fae5-fe43-4945-ae5e-2095a849e6e7/600_actuelburo_2.jpg" 
          alt="ActualBuro" 
          style={{ width: '100%', marginBottom: '15px' }} 
              />
            </Container>
            <h6>{t("actuelburo.details.tasks.title")}</h6>
            <ul>
              <li>{t("actuelburo.details.tasks.list.1")}</li>
              <li>{t("actuelburo.details.tasks.list.2")}</li>
              <li>{t("actuelburo.details.tasks.list.3")}</li>
              <li>{t("actuelburo.details.tasks.list.4")}</li>
            </ul>
            <h6>{t("actuelburo.details.learnings.title")}</h6>
            <ul>
              <li>{t("actuelburo.details.learnings.list.1")}</li>
              <li>{t("actuelburo.details.learnings.list.2")}</li>
            </ul>
          </>
        }
            />

            {/* Ingénieur en informatique */}
            <VerticalTimelineElementLayout 
        title={t("tncy.title")} 
        date={t("tncy.date")} 
        icon={<FaGraduationCap />} 
        subtitle={t("tncy.subtitle")} 
        content={t("tncy.content")} 
        detail={
          <>
            <Container className="py-3">
              <Image 
          src="https://telecomnancy.univ-lorraine.fr/wp-content/uploads/2023/09/IMG_4695-edited-scaled.jpeg" 
          alt="Télécom Nancy" 
          style={{ width: '100%', marginBottom: '15px' }} 
              />
            </Container>
            <h6>{t("tncy.details.courses.title")}</h6>
            <ul>
              <li>{t("tncy.details.courses.list.1")}</li>
              <li>{t("tncy.details.courses.list.2")}</li>
              <li>{t("tncy.details.courses.list.3")}</li>
              <li>{t("tncy.details.courses.list.4")}</li>
              <li>{t("tncy.details.courses.list.5")}</li>
            </ul>
          </>
        }
            />

            {/* TOEIC Certification */}
            <VerticalTimelineElementLayout 
        title={t("toeic.title")} 
        date={t("toeic.date")} 
        icon={<PiCertificateFill />} 
        subtitle={t("toeic.subtitle")} 
        content={t("toeic.content")} 
        detail={
          <>
            <Container className='py-3'>
          <Image src="/portfolio/assets/toeic.jpg" 
              alt="TOEIC" 
              style={{ width: '100%', marginBottom: '15px' }} /> 
            </Container>
            <h6>{t("toeic.details.description.title")}</h6>
            <p style={{ fontWeight: "300" }}>
              {t("toeic.details.description.content")}
            </p>
            <h6>{t("toeic.details.score.title")}</h6>
            <ul>
              <li>{t("toeic.details.score.list.1")}</li>
              <li>{t("toeic.details.score.list.2")}</li>
            </ul>
          </>
        }
            />

            {/* Classe préparatoire */}
      <VerticalTimelineElementLayout
        title={t("cpge.title")}
        date={t("cpge.date")}
        icon={<FaGraduationCap />}
        subtitle={t("cpge.subtitle")}
        content={t("cpge.content")}
      />
    </VerticalTimeline>
  );
}

export default Timeline;
