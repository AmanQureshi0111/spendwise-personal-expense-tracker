import React from 'react'
import {styles} from '../assets/dummyStyles';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = ({ onLogout, user }) => {
    return (
        <div className={styles.layout.root}>
            <Navbar user={user} onLogout={onLogout} />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;
