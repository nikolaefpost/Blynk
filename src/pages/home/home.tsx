import React from 'react';
import {Comments, Items} from "../../components";

import styles from "./home.module.scss";


const Home = () => {

    return (
        <>
            <main className={styles.home}>
                <Items/>
                <Comments/>
            </main>
        </>

    );
};

export default Home;