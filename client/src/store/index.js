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
        const response = await ApiService.login(email, password)
        if (response.success) {
            const { token, user } = response
            commit('setToken', token)
            commit('setUser', user)
            localStorage.setItem('token', token)
            return true
        } else {
            return false
        }
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