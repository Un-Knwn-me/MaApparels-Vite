import { Route, Routes } from 'react-router-dom'
import './App.css'
import Csr from './pages/Csr.jsx'
import About from './pages/About.jsx'

function App() {

  return (
    <Routes>

    <Route exact path='/' element={<About />} />

    <Route exact path='/csr' element={<Csr />} />

    </Routes>
  )
}

export default App
