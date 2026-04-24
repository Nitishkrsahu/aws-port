import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Error } from './components/page-error/error';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <Router>
        
        <Header />
        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
