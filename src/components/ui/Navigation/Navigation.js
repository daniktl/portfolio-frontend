import { useState } from "react";

import { Link } from "react-router-dom";

import classes from "./Navigation.module.scss";

const pathNamesMapping = {
    main: "/",
    projects: "/projects",
    contact: "/contact"
}


function Navigation(props) {
    const [ clicked, setClicked ] = useState(false);

    const navigationItems = Object.entries(pathNamesMapping).map(
        ([key, value]) => 
        <li>
            <Link className={[classes.navigationLink, props.pathname === value ? classes.active: null].join(" ")} to={value}>{key}<span></span></Link>
        </li>
    )

  return (
    <div className={classes.navigationBar}>
      <div className={classes[`hamburger`]} onClick={() => setClicked(!clicked)}>
        <div className={classes[`hamburger-box`]}>
            <div className={classes[`hamburger-inner`]}></div>
        </div>
      </div>
      <span className={classes.logo}>daniel martich</span>
      <nav className={classes.navigation}>
        <ul>
            {navigationItems}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
