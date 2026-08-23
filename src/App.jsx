import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Research from './pages/Research'
import ExperienceEducation from './pages/ExperienceEducation'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/experience"
          element={<ExperienceEducation />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/research"
          element={<Research />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>
  )
}


export default App


