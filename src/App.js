import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Err404 from './pages/Err404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
  <BrowserRouter> 
    <Routes>
<Route path="/contact" element={ <Contact /> } />
<Route path="/about" element={ <About title="HI"/> } />
<Route path="/" element={ <Home />} />
<Route path="*" element={ <Err404 /> } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
