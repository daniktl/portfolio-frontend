import { React, useEffect } from 'react';

import Navigation from "../Navigation/Navigation";
import classes from "./Layout.module.scss";


const Layout = (props) => {

    useEffect(() => {
        window.scroll({"top": 0})
    }, [props.location])

    return <div className={classes.layout}>
        <Navigation pathname={props.location.pathname}/>
        <main style={{"height": "100vh"}}>
            {props.children}
        </main>
    </div>;
}

export default Layout;