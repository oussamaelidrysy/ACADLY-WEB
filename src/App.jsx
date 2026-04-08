import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { RealisationPage } from './pages/RealisationPage'
import { ContactPage } from './pages/ContactPage'
import './App.css'

function App() {
  return (
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path='realisation' element={<RealisationPage/>} />
        <Route path='contact' element={<ContactPage/>} />
      </Routes> 
  )
}

export default App