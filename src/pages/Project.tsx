import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
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
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Subtitle>{project.subtitle}</Card.Subtitle>
                            <Card.Subtitle>{project.date}</Card.Subtitle>
                            <Card.Text>{project.description}</Card.Text>
                            <Row>
                                <Col className="d-flex justify-content-between">
                                    {project.link && <GitHubButton link={project.link} />}
                                    <ViewStory />
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
