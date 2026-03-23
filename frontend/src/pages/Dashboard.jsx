import React from 'react'
import { dashboardStyles } from '../assets/dummyStyles';

const Dashboard = () =>{
    return (
        <div className={dashboardStyles.container}>
            <div className={dashboardStyles.headerContainer}>
                <h1 className={dashboardStyles.headerTitle}>Dashboard</h1>
                <p className={dashboardStyles.headerSubtitle}>Welcome back! Your overview will appear here.</p>
            </div>
        </div>
    )
}
export default Dashboard;
