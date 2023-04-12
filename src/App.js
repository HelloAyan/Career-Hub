import './App.css';
import Header from './components/Header/Header';
import JobCategory from './components/Job Category/JobCategory';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className='body'>
      <Menu />
      <Header />
      <JobCategory />
    </div>
  );
}

export default App;
