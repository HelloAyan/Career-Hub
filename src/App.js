import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/404 Page/NotFound';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='body'>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
