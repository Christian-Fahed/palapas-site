import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Collection from './components/Collection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CollectionPage from './pages/CollectionPage';

function Home() {
  return (
    <>
      <About />
      <Collection />
      <Contact />
    </>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:type' element={<CollectionPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
