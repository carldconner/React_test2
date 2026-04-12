import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Hardware from './Hardware.jsx'
import Plates from './Plates.jsx'
import './App.css'

function App() {
  const navigate = useNavigate()

  const buttonStyle = {
    marginRight: '1rem',
    padding: '0.65rem 1rem',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontSize: '1rem',
  }

  return (
    <>
      <nav style={{ padding: '1rem', backgroundColor: '#e5f2ff', marginBottom: '1rem' }}>
        <button type="button" style={buttonStyle} onClick={() => navigate('/')}>Home</button>
        <button type="button" style={buttonStyle} onClick={() => navigate('/about')}>About</button>
        <button type="button" style={buttonStyle} onClick={() => navigate('/contact')}>Contact</button>
        <button type="button" style={buttonStyle} onClick={() => navigate('/hardware')}>Hardware</button> 
        <button type="button" style={buttonStyle} onClick={() => navigate('/plates')}>Plates</button> 
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/plates" element={<Plates />} />
       
      
      </Routes>

      <section id="spacer"></section>
    </>
  )
}

export default App
