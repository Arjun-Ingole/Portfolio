import React, { useRef } from 'react';
import classes from './ProjectContainer.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';

// Image Assets
import osiris from '../../assets/osiris.png';
import uranus from '../../assets/uranus.png';
import hydrogen from '../../assets/hydrogen.png';
import p404 from '../../assets/404.png';

const ProjectContainer = () => {
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
        image={osiris}
        title="Osiris [WIP]"
        description="Movie Tracker with beautiful UI using Flutter and Firebase"
        link="https://github.com/Arjun-Ingole/Uranus"
        />
        <ProjectCard
        image={uranus}
        title="Uranus [WIP]"
        description="Android anime radio app written in Dart and Flutter."
        link="https://github.com/Arjun-Ingole/Uranus"
        />
        <ProjectCard
        image={hydrogen}
        title="Hydrogen Kernel"
        description="Custom Linux kernel for Xiaomi's 720G devices."
        link="https://github.com/HydrogenKernel/Hydrogen"
        />
        <ProjectCard
        image={p404}
        title="Project 404"
        description="A CAF based ROM for Xiaomi's 720G devices."
        link="https://project404.xyz/"
        />
        <ProjectCard
        image="https://aadme.co/wp-content/uploads/2022/12/openai-avatar.png"
        title="GPT-3 Playground"
        description="Native Android app for OpenAI's GPT-3 API."
        link="https://github.com/Arjun-Ingole/GPT-3.kt"
        />
    </div>
  );
};

export default ProjectContainer;

