import Home from "./componet/Home";
import Navbar from "./componet/Navbar";
import Section from "./componet/Section";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar/>  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/section" element={<Section/>} />
          <Route path="*" element={<h1>404 Xato</h1>} />


        </Routes>
      </Router>
    </>
  );
}

export default App;
