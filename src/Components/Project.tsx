import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

function Project() {
    const projects = [
        { id: 1, title: "Project 1", description: "Description of project 1", image: "https://via.placeholder.com/150" },
        { id: 2, title: "Project 2", description: "Description of project 2", image: "https://via.placeholder.com/150" },
        { id: 3, title: "Project 3", description: "Description of project 3", image: "https://via.placeholder.com/150" },
        { id: 4, title: "Project 4", description: "Description of project 4", image: "https://via.placeholder.com/150" },
        { id: 5, title: "Project 5", description: "Description of project 5", image: "https://via.placeholder.com/150" },
        { id: 6, title: "Project 6", description: "Description of project 6", image: "https://via.placeholder.com/150" },
    ];

    return (
        <Row className="g-4">
            {projects.map((project) => (
                <Col key={project.id} xs={12} sm={6} md={4}>
                    <Card>
                        <Card.Img variant="top" src={project.image} alt={project.title} />
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                            <Button variant='dark'>View GitHub Page</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Project;
