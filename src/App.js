import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Maps from "./components/Maps";
import Projects from "./components/Projects";
import './scss/style.scss';

function App() {
  
  return (
    <div className='app'>
      <div><Sidebar /></div>
      <div className="main_container" style={{ marginLeft: "240px" }}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/map" element={<Maps />} />
        </Routes>
      </div>
    </div>


  );

}

export default App;
