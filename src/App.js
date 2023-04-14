import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/404 Page/NotFound';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import JobDetails from './components/Job Details/JobDetails';

function App() {
  return (
    <div className='body'>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistic" element={<Statistics />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/job_details" element={<JobDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
