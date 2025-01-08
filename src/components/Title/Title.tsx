import { Card, Container } from 'react-bootstrap';
import './title.css'

function Title () {
    return (
        <>
        <Container>
        <Container style={{width: "fit-content", textAlign: "right"}}>
            <h1>Salut ! 🚀</h1>
            <div className='typewriter'>
            <h1>ici <span style={{color: "#4464AD", fontFamily: "Rock Salt"}}>Adrien Larousse&nbsp;</span></h1>
            </div>
        </Container>
        <Container style={{width: "fit-content", textAlign: "left"}}>
            <Card style={{marginTop: "5vh"}}>
                <Card.Body>
                    <Card.Title>Full Stack Developer</Card.Title>
                    <Card.Text>
                        Passionate about new technologies and web development, I am currently a student at the University of Sherbrooke in software engineering.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
        </Container>
        </>
    );
}

export default Title;