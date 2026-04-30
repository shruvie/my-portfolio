import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/home/home.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
function App() {
  return (
      <div background-color="white">
        <Navbar />
        <Sidebar />
        <Home />
        
      </div>
  )
}

export default App;