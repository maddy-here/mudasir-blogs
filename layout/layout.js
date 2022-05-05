import React from "react";
import { Fragment } from "react";
import Navigation from "../components/navigation";
import styles from './layout.module.css'

const Layout = (props) => {
  return (
    <Fragment>
        
        <Navigation />
        <div className={styles['fake-nav']}></div>
        
        <main>
            {props.children}
        </main>
    </Fragment>
  );
};

export default Layout;
