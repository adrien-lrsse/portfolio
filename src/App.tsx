import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import Layout from "./context/Layout";
import ProjectLayout from "./components/Project/ProjectLayout";
import Compiler from "./content/projects/compiler/Compiler";
import RoutePlanner from "./content/projects/route_planner/RoutePlanner";


function App() {
  return (
    
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <ProjectLayout>
          <Routes>
            <Route path="/project/compiler" element={<Compiler />} />
            <Route path="/project/route-planner" element={<RoutePlanner />} />
          </Routes>
        </ProjectLayout>
      </Layout>
    </Router>
  );
  
  
}

export default App
