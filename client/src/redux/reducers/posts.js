import {CREATE, DELETE, FETCH_ALL, UPDATE} from '~/constants';

const reducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL: {
            return action.payload;
        }
        case CREATE: {
            const newState = [...state];
            newState.push(action.payload);
            return newState
        }
        case UPDATE: {
            return state.map(post => post._id === action.payload._id ? action.payload : post)
        }
        case DELETE: {
            return state.filter(post => post._id !== action.payload)
        }
        default:
            return state
    }
}

export default reducer