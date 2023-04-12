import React from 'react';
import Styles from '../Job Category/JobCategory.module.css';
import accountImg from '../../assets/Icons/accounts 1.png';
import creativeImg from '../../assets/Icons/business 1.png';
import marketingImg from '../../assets/Icons/social-media 1.png';
import EngineeringImg from '../../assets/Icons/chip 1.png';

const JobCategory = () => {
    return (
        <div className={Styles.jobCategoryContainer}>
            <div style={{ fontSize: '45px', color: 'black', textAlign: 'center' }} >Job Category List</div>
            <div style={{ fontSize: '16px', color: '#757575', textAlign: 'center', marginTop: '15px' }}>Explore thousands of job opportunities with all the information you need. Its your future</div>

            <div className={Styles.jobTitleSection}>
                <div className={Styles.jobCategory}>
                    <div className={Styles.imgSection} > <img src={accountImg} alt="" /> </div>
                    <div className={Styles.postTitle}> Account & Finance</div>
                    <div className={Styles.availableJob}> Job available</div>
                </div>
                <div className={Styles.jobCategory}>
                    <div className={Styles.imgSection} > <img src={creativeImg} alt="" /> </div>
                    <div className={Styles.postTitle}> Creative Design </div>
                    <div className={Styles.availableJob}>Job available</div>
                </div>
                <div className={Styles.jobCategory}>
                    <div className={Styles.imgSection} > <img src={marketingImg} alt="" /> </div>
                    <div className={Styles.postTitle}> Marketing & Sales </div>
                    <div className={Styles.availableJob}>Job Available</div>
                </div>
                <div className={Styles.jobCategory}>
                    <div className={Styles.imgSection} > <img src={EngineeringImg} alt="" /> </div>
                    <div className={Styles.postTitle}> Engineering Job </div>
                    <div className={Styles.availableJob}>Job Available</div>
                </div>
            </div>
        </div>
    )
}

export default JobCategory;