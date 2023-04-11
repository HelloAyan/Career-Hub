import React from 'react';
import Styles from './Header.module.css';
import profileImg from '../../assets/All Images/P3OLGJ1 copy 1.png';

const Header = () => {
    return (
        <div className={Styles.headerBody}>
            <div className={Styles.contentArea}>
                <div className={Styles.contentAreaText}>
                    <div style={{ marginTop: '100px', lineHeight: '75px' }}> <div>One Step</div>  Closer To Your <div style={{ color: '#8F7DFF' }}>Dream Job </div> </div>
                </div>
                <div style={{ marginTop: '25px', color: '#757575' }}>
                    <div> Explore thousands of job opportunities with all the </div> <div> information you need. Its your future. Come find it. Manage all </div> <div> your job application from start to finish. </div>
                </div>
                <div className={Styles.getStartedBtn}> <button> Get Started</button> </div>
            </div>
            <div className={Styles.imageArea}> <img src={profileImg} alt="" /> </div>
        </div>
    )
}

export default Header;