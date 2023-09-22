import React from 'react';
import {Sidebar} from "../../components";
import { Outlet } from 'react-router-dom';

import styles from "./layout.module.scss";

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