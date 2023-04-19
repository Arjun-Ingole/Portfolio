import React from "react";
import classes from "./SocialBar.module.css";

const SocialBar = () => {
    return <div className={classes.socialContainer}>
        <a href="https://instagram.com/arjuningole_" className={classes.socialLinkContainer}>
            <img src="https://github.com/Arjun-Ingole/Portfolio/raw/main/assets/socials/instagram.svg" alt="Instagram" className={classes.socialIcon}/>
            <p className={classes.socialName}>Instagram</p>
        </a>
        <a href="https://twitter.com/ArjunIngole_" className={classes.socialLinkContainer}>
            <img src="https://github.com/Arjun-Ingole/Portfolio/raw/main/assets/socials/twitter.svg" alt="Twitter" className={classes.socialIcon}/>
            <p className={classes.socialName}>Twitter</p>
        </a>
        <a href="https://github.com/Arjun-Ingole" className={classes.socialLinkContainer}>
            <img src="https://github.com/Arjun-Ingole/Portfolio/raw/main/assets/socials/github.svg" alt="Github" className={classes.socialIcon}/>
            <p className={classes.socialName}>Github</p>
        </a>
        <a href="mailto:arjuningole38@gmail.com" className={classes.socialLinkContainer}>
            <img src="https://github.com/Arjun-Ingole/Portfolio/raw/main/assets/socials/email.svg" alt="Email" className={classes.socialIcon}/>
            <p className={classes.socialName}>E-Mail</p>
        </a>
        <a href="https://www.linkedin.com/in/arjuningole/" className={classes.socialLinkContainer}>
            <img src="https://github.com/Arjun-Ingole/Portfolio/raw/main/assets/socials/linkedin.svg" alt="Email" className={classes.socialIcon}/>
            <p className={classes.socialName}>Linkedin</p>
        </a>
    </div>
};

export default SocialBar;