import { Container } from 'react-bootstrap';
import './title.css'

function Title () {
    return (
        <Container style={{width: "fit-content", textAlign: "right"}}>
            <h1>Hi! 🚀</h1>
            <div className='typewriter'>
            <h1>I'm <span style={{color: "#4464AD", fontFamily: "Rock Salt"}}>Adrien Larousse</span></h1>
            </div>
        </Container>
    );
}

export default Title;