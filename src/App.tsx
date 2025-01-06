import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import Layout from "./context/Layout";


function App() {
  return (
    
    <Router>
      <Layout>
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
  
  
}

export default App
