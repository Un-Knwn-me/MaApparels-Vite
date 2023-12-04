import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx';
import Csr from './pages/Csr.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {

  return (
    <Routes>

    <Route exact path='/' element={<Home />} />

    <Route path='/about' element={<About />} />

    <Route path='/csr' element={<Csr />} />

    <Route path='/contact' element={<Contact />} />

    </Routes>
  )
}

export default App
