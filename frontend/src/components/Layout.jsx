import React, { useState } from 'react'
import {styles} from '../assets/dummyStyles';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = ({ onLogout, user }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <div className={styles.layout.root}>
            <Navbar user={user} onLogout={onLogout} />
            <Sidebar user={user} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <main className={styles.layout.mainContainer(isCollapsed)}>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;
