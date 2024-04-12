const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    messages: [
        {id: 1, message: 'Hello, hl are you?'},
        {id: 2, message: 'Yo'}],

    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Olya'},
        {id: 3, name: 'Varya'},
        {id: 4, name: 'Oleg'},
        {id: 5, name: 'Irina'},
        {id : 6, name: 'Borya'}],

    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
            return {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE: 
        let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        
        default:
            return state
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}

export default dialogsReducer