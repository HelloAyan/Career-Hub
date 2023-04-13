import React from 'react';
import Styles from './Home.module.css';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import JobCategory from '../Job Category/JobCategory';
import FeaturedJob from '../Feature Job/FeaturedJob';

const Home = () => {
    return (
        <div className={Styles.body}>
            <Menu />
            <Header />
            <JobCategory />
            <FeaturedJob />
        </div>
    )
}

export default Home;