import React from "react";
import classes from "./ProjectCard.module.css";

function ProjectCard({image, title, description, link}) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
    <div className={classes.projectCard}>
      <img src={image} alt={title} className={classes.imgContainer}/>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.projectDesc}>{description}</p>
    </div>
    </a>
  );
}

export default ProjectCard;