import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/home/home.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import Service from './pages/services/service.jsx';
import ProjectSection from './pages/projectsection/project-sec.jsx';
function App() {
  return (
      <div background-color="white" className='appin'>
        <Navbar />
        <Sidebar />
        <Home />
        <Service />
        <ProjectSection />
      </div>
  )
}

export default App;