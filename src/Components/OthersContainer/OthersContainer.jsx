import React, { useRef } from 'react';
import classes from '../ProjectContainer/ProjectContainer.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';

// Image Assets
import resume from '../../assets/resume.png';
import hashnode from '../../assets/hashnode.png';
import module from '../../assets/module-hub.jpg';

const OthersContainer = () => {
  const containerRef = useRef(null);

  const handleMouseDown = (event) => {
    event.preventDefault();
    const container = containerRef.current;
    container.style.cursor = 'grabbing';
    container.style.userSelect = 'none';
    container.dataset.scrollX = container.scrollLeft + event.clientX;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (event) => {
    const container = containerRef.current;
    container.scrollLeft = container.dataset.scrollX - event.clientX;
  };

  const handleMouseUp = () => {
    const container = containerRef.current;
    container.style.cursor = 'grab';
    container.style.removeProperty('user-select');
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className={classes.projectContainer} ref={containerRef} onMouseDown={handleMouseDown}>
        <ProjectCard
        image={resume}
        title="Resume"
        description="Showcases my professional experience, skills and education"
        link="https://drive.google.com/file/d/162fdPrWUI_hPi7x-gf-xNBvmnAqZGtLc/view?usp=sharing"
        />
        <ProjectCard
        image={module}
        title="Module Hub"
        description="Telegram channel with 13K+ members for Android modding."
        link="https://t.me/ModuleHub"
        />
        <ProjectCard
        image={hashnode}
        title="Hashnode"
        description="My Technical Blogs hosted on Hashnode."
        link="https://arjuningole.hashnode.dev/"
        />
        <ProjectCard
        image="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5NKHQDjC1cUC441HTejxuQ.png"
        title="Medium"
        description="My Technical Blogs hosted on Medium."
        link="https://medium.com/@arjuningole"
        />
    </div>
  );
};

export default OthersContainer;