import React from 'react';
import Styles from '../Feature Job/FeaturedJob.module.css';
import googleImg from '../../assets/All Images/google-1-1 1.png';

const FeaturedJob = () => {
    return (
        <div>
            <div className={Styles.featuredTitle}>Featured Jobs</div>
            <div className={Styles.featureContent}>Explore thousands of job opportunities with all the information you need. Its your future</div>
            <div className={Styles.featuredJobBodyContainer}>
                <div className={Styles.jobPostSection}>
                    <div> <img src={googleImg} alt="" /> </div>
                    <div className={Styles.postTitle}>Technical Database Engineer</div>
                    <div className={Styles.companyName}>Google LLC</div>
                    <div className={Styles.remoteFullTimeSection}>
                        <div className={Styles.jobTypeSection}>Remote</div>
                        <div className={Styles.jobTypeSection}>Full Time</div>
                    </div>
                    <div className={Styles.locationSalarySection}>
                        <div> <i class="fa-solid fa-location-dot"></i> Dhaka, Bangladesh</div>
                        <div> <i class="fa-solid fa-dollar-sign"></i> Salary : 100K - 150K</div>
                    </div>
                    <div className={Styles.viewBtn}> <button>View Details </button> </div>
                </div>
                <div className={Styles.jobPostSection}>Microsoft</div>
            </div>
            <div className={Styles.allJobBtn}> <button>See All Jobs </button> </div>
        </div>
    )
}

export default FeaturedJob;