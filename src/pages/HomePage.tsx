import './../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Project from './Project';
import TitleComponent from '../components/Title/TitleComponent';
import Timeline from '../components/Timeline/Timeline';

function HomePage() {
  return (
    <>
      <TitleComponent />

      <Container id="project" style={{paddingTop:'10vh'}}>
        <h1>Project</h1>
        <Project />
      </Container>

      <Container id='timeline' style={{paddingTop:'10vh'}}>
        <h1>Timeline</h1>
        <Timeline />
      </Container>
      
      <Container>
        <h1>About Me</h1>
      </Container>
    </>
  );
  
  
}

export default HomePage;
