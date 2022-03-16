import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import state, {DialogsType, MessageType} from '../../redux/state';

type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

const Dialogs = (props: PropsType) => {

    let dialogsElements = state.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messageElements = state.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

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