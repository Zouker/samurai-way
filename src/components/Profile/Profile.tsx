import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src={'https://static.wixstatic.com/media/4b7a1c_c57b6632c8984cbb93ba4bd652c43e21~mv2.jpg/v1/fill/w_1000,h_333,al_c,q_90,usm_0.66_1.00_0.01/4b7a1c_c57b6632c8984cbb93ba4bd652c43e21~mv2.jpg'}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;