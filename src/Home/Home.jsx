import React, { useRef } from "react";
import classes from "./Home.module.css";
import NameTile from "../Components/NameTile/NameTile";
import Description from "../Components/Description/Description";
import TextDivider from "../Components/TextDivider/TextDivider";
import ProjectContainer from "../Components/ProjectContainer/ProjectContainer";
import SocialBar from "../Components/SocialBar/SocialBar";
import OthersContainer from "../Components/OthersContainer/OthersContainer";

const Home = () => {
  return <div className={classes.texture}>
    <div className={classes.mainContainer}>
        <NameTile />
        <Description />
        <TextDivider text="PROJECTS" />
        <ProjectContainer />
        <TextDivider text="SOME OTHER STUFF" />
        <OthersContainer />
        <TextDivider text="SOCIALS" />
        <SocialBar />
  </div>;
  </div>
}

export default Home;