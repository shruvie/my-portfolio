import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/home/home.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import Service from './pages/services/service.jsx';
import ProjectSection from './pages/projectsection/project-sec.jsx';
import AdminPanel from './pages/Admin/Adminpanel.jsx';

function App() {
  return (
    <Router>
      <div className='appin'>
        
        <Routes>
          <Route path="/" element={
            <>
            <Navbar />
            <Sidebar />
              <Home />
              <Service />
              <ProjectSection />
            </>
          } />
          <Route path="/adminpanel" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;