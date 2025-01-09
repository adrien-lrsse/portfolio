import { Container } from "react-bootstrap";
import "./../../../components/Project/Project.css";
import GitHubButton from "../../../components/Button/GitHubButton";
import CompilerEN from "./en/CompilerEN";

function Compiler() {
  return (
    <>
    <Container className="text-center project-title">
      <h1>Ada Compiler</h1>
      <h5>October 2023 - May 2024</h5>
      <p>An adventure from lexer to assembly</p>
      <GitHubButton link="https://github.com/adrien-lrsse/canAda-compiler" />
      <a  href="/"><p style={{marginTop: '1vh'}}>Home</p></a>
    </Container>
    <div className="content">
      <CompilerEN />
    </div>
    </>
  )
    
}

export default Compiler