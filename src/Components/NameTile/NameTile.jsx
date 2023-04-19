import react from 'react';
import pfp from '../../assets/PFP.jpg';
import classes from './NameTile.module.css';

const NameTile = () => {
    return <div className={classes.container}>
         <div className={classes.pfp}>
            <img src={pfp} alt="pfp" />
         </div>
        <div className={classes.name}>Arjun Ingole</div>
    </div>
};

export default NameTile;