import { GET_CONTACTS } from './types';
import { ADD_CONTACT } from './types';
import { DELETE_CONTACT } from './types';
import { GET_SINGLE_CONTACT } from './types';
import { UPDATE_CONTACT } from './types';
import axios from 'axios';

export const getContacts = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    });
}

export const getSingleContact = (id) => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    console.log(res)
    dispatch({
        type: GET_SINGLE_CONTACT,
        payload: res.data
    });
}

export const addContact = (contactInfo) => async dispatch =>{
    const res = await axios.post(`https://jsonplaceholder.typicode.com/users/`, contactInfo)
    dispatch({
        type: ADD_CONTACT,
        payload : res.data
    })
}

export const deleteContact = (id) => async dispatch => {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({
        type: DELETE_CONTACT,
        payload: id
    })
}

export const updateContact = (contactInfo) => async dispatch => {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${contactInfo.id}`, contactInfo)
    console.log(res)
    dispatch({
        type: UPDATE_CONTACT,
        payload: res.data
    })
}