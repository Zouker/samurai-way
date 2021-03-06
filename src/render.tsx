import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addPost, RootStateType} from './redux/state';

export const renderTree = (state: RootStateType) => {
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
}