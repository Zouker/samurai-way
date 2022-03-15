import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

let dialogs: Array<DialogsType> = [
    {id: 1, name: 'Denis'},
    {id: 2, name: 'Eugene'},
    {id: 3, name: 'Olya'},
    {id: 4, name: 'Zhesha'},
    {id: 5, name: 'Kostya'},
    {id: 6, name: 'Ira'},
]

let messages: Array<MessageType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
]

let posts: Array<PostsType> = [
    {id: 1, message: 'Hi, how are you?', likesCount: 0},
    {id: 2, message: 'It\'s my first post', likesCount: 23},
]

export type DialogsType = {
    name: string
    id: number
}

export type MessageType = {
    message: string
    id: number
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App dialogs={dialogs} messages={messages} posts={posts} />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);