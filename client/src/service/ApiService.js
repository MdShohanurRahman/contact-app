import axios from 'axios'

const getToken = () => {
    return localStorage.getItem('token')
}

const apiClient = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken}`
    }
})

export default {
    login(credentials) {
        return apiClient.post('/login', credentials)
            .then(response => {
                if (response.data.access_token) {
                    localStorage.setItem('token', response.data.access_token)
                }
                return response.data
            })
    },
    logout() {
        localStorage.removeItem('token')
    },
    refreshToken(credentials) {
        return apiClient.post('/refresh-token', credentials)
            .then(response => {
                if (response.data.access_token) {
                    localStorage.setItem('token', response.data.access_token)
                }
                return response.data
            })
    },
    getContacts() {
        return apiClient.get('/contacts')
    },
    addContact(contact) {
        return apiClient.post('/contacts', contact)
    },
    updateContact(contact) {
        return apiClient.put(`/contacts/${contact.id}`, contact)
    },
    deleteContact(id) {
        return apiClient.delete(`/contact/${id}`)
    }
}
