
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }

}

let mapDispatchToProps = (dispatch) => {
    return{
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())
        },
        onNewMessageChange:  (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }

    }
    
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer