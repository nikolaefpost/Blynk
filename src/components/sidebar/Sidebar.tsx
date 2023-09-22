import React from "react";

import styles from "./sidebar.module.scss";


const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <h2>Test App</h2>
            <p>Yemelyanov Eduard</p>
        </aside>
    );
};

export default Sidebar;