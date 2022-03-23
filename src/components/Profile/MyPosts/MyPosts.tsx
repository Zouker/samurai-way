import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import state, {PostsType} from '../../../redux/state';

type PropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}

const MyPosts = (props: PropsType) => {

    let postsElements = state.profilePage.posts.map(p => <Post key={p.id}
                                                               id={p.id}
                                                               message={p.message}
                                                               likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value);
            newPostElement.current.value = '';
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}

export default MyPosts;