import React from 'react';
import Styles from './Menu.module.css';
import { NavLink, Link } from 'react-router-dom';

const Menu = () => {

    // CSS for active route
    const activeStyle = {
        fontWeight: 'bold',
        color: 'red'
    };

    return (
        <menu>
            <div className={Styles.mainContainer}>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}> <div className={Styles.webTitle}>Job Portal</div> </Link>
                <div className={Styles.menuContainer}>
                    <NavLink to={'/'} style={{ textDecoration: 'none', color: 'inherit' }} activeStyle={activeStyle}> <div>Home</div> </NavLink >
                    <NavLink to={'/statistic'} style={{ textDecoration: 'none', color: 'inherit' }} activeStyle={activeStyle}> <div>Statistics</div> </NavLink >
                    <NavLink to={'/'} style={{ textDecoration: 'none', color: 'inherit' }} activeStyle={activeStyle}> <div>Applied Jobs</div> </NavLink>
                    <NavLink to={'/blog'} style={{ textDecoration: 'none', color: 'inherit' }} activeStyle={activeStyle}><div>Blog</div></NavLink>
                </div>
                <div className={Styles.applyBtn}>Start Applying</div>
            </div>
        </menu >
    )
}

export default Menu;