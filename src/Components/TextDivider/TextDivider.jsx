import react from 'react';
import classes from './TextDivider.module.css';


function TextDivider({text}) {
    return (
        <div className={classes.text}>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
            </style> 
        {text}
     </div>
    );
}

export default TextDivider;
