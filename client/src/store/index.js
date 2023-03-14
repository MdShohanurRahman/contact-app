import ApiService from "@/service/ApiService";
const state = {
    token: null,
    user: null
}

const getters = {
    isAuthenticated: state => !!state.token,
    getUser: state => state.user
}

const mutations = {
    setToken(state, token) {
        state.token = token
    },
    setUser(state, user) {
        state.user = user
    }
}

const actions = {
    async login({ commit }, { email, password }) {
        ApiService
            .login({email, password})
            .then(response => {
                console.log(response)
                const { token, user } = response.data
                commit('setToken', token)
                commit('setUser', user)
                localStorage.setItem('token', token)
            })
            .catch(error => {
                console.log(error)
            })
    },
    async logout({ commit }) {
        commit('setToken', null)
        commit('setUser', null)
        localStorage.removeItem('token')
        return true
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}