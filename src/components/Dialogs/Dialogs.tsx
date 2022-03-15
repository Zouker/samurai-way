import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import {DialogsType, MessageType} from '../../index';

type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

const Dialogs = (props: PropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messageElements = props.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;