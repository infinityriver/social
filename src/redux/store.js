import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Its my ferst post', likeCount: 0},
                {id: 2, message: 'Hi, how are you?', likeCount: 11},
                {id: 3, message: 'Hello!', likeCount: 78}],
            
            newPostText: 'it-kamasutra.com'
        } ,
    
        dialogsPage: {
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
        } ,
    
        sidebar: {
            friend: [
                {id:1},
                {id:2}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    
    subscribe(observer) {
        this._callSubscriber = observer // observer // // pattern //
    
    },

    dispatch(action) {
        
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebarReducer, action)

        this._callSubscriber(this._state);
    }
}


export default store;
