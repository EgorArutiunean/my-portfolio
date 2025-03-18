import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage'; // Новая страница проекта

function App() {
  return (
    <Routes>
      {/* Главная страница */}
      <Route
        path="/"
        element={
          <>
            <Header />
            <main className="pt-20">
              <Hero />
              <About />
              <Projects />
              <Contact />
              <Footer />
            </main>
          </>
        }
      />
      {/* Страница проекта */}
      <Route path="/project/:id" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
