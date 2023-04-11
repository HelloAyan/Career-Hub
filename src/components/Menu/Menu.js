import React from 'react';
import Styles from './Menu.module.css';

const Menu = () => {
    return (
        <menu>
            <div className={Styles.mainContainer}>
                <div className={Styles.webTitle}>Job Portal</div>
                <div className={Styles.menuContainer}>
                    <div>Statistics</div>
                    <div>Applied Jobs</div>
                    <div>Blog</div>
                </div>
                <div className={Styles.applyBtn}>Start Applying</div>
            </div>
        </menu>
    )
}

export default Menu;