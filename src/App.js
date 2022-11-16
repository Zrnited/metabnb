import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Place from './pages/Place';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/place' element={<Place />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
