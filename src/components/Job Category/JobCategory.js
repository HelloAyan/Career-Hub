import React, { useState, useEffect } from 'react';
import Styles from '../Job Category/JobCategory.module.css';
import accountImg from '../../assets/Icons/accounts.png';
import creativeImg from '../../assets/Icons/business 1.png';
import marketingImg from '../../assets/Icons/social-media 1.png';
import EngineeringImg from '../../assets/Icons/chip 1.png';

const JobCategory = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategory(data));
    }, [])

    return (
        <div className={Styles.jobCategoryContainer}>
            <div style={{ fontSize: '45px', color: 'black', textAlign: 'center' }} >Job Category List</div>
            <div style={{ fontSize: '16px', color: '#757575', textAlign: 'center', marginTop: '15px' }}>Explore thousands of job opportunities with all the information you need. Its your future</div>

            <div className={Styles.jobTitleSection}>
                {category.map(v => (
                    <>
                        <div className={Styles.jobCategory}>
                            <div className={Styles.imgSection} > <img src={v.CategoryLogo} alt={v.CategoryName} style={{ width: '40px', height: '40px' }} /> </div>
                            <div className={Styles.postTitle}> {v.CategoryName}</div>
                            <div className={Styles.availableJob}>{v.JobAvailable} Job available</div>
                        </div>
                    </>
                ))}

            </div>
        </div>
    )
}

export default JobCategory;