import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react';
import Home from './pages/Home.jsx';
import Csr from './pages/Csr.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Men from './pages/Men.jsx';
import Womens from './pages/Women.jsx';
import WomenNightWear from './pages/WomenNightWear.jsx';
import Boys from './pages/Boys.jsx';
import Girls from './pages/Girls.jsx';
import Infants from './pages/Infants.jsx';

function App() {

  useEffect(() => {
    const handleContextMenu = (event) => {
        event.preventDefault();
    };
    window.addEventListener('contextmenu', handleContextMenu);
    return () => {
        window.removeEventListener('contextmenu', handleContextMenu);
    };
}, []);

  return (
    <Routes>

    <Route exact path='/' element={<Home />} />

    <Route path='/women/casual' element={<Womens />} />

    <Route path='/women/freestyle' element={<WomenNightWear/>} />

    <Route path='/men' element={<Men />} />

    <Route path='/kids/girls' element={<Girls/>} />

    <Route path='/kids/boys' element={<Boys />} />

    <Route path='/infants' element={<Infants />} />

    <Route path='/about' element={<About />} />

    <Route path='/csr' element={<Csr />} />

    <Route path='/contact' element={<Contact />} />

    </Routes>
  )
}

export default App
