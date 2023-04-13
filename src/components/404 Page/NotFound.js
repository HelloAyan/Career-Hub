import React from 'react';
import Styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={Styles.container}>
            <div>404 Error</div>
            <div>Page Not Found!...</div>
        </div>
    )
}

export default NotFound;