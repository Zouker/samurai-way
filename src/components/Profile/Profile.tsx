import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import state, {PostsType} from '../../redux/state';

type PropsType = {
    posts: Array<PostsType>
}

const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.profilePage.posts}/>
        </div>
    );
}

export default Profile;