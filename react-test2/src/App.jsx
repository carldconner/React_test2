import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import './App.css'

function App() {
  const navigate = useNavigate()

  const buttonStyle1 = {
    marginRight: '1rem',
    padding: '0.65rem 1rem',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontSize: '1rem',
  }

  const buttonStyle2 = {
    ...buttonStyle1,
    backgroundColor: '#dc2626',
  }

  const buttonStyle3 = {
    ...buttonStyle1,
    backgroundColor: '#166534',
    color: '#ffffff',
  }

  return (
    <>
      <nav style={{ padding: '1rem', backgroundColor: '#e5f2ff', marginBottom: '1rem' }}>
        <button type="button" style={buttonStyle1} onClick={() => navigate('/')}>Home</button>
        <button type="button" style={buttonStyle2} onClick={() => navigate('/about')}>About</button>
        <button type="button" style={{ ...buttonStyle3, marginRight: 0 }} onClick={() => navigate('/contact')}>Contact</button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <section id="spacer"></section>
    </>
  )
}

export default App
