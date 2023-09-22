import React from 'react';

import styles from "./layout.module.scss"
import {Sidebar} from "../../components";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className={styles.outlet}>
            <Sidebar/>
            <div className={styles.content}>
                <Outlet/>
            </div>

        </div>
    );
};

export default Layout;