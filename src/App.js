import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Layout from './components/Layout';
import FaceClearPage from './pages/FaceClearPage';
import FaceMassagePage from './pages/FaceMassagePage';
import FacePilingPage from './pages/FacePilingPage';
import FaceCarePage from './pages/FaceCarePage';
import ScrollToTop from './components/ScrollTotTop';




function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='face-clear' element={<FaceClearPage />} />
          <Route path='face-massage' element={<FaceMassagePage />} />
          <Route path='face-piling' element={<FacePilingPage />} />
          <Route path='face-care' element={<FaceCarePage />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path='/service' element={<ServicesPage />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
