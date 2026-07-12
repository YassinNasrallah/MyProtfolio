
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ProjectHighlights from './pages/ProjectHighlights';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/project-highlights' element={<ProjectHighlights />}/>
    </Routes>
       
       
    </div>
  );
}

export default App;
