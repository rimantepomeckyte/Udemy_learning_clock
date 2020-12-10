import React from "react";
import classes from "./Topbar.module.css"

const TopBar=(props) => {
    return (
        <header>
        <nav className={classes.Topbar}>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
            </nav>
        </header>
    )
}

export default TopBar;