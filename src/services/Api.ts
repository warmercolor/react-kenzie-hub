import axios from 'axios'

const token = localStorage.getItem('KenzieHub: Token')

export const Api = axios.create({
    baseURL: 'https://kenziehub.herokuapp.com',
    timeout: 5000, 
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    }
})