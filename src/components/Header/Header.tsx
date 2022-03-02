import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src={'https://cdn3.iconfinder.com/data/icons/3d-applications/256/app_icons_social_media_search___logo_google_engine_software.png'}/>
        </header>
    );
};

export default Header;