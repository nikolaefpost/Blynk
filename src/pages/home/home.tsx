import React from 'react';

import styles from "./home.module.scss";
import {Comments, Items} from "../../components";


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