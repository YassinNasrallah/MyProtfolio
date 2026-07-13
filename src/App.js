
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ProjectHighlights from './pages/ProjectHighlights';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/project-highlights' element={<ProjectHighlights />}/>
    </Routes>
       
       
    </div>
  );
}

export default App;
