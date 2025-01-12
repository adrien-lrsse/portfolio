import { Badge, Card, Col, Row } from 'react-bootstrap';
import GitHubButton from '../components/Button/GitHubButton';
import './project.css';
import ViewStory from '../components/Button/ViewStory';
import { useTranslation } from 'react-i18next';

function Project() {

    const { t } = useTranslation('projects');

    const Projects = [
        {
            id: 1,
            title: t('compiler.title'),
            subtitle: t('compiler.subtitle'),
            date: t('compiler.date'),
            description: t('compiler.description'),
            link: "https://github.com/adrien-lrsse/canAda-compiler",
            story: "",
            badges: t('compiler.badges', { returnObjects: true }) // Ajout de `returnObjects: true`
        },
        {
            id: 2,
            title: t('route-planner.title'),
            date: t('route-planner.date'),
            description: t('route-planner.description'),
            link: "https://github.com/adrien-lrsse/route-planner-for-electric-cars",
            story: "",
            badges: t('route-planner.badges', { returnObjects: true })
        },
        {
            id: 3,
            title: t('english-invader.title'),
            date: t('english-invader.date'),
            description: t('english-invader.description'),
            link: "https://github.com/adrien-lrsse/english-invader",
            story: "",
            badges: t('english-invader.badges', { returnObjects: true })
        },
        {
            id: 4,
            title: t('direct-dealing.title'),
            date: t('direct-dealing.date'),
            description: t('direct-dealing.description'),
            link: "https://github.com/TheoHorn/codingweek",
            story: "",
            badges: t('direct-dealing.badges', { returnObjects: true })
        },
        {
            id: 6,
            title: t('aoc-2023.title'),
            date: t('aoc-2023.date'),
            description: t('aoc-2023.description'),
            link: "https://github.com/adrien-lrsse/advent-of-code-2023",
            story: "",
            badges: t('aoc-2023.badges', { returnObjects: true })
        },
        {
            id: 7,
            title: t('shared-garden.title'),
            date: t('shared-garden.date'),
            description: t('shared-garden.description'),
            link: "https://github.com/adrien-lrsse/shared-garden",
            story: "",
            badges: t('shared-garden.badges', { returnObjects: true })
        },
        {
            id: 8,
            title: t('portfolio.title'),
            date: t('portfolio.date'),
            description: t('portfolio.description'),
            link: "https://github.com/adrien-lrsse/portfolio",
            story: "",
            badges: t('portfolio.badges', { returnObjects: true })
        }
    ];
    
    return (
        <Row className="g-4">
            {Projects.map((project) => (
                <Col key={project.id} xs={12} sm={6} md={4}>
                    <Card className="h-100">
                       
                        <Card.Body className="card-body">
                            <div className="d-flex flex-wrap">
                            {Array.isArray(project.badges) && project.badges.map((badge, index: number) => (
                                <Badge key={index} bg='#4464AD' className='stack-badge m-1 ms-0'>{badge}</Badge>
                                ))}
                            </div>
                            <Card.Title>{project.title}  {project.subtitle && <>- {project.subtitle}</>}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{project.date}</Card.Subtitle>
                            <Card.Text>{project.description}</Card.Text>
                            <Row>
                                <Col className="d-flex justify-content-between">
                                    {project.link && <GitHubButton link={project.link} />}
                                    {project.story && <ViewStory link={project.story}/>}
                                    
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Project;
