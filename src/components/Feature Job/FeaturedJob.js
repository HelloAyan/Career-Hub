import React, { useState, useEffect } from 'react';
import Styles from '../Feature Job/FeaturedJob.module.css';
import googleImg from '../../assets/All Images/google-1-1 1.png';

const FeaturedJob = () => {
    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        fetch('featured.json')
            .then(res => res.json())
            .then(data => setFeatured(data));
    }, [])
    return (
        <div>
            <div className={Styles.featuredTitle}>Featured Jobs</div>
            <div className={Styles.featureContent}>Explore thousands of job opportunities with all the information you need. Its your future</div>
            <div className={Styles.featuredJobBodyContainer}>
                {featured.map(v => (
                    <>
                        <div className={Styles.jobPostSection}>
                            <div> <img src={googleImg} alt="" /> </div>
                            <div className={Styles.postTitle}> {v.JobTitle}</div>
                            <div className={Styles.companyName}>{v.CompanyName}</div>
                            <div className={Styles.remoteFullTimeSection}>
                                <div className={Styles.jobTypeSection}>{v.RemoteOrOnsite} </div>
                                <div className={Styles.jobTypeSection}>{v.FulltimePartTime}</div>
                            </div>
                            <div className={Styles.locationSalarySection}>
                                <div> <i class="fa-solid fa-location-dot"></i> {v.Location}</div>
                                <div> <i class="fa-solid fa-dollar-sign"></i> Salary : {v.Salary}</div>
                            </div>
                            <div className={Styles.viewBtn}> <button>View Details </button> </div>
                        </div>
                    </>
                ))}
            </div>
            <div className={Styles.allJobBtn}> <button>See All Jobs </button> </div>
        </div>
    )
}

export default FeaturedJob;