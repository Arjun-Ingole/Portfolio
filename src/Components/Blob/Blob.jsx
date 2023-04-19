import React, { useState, useRef, useEffect } from "react";
import classes from "./Blob.module.css";

export default function Blob() {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const blobRef = useRef(null);
  
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
  
    useEffect(() => {
      const blob = blobRef.current;
  
      const interval = setInterval(() => {
        blob.style.transform = `translate(${cursorPos.x}px, ${cursorPos.y}px)`;
      }, 10);
  
      return () => clearInterval(interval);
    }, [cursorPos]);
  
    return (
      <div className={classes.blobcontainer} onMouseMove={handleMouseMove}>
        <div ref={blobRef} className={classes.blob}></div>
      </div>
    );
}