const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Its my ferst post', likeCount: 0},
        {id: 2, message: 'Hi, how are you?', likeCount: 11},
        {id: 3, message: 'Hello!', likeCount: 78}],
    
    newPostText: 'it-kamasutra.com',

    profile: null
}

const profileReducer = (state = initialState, action) => {
    window.state = state
    switch(action.type) {
        case ADD_POST: 
            let body = state.newPostText
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 4, message: body, likeCount: 2}]
            }
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        
        default:
            return state;
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}


export default profileReducer