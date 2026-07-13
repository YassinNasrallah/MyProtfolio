
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ProjectHighlights from './pages/ProjectHighlights';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/project-highlights' element={<ProjectHighlights />}/>
      <Route path='bio' element={<About />} />
    </Routes>
       
       
    </div>
  );
}

export default App;
