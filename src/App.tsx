import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioCard from './Components/PortfolioCard';
import NavBar from './Components/NavBar';
import { AiOutlineArrowDown } from "react-icons/ai";
import Title from './Components/Title';

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
          <AiOutlineArrowDown size={50} style={{color:"#4464AD"}} />
          </div>
        </div>
      </Container>
      <Container>
        <h1>Project</h1>
      </Container>
      <Container>
        <h1>Cursus</h1>
      </Container>
      <Container>
        <h1>Stacks</h1>
      </Container>
    </>
  );
  
  
}

export default App
