import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import SplashPage from './Components/SplashPage';
import Menu from './Components/Menu';
import './App.css';
import Footer from './Components/Footer';
import Feedback from './Components/Feedback';
import Gallery from './Components/Gallery';

function App() {
  return (
    <>
    <NavBar />
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
      </Routes>
      <Routes>
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Routes>
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;