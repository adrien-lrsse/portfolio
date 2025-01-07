import React from 'react';
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import GitHubButton from '../components/Button/GitHubButton';
import { projects } from '../content/project';
import './project.css';
import ViewStory from '../components/Button/ViewStory';

function Project() {
    return (
        <Row className="g-4">
            {projects.map((project) => (
                <Col key={project.id} xs={12} sm={6} md={4}>
                    <Card className="h-100">
                       
                        <Card.Body className="card-body">
                            <div className="d-flex flex-wrap">
                                {project.badges && project.badges.map((badge) => (
                                    <Badge bg='#4464AD' className='stack-badge my-1'>{badge}</Badge>
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
