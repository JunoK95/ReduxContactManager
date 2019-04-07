import { GET_CONTACTS } from '../actions/types.js'
import { ADD_CONTACT } from '../actions/types.js'
import { DELETE_CONTACT } from '../actions/types.js'
import { GET_SINGLE_CONTACT } from '../actions/types.js';
import { UPDATE_CONTACT } from '../actions/types.js';

const initialState = {
    contacts: [],
    currentContact: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CONTACTS:
            return{
                ...state,
                contacts: action.payload 
            };
        case GET_SINGLE_CONTACT:
            return{
                ...state,
                currentContact: action.payload 
            };
        case ADD_CONTACT:
            return{
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        case DELETE_CONTACT:
            return{
                ...state,
                contacts: state.contacts.filter(x => x.id !== action.payload)
            }
        case UPDATE_CONTACT:
            return{
                ...state,
                contacts: state.contacts.map(x => x.id === action.payload.id ? x = action.payload: x)
            }
        default:
            return state;
    }
}