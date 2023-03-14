import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})

export default {
    login(payload) {
        return apiClient.post('/users/login', payload)
    },
    signUp(payload) {
        return apiClient.post('/users/register', payload)
    },
    getContacts() {
        return apiClient.get('/contacts')
    },
    addContact(payload) {
        return apiClient.post('/contacts', payload)
    },
    getContact(id) {
        return apiClient.put(`/contacts/${id}`)
    },
    updateContact(id, payload) {
        return apiClient.put(`/contacts/${id}`, payload)
    },
    deleteContact(id) {
        return apiClient.delete(`/contact/${id}`)
    }
}
