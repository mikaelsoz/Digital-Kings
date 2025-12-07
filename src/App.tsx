import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Rules } from './components/Rules';
import { CustomCursor } from './components/ui/CustomCursor';

function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <CustomCursor />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/regras" element={<Rules />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;