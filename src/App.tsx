import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavBar from './components/Navbar/NavBar';
import { AiOutlineArrowDown } from "react-icons/ai";
import Title from './pages/Title';
import Timeline from './components/Timeline/Timeline';
import Project from './pages/Project';

function App() {
  return (
    
    <>
    <NavBar />
      <Container fluid style={{ height: "100vh" }}>
        {/* Les 2/3 premiers tiers pour la carte */}
        <div
          style={{
            height: "80%", // 2/3 de la hauteur
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title />
        </div>
  
        {/* Le dernier tiers pour le texte */}
        <div
          style={{
            height: "20%", // 1/3 de la hauteur
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className='infinite-arrow'>
            <a href="#project">

          <AiOutlineArrowDown size={50} style={{color:"#4464AD"}} />
            </a>
          </div>
        </div>
      </Container>
      <Container id="project" style={{paddingTop:'10vh'}}>
        <h1>Project</h1>
        <Project />
      </Container>
      <Container id='timeline' style={{paddingTop:'10vh'}}>
        <h1>Timeline</h1>
        <Timeline />
      </Container>
      <Container>
        <h1>Stacks</h1>
      </Container>
    </>
  );
  
  
}

export default App
