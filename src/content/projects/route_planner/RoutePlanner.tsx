import { Container } from "react-bootstrap";
import "./../../../components/Project/Project.css";
import GitHubButton from "../../../components/Button/GitHubButton";
import RoutePlannerEN from "./en/RoutePlannerEN";
import RoutePlannerFR from "./fr/RoutePlannerFR";

function RoutePlanner() {
  return (
    <>
    <Container className="text-center project-title">
      <h1>Route Planner for electric cars</h1>
      <h5>Mars 2023 - June 2023</h5>
      <p>A* Algorithm and visualisation results</p>
      <GitHubButton link="https://github.com/adrien-lrsse/route-planner-for-electric-cars" />
      <a  href="/"><p style={{marginTop: '1vh'}}>Home</p></a>
    </Container>
    <div className="content">
      <RoutePlannerFR />
    </div>
    </>
  )
    
}

export default RoutePlanner