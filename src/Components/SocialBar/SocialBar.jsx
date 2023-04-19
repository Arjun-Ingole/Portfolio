import React from "react";
import classes from "./SocialBar.module.css";

// Icons
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import github from "../../assets/icons/github.svg";
import email from "../../assets/icons/email.svg";
import linkedin from "../../assets/icons/linkedin.svg";

const SocialBar = () => {
    return <div className={classes.socialContainer}>
        <a href="https://instagram.com/arjuningole_" className={classes.socialLinkContainer}>
            <img src={instagram} alt="Instagram" className={classes.socialIcon}/>
            <p className={classes.socialName}>Instagram</p>
        </a>
        <a href="https://twitter.com/ArjunIngole_" className={classes.socialLinkContainer}>
            <img src={twitter} alt="Twitter" className={classes.socialIcon}/>
            <p className={classes.socialName}>Twitter</p>
        </a>
        <a href="https://github.com/Arjun-Ingole" className={classes.socialLinkContainer}>
            <img src={github} alt="Github" className={classes.socialIcon}/>
            <p className={classes.socialName}>Github</p>
        </a>
        <a href="mailto:arjuningole38@gmail.com" className={classes.socialLinkContainer}>
            <img src={email} alt="Email" className={classes.socialIcon}/>
            <p className={classes.socialName}>E-Mail</p>
        </a>
        <a href="https://www.linkedin.com/in/arjuningole/" className={classes.socialLinkContainer}>
            <img src={linkedin} alt="Linkedin" className={classes.socialIcon}/>
            <p className={classes.socialName}>Linkedin</p>
        </a>
    </div>
};

export default SocialBar;