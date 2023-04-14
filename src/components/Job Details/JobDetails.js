import React from 'react'
import Menu from '../Menu/Menu';
import Styles from './JobDetails.module.css';


const JobDetails = () => {
    return (
        <div>
            <Menu />
            <div className={Styles.container}>
                <div className={Styles.jobTitleSection} >
                    <div className={Styles.jobDetailsText} > Job Details</div>
                </div>
                <div className={Styles.jobDescriptionSection}>
                    <div className={Styles.leftArea}>
                        <div className={Styles.descriptionSection}>
                            <div className={Styles.descriptionTitle}>
                                <span style={{ fontWeight: '600' }}>Job Description:</span>  <span style={{ color: '#757575' }}>A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface. </span>
                            </div>
                        </div>
                        <div className={Styles.descriptionSection}>
                            <div className={Styles.descriptionTitle}>
                                <span style={{ fontWeight: '600' }}>Job Responsibility:</span>  <span style={{ color: '#757575' }}> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members. </span>
                            </div>
                        </div>
                        <div className={Styles.descriptionSection}>
                            <div className={Styles.descriptionTitle}>
                                <span style={{ fontWeight: '600' }}>Educational Requirements:</span>  <span style={{ color: '#757575' }}> Bachelor degree to complete any reputational university. </span>
                            </div>
                        </div>
                        <div className={Styles.descriptionSection}>
                            <div className={Styles.descriptionTitle}>
                                <span style={{ fontWeight: '600' }}>Experiences:</span>  <span style={{ color: '#757575' }}> 2-3 Years in this field. </span>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.rightArea}>
                        <div style={{ fontWeight: '600' }}>Job Details</div>
                        <hr />
                        <div>Salary : 100K - 150K (Per Month)</div>
                        <div>Job Title : Product Designer</div>
                        <div style={{ margin: '10px 0px', fontWeight: '600' }}> Contact Information</div>
                        <hr />
                        <div>Phone : 01750-00 00 00</div>
                        <div>Email : info@gmail.com</div>
                        <div>Address : Dhanmondi, Dhaka, Bangladesh</div>
                        <div className={Styles.btn}> Apply Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails;