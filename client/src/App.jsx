import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/home/home.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import Service from './pages/services/service.jsx';
import ProjectSection from './pages/projectsection/project-sec.jsx';
import AdminPanel from './pages/Admin/Adminpanel.jsx';
import Skillssec from './pages/Skills-sec/skills-sec.jsx';
import CertifSec from './pages/Certificates-section/certif-sec.jsx';
import Contactsec from './pages/Contacts/contact-sec.jsx';
import Footer from './components/footer/footer.jsx';
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
              <Skillssec/>
              <CertifSec />
              <Contactsec />
              <Footer />
            </>
          } />
          <Route path="/adminpanel" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;