import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Messages/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map( (d) => <DialogItem id={d.id} name={d.name} key={d.id}/>)


    let messagesElements = props.dialogsPage.messages.map( (m) => <Message id={m.id} message={m.message} key={m.id} />)

    let newMessageBody = props.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.onSendMessageClick()

    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.onNewMessageChange(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>

            <div className={s.messages}>

               <div>{messagesElements}</div> 
               <div>
                    <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="Enter your message"></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
               </div>

            </div>
        </div>
    );
}

export default Dialogs