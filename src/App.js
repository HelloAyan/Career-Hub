import './App.css';
import FeaturedJob from './components/Feature Job/FeaturedJob';
import Header from './components/Header/Header';
import JobCategory from './components/Job Category/JobCategory';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className='body'>
      <Menu />
      <Header />
      <JobCategory />
      <FeaturedJob />
    </div>
  );
}

export default App;
