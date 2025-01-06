import { Container } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa6";
function ProjectLayout ({ children } : { children: React.ReactNode }) {
  return (
    <>
    <Container id="project" style={{paddingTop:'10vh'}}>
      {children}
      <div className='infinite-arrow text-center py-5'>
        <a href="#project" className="text-center">
          <FaArrowUp size={50} style={{color:"#4464AD"}} />
        </a>
      </div>
    </Container>
    </>
  )
}

export default ProjectLayout;